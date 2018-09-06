@extends('frontend.layouts.master')
@section('content')
    <div class="row" id="slide">
        <div class="owl-carousel owl-theme">
            <div class="item"><img src="/frontend/images/slide/001.jpg"/></div>
            <div class="item"><img src="/frontend/images/slide/002.jpg" /></div>
            <div class="item"><img src="/frontend/images/slide/003.jpg" /></div>
            <div class="item"><img src="/frontend/images/slide/004.jpg" /></div>
            <div class="item"><img src="/frontend/images/slide/005.jpg" /></div>
            <div class="item"><img src="/frontend/images/slide/006.jpg" /></div>
            <div class="item"><img src="/frontend/images/slide/007.jpg" /></div>
        </div>
        <div id="box-timkiem">
            <div id="box-search">
                <form method="get" action="{{ route('restaurant.search') }}">
                    <div class="row" id="chooselocation">
                        <a class="active">{{ trans('frontend.your_location') }}</a>
                        <a>{{ trans('frontend.my_location') }}</a>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-8 diachicuatoi" style="display:none;padding:0px;padding-top:5px;">
                            <select class="form-control selectbox">
                                <option>Ngo Quyen, Hai Phong</option>
                            </select>
                        </div>
                        <div class="col-6 col-sm-4 vitricuaban">
                            <select class="form-control selectbox" name="city" id="select_city">
                                <option value="0">{{ trans('frontend.select_city') }}</option>
                                @if(count($cities))
                                    @foreach($cities as $city)
                                        <option value="{{ $city->id }}">{{ $city->name }}</option>
                                    @endforeach
                                @endif
                            </select>
                        </div>
                        <div class="col-6 col-sm-4 vitricuaban">
                            <select class="form-control selectbox" name="district" id="select_district">
                                <option value="0">{{ trans('frontend.select_district') }}</option>
                            </select>
                        </div>
                        <div class="col-12 col-sm-4">
                            <button type="submit" class="btn">{{ trans('frontend.search') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <br><br>
    <div class="row">
        <div class="container" id="usermenu">
            <div class="row">
                <div class="col-sm-3">
                    <div class="list-group">
                        <a href="/userinfo" class="list-group-item active waves-light"> <i class="fas fa-user"></i> {{ trans('frontend.userinfo') }}</a>
                        <a href="/yeuthich" class="list-group-item waves-effect"><i class="fas fa-clipboard-list"></i> {{ trans('frontend.favorite_restaurants') }}</a>
                        <a href="/lichsu" class="list-group-item waves-effect"><i class="fas fa-cart-arrow-down"></i> {{ trans('frontend.order_history') }}</a>
                        <a href="/doimatkhau" class="list-group-item waves-effect"><i class="fas fa-unlock"></i> {{ trans('frontend.change_password') }}</a>
                        <a href="/" class="list-group-item waves-effect"><i class="fas fa-sign-out-alt"></i> {{ trans('frontend.logout') }}</a>
                    </div>
                </div>
                <div class="col-sm-9">
                    <h3>{{ trans('frontend.update_userinfo') }}</h3>
                    <hr>
                        {!! Form::open(['route' => 'update.user.info']) !!}
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="md-form form-sm">
                                    <i class="fas fa-user prefix"></i>
                                    <input type="text" id="full_name" name="full_name" value="{{ $user_info->full_name }}" class="form-control form-control-sm">
                                    <label for="full_name">{{ trans('frontend.your_name') }}</label>
                                    @if($errors->has('full_name'))
                                        <span class="text-danger">{{ $errors->first('full_name') }}</span>
                                    @endif
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="md-form form-sm">
                                    <i class="fas fa-mobile-alt prefix"></i>
                                    <input type="text" id="phone" name="phone" value="{{ $user_info->phone }}" class="form-control form-control-sm">
                                    <label for="phone">{{ trans('frontend.your_phone') }}</label>
                                    @if($errors->has('phone'))
                                        <span class="text-danger">{{ $errors->first('phone') }}</span>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="md-form form-sm">
                                    <i class="far fa-envelope prefix"></i>
                                    <input type="text" id="user_email" name="user_email" value="{{ Auth::user()->email }}" class="form-control form-control-sm">
                                    <label for="user_email">{{ trans('frontend.your_email') }}</label>
                                    @if($errors->has('user_email'))
                                        <span class="text-danger">{{ $errors->first('user_email') }}</span>
                                    @endif
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="md-form form-sm">
                                    <i class="fas fa-address-book prefix"></i>
                                    <input type="text" id="address" name="address" value="{{ $user_info->address }}" class="form-control form-control-sm">
                                    <label for="address">{{ trans('frontend.your_address') }}</label>
                                    @if($errors->has('address'))
                                        <span class="text-danger">{{ $errors->first('address') }}</span>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="row float-right">
                            <button type="submit" class="btn btn-warning btn-sm">{{ trans('frontend.save_changes') }}</button>
                        </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection