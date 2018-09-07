@extends('frontend.layouts.master')
@section('content')
    @include('frontend.partials.slide')
    <br><br>
    <div class="row">
        <div class="container" id="usermenu">
            <div class="row">
                <div class="col-sm-3">
                    @include('frontend.partials.sidebar_userinfo')
                </div>
                <div class="col-sm-9">
                    <h3>{{ trans('frontend.list_favorite') }}</h3>
                    <hr>
                    <div class="row" id="listCardv2">
                        @if(count($restaurants))
                            @foreach($restaurants as $restaurant)
                                <div class="col-6 col-sm-3 listCardv2-item">
                                    <a href="{{ route('restaurant', $restaurant->id) }}" title="{{ $restaurant->name }}" class="card">
                                        @php
                                            $now = strtotime(\Illuminate\Support\Carbon::now()->format('H:i'));
                                            $status = ($restaurant->is_open === 1 && ($now > strtotime($restaurant->time_open) && $now < strtotime($restaurant->time_close))) ? ' online' : ' offline';
                                        @endphp
                                        <div class="dotOnline{{ $status }}">
                                            <i class="fas fa-circle"></i>
                                        </div>
                                        <img class="card-img-top" src="{{ $restaurant->image }}" />
                                        <div class="card-body">
                                            <p class="card-head">{{ $restaurant->name }}</p>
                                            <p class="card-text">{{ $restaurant->address }}</p>
                                            <p class="card-note">{{ $restaurant->alert }}</p>
                                        </div>
                                    </a>
                                </div>
                            @endforeach
                        @endif
                    </div>
                    <div class="row">
                        <!--Pagination-->
                        {!! $restaurants->links('vendor/pagination/frontend') !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
