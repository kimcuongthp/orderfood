<ul class="nav nav-tabs bordered"><!-- available classes "bordered", "right-aligned" -->
    <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
    <?php $active = ($locale == LaravelLocalization::getCurrentLocale()) ? 'active' : ''; ?>
    <li class="{{ $active }}">
        <a href="#{{ $locale }}3" data-toggle="tab">
            <span class="visible-xs">{{ $language['native'] }}</span>
            <span class="hidden-xs">{{ $language['native'] }}</span>
        </a>
    </li>
    <?php endforeach; ?>
</ul>