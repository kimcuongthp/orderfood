
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-body">
            <div class="row">
                <div class="box-item-detail" style="width:100%">
                    <div class="box-img">
                        <img class="img-thumbnail" src="{{$food->image}}" alt="{{$food->name}}">
                    </div>
                    <div class="box-info">
                        <h3 class="box-info-title" data-food_id="{{$food->id}}">{{$food->name}} </h3>
                        <p class="box-info-attr">{{$food->description1}}</p>
                        <p class="box-info-text">{{$food->description2}}</p>
                        <p class="box-info-count">{{trans('frontend.ordered')}} {{$food->order_detail->count()}} {{trans('frontend.times')}}</p>
                        <input type="hidden" name="priceFood" value="{{$food->price}}" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="modal-data">
                    @foreach($food->food_options as $food_option)
                        @php $check =0; @endphp
                        <h3>{{$food_option->name}} <span style="font-size: 11px;">({{$food_option->note or ""}})</span> </h3>
                        <div class="row h3-item">
                            @foreach($food_option->sub_options as $sub_option)
                                @if($food_option->one_or_more == 1)
                                <div class="col-sm-6">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" {{in_array($sub_option->id,$orderOption) ==true ? 'checked':'' }}  class="custom-control-input" id="foodcb{{$sub_option->id}}" data-food_option ='{{$food_option->id}}' name="foodcb{{$sub_option->id}}" value="{{$sub_option->price}}" />
                                        <label class="custom-control-label" for="foodcb{{$sub_option->id}}">{{$sub_option->name}}</label>
                                        @if($sub_option->price > 0)
                                            <span> + {{number_format($sub_option->price)}}đ</span>
                                        @endif
                                    </div>
                                </div>
                                @else
                                    @php $check =$check + 1; @endphp
                                    <div class="col-sm-6">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" {{$check == 1? 'checked':''}} {{in_array($sub_option->id,$orderOption) ==true ? 'checked':'' }}  class="custom-control-input" name="foodrd{{$food_option->id}}" value="{{$sub_option->price}}" id="foodrd{{$sub_option->id}}">
                                            <label class="custom-control-label" for="foodrd{{$sub_option->id}}">{{$sub_option->name}}</label>
                                            @if($sub_option->price > 0)
                                                <span> + {{number_format($sub_option->price)}}đ</span>
                                            @endif
                                        </div>
                                    </div>
                                @endif
                            @endforeach
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="modal-footer">
                <div class="button-plus-minus">

                    <button type="button" class="btn btn-red btn-sm btn-minus"><i class="fas fa-minus"></i></button>
                    <input type="text" name="numberFood" value="{{$quality !=0? $quality:1}}" readonly >
                    <button type="button" class="btn btn-green btn-sm btn-plus"><i class="fas fa-plus"></i></button>
                </div>
                <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                <button class="btn btn-orange btn-sm"  id="btnAddOrderItem"> <i class="fas fa-plus"></i> <span id="total">{{number_format( $price==0? $food->price:$price)}}</span> <sup>d</sup> </button>
                <button class="btn btn-blue btn-sm"  data-dismiss="modal"> {{trans('frontend.close_form')}}</button>

            </div>
        </div>
    </div>
</div>

<script>

</script>