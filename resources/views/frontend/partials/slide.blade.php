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