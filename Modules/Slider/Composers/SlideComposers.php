<?php

namespace Modules\Slider\Composers;

class SlideComposers
{
    public function compose(\Illuminate\View\View $view)
    {
        $slides = \Modules\Slider\Entities\Slide::defaultOrder()->get();
        $view->with('slides',$slides);
    }
}