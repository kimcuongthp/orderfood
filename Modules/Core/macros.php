<?php

use Illuminate\Support\HtmlString;
use Illuminate\Support\ViewErrorBag;

Form::macro('normalInput', function($name, $title, $placeholder, $description = null, ViewErrorBag $errors, $col = false, $object = [])
{
    $string = '<div class="form-group'. ($errors->has($name) ? ' validate-has-error' : '') .'">';
    $string .= Form::label($name, $title, ['class' => 'control-label'. ($col ? ' col-sm-3' : '')]);
    $data = !empty($object->{$name}) ? $object->{name} : '';
    $string .= $col ? '<div class="col-sm-5">' : '';
    $string .= Form::text($name, old($name, $data),['class' => 'form-control', 'placeholder' => $placeholder]);
    $string .= $description ? '<span class="description">'.$description.'</span>' : '';
    $string .= $errors->first($name, '<span class="validate-has-error">:message</span>');
    $string .= $col ? '</div>' : '';
    $string .= '</div>';

    return new HtmlString($string);
});