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
                    @include('frontend.partials.sidebar_userinfo')
                </div>
                <div class="col-sm-9">
                    <h3>Lịch sử đơn hàng</h3>
                    <hr>
                    <?php for($i=1;$i<=10;$i++){ ?>
                    <div class="card lichsu">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-2">
                                    <img src="public/images/logo-7.jpg" class="img-thumbnail" alt="" width="120" height="120">
                                </div>
                                <div class="col-sm-8">
                                    <p class="ls-nhahang"><a href="/nhahang">Trà Sữa Hiberry - Nguyễn Văn Bảo</a> </p>
                                    <p class="ls-sotien"> Tổng tiền: <span>400.000 <sup>đ</sup></span>  </p>
                                    <p class="ls-trangthai"> Đang vận chuyển </p>
                                    <p class="ls-time"> <i class="icon-clock"></i> 12:10 8/10/2018 </p>
                                </div>
                                <div class="col-sm-2">
                                    <button type="button" name="button" onclick="fnModalHistory()" class="btn btn-warning btn-sm">Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')
    <script>
        $('[href="/order-history"]').addClass('active');
    </script>
@endpush