<div class="row" id="slide">
    <div class="owl-carousel owl-theme">
        @if(count($slides))
            @foreach($slides as $slide)
                <div class="item"><img src="{{ $slide->image }}" alt="{{ $slide->name }}" /></div>
            @endforeach
        @endif
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
                                    <?php
                                    if(Route::currentRouteName() === 'restaurant.search') {
                                        $selected = (request('city') == $city->id) ? ' selected' : '';
                                    }
                                    else {
                                        $selected = '';
                                        $html = '<option value="0">'.trans('frontend.select_district').'</option>';
                                    }
                                    ?>
                                    <option value="{{ $city->id }}"{{$selected}}>{{ $city->name }}</option>
                                @endforeach
                            @endif
                        </select>
                    </div>
                    <div class="col-6 col-sm-4 vitricuaban">
                        <select class="form-control selectbox" name="district" id="select_district">
                            {!! $html !!}
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