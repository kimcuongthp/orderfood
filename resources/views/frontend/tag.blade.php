@extends('frontend.layouts.master')
@section('content')
    <div class="row" style="margin-top:130px;">
        <div class="container" id="listCardv2">
            <div class="row">
                <div class="col-md-12"><h3 style="font-size:18px; margin-bottom: 20px">Tag: {{ $tag->name }}</h3></div>
            </div>
            <div class="row">
                @if(count($restaurants))
                    @foreach($restaurants as $restaurant)
                        <div class="col-6 col-sm-4 col-lg-20 listCardv2-item">
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
                                    <p class="card-note"><i class="fas fa-tags"></i> {{ $restaurant->alert }}</p>
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
@endsection