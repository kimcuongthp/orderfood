<?php

namespace Botble\Media\Providers;

use App;
use Botble\Media\Facades\RvMediaFacade;
use Botble\Media\Models\MediaSetting;
use Botble\Media\Repositories\Caches\MediaSettingCacheDecorator;
use Botble\Media\Repositories\Eloquent\MediaSettingRepository;
use Botble\Media\Repositories\Interfaces\MediaSettingInterface;
use Botble\Support\Services\Cache\Cache;
use Botble\Media\Models\MediaFile;
use Botble\Media\Models\MediaFolder;
use Botble\Media\Repositories\Caches\MediaFileCacheDecorator;
use Botble\Media\Repositories\Caches\MediaFolderCacheDecorator;
use Botble\Support\Providers\SupportServiceProvider;
use Chumper\Zipper\Facades\Zipper;
use Chumper\Zipper\ZipperServiceProvider;
use File;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;
use Botble\Media\Repositories\Eloquent\MediaFileRepository;
use Botble\Media\Repositories\Eloquent\MediaFolderRepository;
use Botble\Media\Repositories\Interfaces\MediaFileInterface;
use Botble\Media\Repositories\Interfaces\MediaFolderInterface;
use Intervention\Image\ImageServiceProvider;
use Intervention\Image\Facades\Image as ImageFacade;
use Schema;

/**
 * Class MediaServiceProvider
 * @package Botble\Media
 * @author Sang Nguyen
 * @since 02/07/2016 09:50 AM
 */
class MediaServiceProvider extends ServiceProvider
{

    /**
     * @var App
     */
    protected $app;

    /**
     * @author Sang Nguyen
     */
    public function register()
    {
        $this->app->register(SupportServiceProvider::class);
        $this->app->register(ImageServiceProvider::class);
        $this->app->register(ZipperServiceProvider::class);

        $this->mergeConfigFrom(__DIR__ . '/../../config/media.php', 'media');

        if (config('media.cache.enable', false)) {
            $this->app->singleton(MediaFileInterface::class, function () {
                return new MediaFileCacheDecorator(new MediaFileRepository(new MediaFile()), new Cache($this->app['cache'], MediaFileRepository::class, config('media.cache', [])));
            });

            $this->app->singleton(MediaFolderInterface::class, function () {
                return new MediaFolderCacheDecorator(new MediaFolderRepository(new MediaFolder()), new Cache($this->app['cache'], MediaFolderRepository::class, config('media.cache', [])));
            });

            $this->app->singleton(MediaSettingInterface::class, function () {
                return new MediaSettingCacheDecorator(new MediaSettingRepository(new MediaSetting()), new Cache($this->app['cache'], MediaSettingRepository::class, config('media.cache', [])));
            });
        } else {
            $this->app->singleton(MediaFileInterface::class, function () {
                return new MediaFileRepository(new MediaFile());
            });

            $this->app->singleton(MediaFolderInterface::class, function () {
                return new MediaFolderRepository(new MediaFolder());
            });

            $this->app->singleton(MediaSettingInterface::class, function () {
                return new MediaSettingRepository(new MediaSetting());
            });
        }

        $this->autoloadHelpers(__DIR__ . '/../../helpers');

        AliasLoader::getInstance()->alias('RvMedia', RvMediaFacade::class);
        AliasLoader::getInstance()->alias('Image', ImageFacade::class);
    }

    /**
     * Boot the service provider.
     * @author Sang Nguyen
     */
    public function boot()
    {
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'media');
        $this->loadTranslationsFrom(__DIR__ . '/../../resources/lang', 'media');

        if (App::VERSION() >= '5.3.31') {
            $this->loadRoutesFrom(__DIR__ . '/../../routes/web.php');
            if (App::VERSION() >= '5.4.0') {
                Schema::defaultStringLength(191);
            }
            $this->loadMigrationsFrom(__DIR__ . '/../../database/migrations');
        } else {
            require_once __DIR__ . '/../../routes/web.php';

            if ($this->app->runningInConsole()) {
                $this->publishes([__DIR__ . '/../../database/migrations' => database_path('migrations'),], 'migrations');
            }
        }

        if ($this->app->runningInConsole()) {
            $this->publishes([__DIR__ . '/../../resources/views' => resource_path('views/vendor/media')], 'views');
            $this->publishes([__DIR__ . '/../../resources/lang' => resource_path('lang/vendor/media')], 'lang');
            $this->publishes([__DIR__ . '/../../config/media.php' => config_path('media.php')], 'config');
            $this->publishes([__DIR__ . '/../../resources/assets' => resource_path('assets/media')], 'resources');
            $this->publishes([__DIR__ . '/../../public/assets' => public_path('vendor/media'),], 'assets');
        }
    }

    /**
     * Load module's helpers
     * @param $directory
     * @author Sang Nguyen
     * @since 2.0
     */
    public function autoloadHelpers($directory)
    {
        $helpers = File::glob($directory . '/*.php');
        foreach ($helpers as $helper) {
            File::requireOnce($helper);
        }
    }
}
