@extends('frontend.layouts.master')
@section('content')
    <div class="row" id="box-order-search">
        <div class="container">
            <ul class="nav nav-tabs" id="box-order-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="area-tab" data-toggle="tab" href="#area" role="tab" aria-controls="area" aria-selected="true">{{ trans('frontend.area') }} <span id="count_area"></span><i class="fas fa-angle-down"></i> </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="classify-tab" data-toggle="tab" href="#classify" role="tab" aria-controls="classify" aria-selected="false">{{ trans('frontend.classify') }} <span id="count_classify"></span><i class="fas fa-angle-down"></i></a>
                </li>
                <li class="nav-item dropdown ml-auto li-select">
            <span>
                <span style="margin: 0" id="count_result">{{ $count }}</span> {{ trans('frontend.result') }}
            </span>
                    <select class="" name="">
                        <option value="">Duoc dat nhieu</option>
                        <option value="">Tat ca</option>
                        <option value="">Gan toi</option>
                        <option value="">Dia diem moi</option>
                        <option value="">OrderfoodVn giao</option>
                        <option value="">Nha hang giao</option>
                    </select>
                </li>
            </ul>
            <div class="tab-content" id="box-order-tab-content" style="display:none">
                <div class="tab-pane fade show active" id="area" role="tabpanel" aria-labelledby="area-tab">
                    {!! Form::open(['route' => 'restaurant.all', 'method' => 'get']) !!}
                    <div class="row">
                        @if(count($cities))
                            @foreach($cities as $city)
                            <div class="col-6 col-sm-3 col-md-2 box-order-search-checkbox">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input area" id="area_{{ $city->id }}" value="{{$city->id}}" name="area[]"{{ (!empty(request()->get('area')) && in_array($city->id, request()->get('area')) ? ' checked' : '') }}>
                                    <label class="custom-control-label" for="area_{{ $city->id }}">{{ $city->name }}</label>
                                </div>
                            </div>
                            @endforeach
                        @endif
                    </div>
                    <br>
                    <div class="row float-right">
                        <button type="submit" class="btn btn-deep-orange btn-sm float-right"> <i class="fas fa-search"></i> {{ trans('frontend.search') }} </button>
                    </div>
                </div>
                <div class="tab-pane fade" id="classify" role="tabpanel" aria-labelledby="classify-tab">
                    <div class="row">
                        @if(count($categories))
                        @foreach($categories as $category)
                        <div class="col-6 col-sm-3 col-md-2 box-order-search-checkbox">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input classify" id="phanloai_{{ $category->id }}" value="{{ $category->id }}" name="phanloai[]"{{ (!empty(request()->get('phanloai')) && in_array($category->id, request()->get('phanloai')) ? ' checked' : '') }}>
                                <label class="custom-control-label" for="phanloai_{{ $category->id }}">{{ $category->name }}</label>
                            </div>
                        </div>
                        @endforeach
                        @endif
                    </div>
                    <br>
                    <div class="row float-right">
                        <button type="submit" class="btn btn-deep-orange btn-sm float-right"> <i class="fas fa-search"></i> {{ trans('frontend.search') }} </button>
                    </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
    <div class="row" style="margin-top:50px;">
        <div class="container" id="listCardv2">
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
@endsection
@push('js-stack')
    <script>
        $(document).ready(function(){
            var checked_area = $('.area:checkbox:checked').length;
            if(checked_area)
            {
                $('#count_area').html('('+checked_area+') ');
            }

            var checked_classify = $('.classify:checkbox:checked').length;
            if(checked_classify)
            {
                $('#count_classify').html('('+checked_classify+') ');
            }
        });
    </script>
@endpush