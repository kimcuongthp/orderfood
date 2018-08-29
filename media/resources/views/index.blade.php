@extends('backend.layouts.master')
@section('content')
    {!! RvMedia::renderHeader() !!}
    {!! RvMedia::renderContent() !!}
    {!! RvMedia::renderFooter() !!}
@stop