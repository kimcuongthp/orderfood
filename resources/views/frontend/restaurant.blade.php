@extends('frontend.layouts.master')
@section('content')
    <style media="screen">
        #imglogo1{
            box-shadow: 0 0px 0px 0px black;
            height: 70px;
        }
    </style>

    <div class="row" id="detail-nhahang">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    @if($restaurant->video =='' || $restaurant->video ==null)
                        <div class="video-container"><img style="position: absolute;width: 100%;height: 100%;" src="{{$restaurant->image}}"></div>
                    @else
                        <div class="video-container"><iframe width="853" height="480" src="{{$restaurant->video}}" frameborder="0" allowfullscreen></iframe></div>
                    @endif
                </div>
                <div class="col-md-7">
                    <div class="row nh-breadcrum">
                        <a href="#">Trang chủ</a>
                        <a href="#">{{$restaurant->city->name}}</a>
                        <a href="#">{{$restaurant->categories->first()->name or ''}}</a>
                        <a href="#">{{$restaurant->name}}</a>
                    </div>
                    <div class="row nd-name">
                        {{$restaurant->name}}
                        @if($fav)
                            <a class="btn-love btn btn-sm btn-white" id="btn-love" data-action="remove-favorite"> <i class="favorite-icon fas fa-heart"></i> {{ trans('frontend.favorite') }}</a>
                        @else
                            @if(!Auth::check())
                                <a class="btn-love btn btn-sm btn-white" onclick="$('#modalLRFormDemo').modal('show');"> <i class="favorite-icon far fa-heart"></i> {{ trans('frontend.favorite') }}</a>
                            @else
                                <a class="btn-love btn btn-sm btn-white" id="btn-love" data-action="add-favorite"> <i class="favorite-icon far fa-heart"></i> {{ trans('frontend.favorite') }}</a>
                            @endif
                        @endif
                    </div>
                    <div class="row nd-adress">
                        {{$restaurant->address}}
                    </div>
                    <div class="row nh-rate rating star-{{$star}}"></div>
                    <div class="row">
                        <div class="nd-status {{$isOpen ==true ?"online":"offline"}} ">
                            <i class="fas fa-circle"></i> {{$isOpen ==true ?trans('frontend.open'):trans('frontend.close')}}
                        </div>
                        <div class="nh-time">
                            <i class="icon-clock"></i> {{$restaurant->time_open}} - {{$restaurant->time_close}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="nh-money">
                            {{--<i class="fas fa-dollar-sign"></i>--}}
                            đ {{number_format($priceMaxMin->min)}} - {{number_format($priceMaxMin->max)}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div>
                        <div class="btn-google">
                            <g:plusone size="tall"></g:plusone>
                        </div>
                    </div>
                    <div class="row" id="nd-option" >
                        <div class="col">
                            <div class="row">
                                {{trans('frontend.trans_fee')}}
                            </div>
                            <div class="row">
                                 {{number_format($restaurant->trans_fee)}} d/km
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                {{trans('frontend.create_time')}}
                            </div>
                            <div class="row">
                                40 minutes
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                {{trans('frontend.delivery_by')}}
                            </div>
                            <div class="row" style="color: red;font-weight: 700">
                                Orderfood.vn
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                {{trans('frontend.minimum')}}
                            </div>
                            <div class="row">
                                {{number_format($restaurant->price_min)}} <sup>đ</sup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>

    <div class="row" id="nd-detail" ng-app ="myApp">
        <div class="container" style="position:relative" ng-controller="RestaurantCtrl">
            <div class="row" >
                <div class="nh-tab">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="thucdon-tab" data-toggle="tab" href="#thucdon" role="tab" aria-controls="thucdon" aria-selected="true">{{trans('frontend.menu')}}  </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="danhgia-tab" data-toggle="tab" href="#danhgia" role="tab" aria-controls="danhgia" aria-selected="false">{{trans('frontend.review')}}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="gioithieu-tab" data-toggle="tab" href="#gioithieu" role="tab" aria-controls="gioithieu" aria-selected="false">{{trans('frontend.introduce')}}</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="thucdon" role="tabpanel" aria-labelledby="thucdon-tab">
                            <div class="row" id="nh-listgroup">
                                <div class="nh-menu">
                                    <ul class="list-group">
                                        @foreach($restaurant->typeoffood as $typeoffood)
                                            <li class="list-group-item"> <a  href="#box-item-{{$typeoffood->id}}">{{$typeoffood->name}} </a> </li>
                                        @endforeach
                                    </ul>
                                </div>
                                <div class="nh-sp">
                                    @foreach($restaurant->typeoffood as $typeoffood)
                                        <div class="box-item" id="box-item-{{$typeoffood->id}}">
                                            <h2>{{$typeoffood->name}}</h2>
                                            @php $foods = \Modules\Restaurant\Entities\Food::with('food_options','order_detail')->where(['typeoffood_id'=>$typeoffood->id,'status'=>1])->get(); @endphp
                                            @foreach($foods as $food)
                                                <div class="box-item-detail">
                                                    <div class="box-img">
                                                        <img class="img-thumbnail" src="{{$food->image}}" alt="">
                                                    </div>
                                                    <div class="box-info" style="min-height: 75px;">
                                                        <h3 class="box-info-title">{{$food->name}}</h3>
                                                        <p class="box-info-attr">{{$food->description1 or ""}}</p>
                                                        <p class="box-info-text">{{$food->description2 or ''}}</p>
                                                        <p class="box-info-count">{{trans('frontend.ordered')}} {{$food->order_detail->count()}} {{trans('frontend.times')}}</p>
                                                    </div>
                                                    <div class="box-price">
                                                        <span>{{number_format($food->price)}} <sup>đ</sup></span>
                                                        <button type="button" onclick="fnModalFood('{{$food->id}}','{{$food->food_options->count()}}')" class="btn btn-outline-warning btn-sm waves-effect px-3"><i class="fas fa-plus" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        <!-- -----------------------------Tab danh gia----------------------------------- -->
                        <div class="tab-pane fade text-center" id="danhgia" role="tabpanel" aria-labelledby="danhgia-tab">

                            <div class="row">
                                @foreach($comments as $comment)
                                    <div class="comment-item">
                                        <div class="row">
                                            <div class="comment-item-img">
                                                <img src="{{$comment->image}}" alt="" width="50" height="50">
                                            </div>
                                            <div class="comment-item-user">
                                                <p>{{$comment->full_name}}</p>
                                                <div class="rating star-{{$comment->star}}"></div>
                                                <p> <i class="icon-clock"></i> {{ Carbon\Carbon::parse($comment->updated_at)->format('H:i M d Y') }}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            {{$comment->message}}
                                        </div>
                                    </div>
                                @endforeach
                            </div>

                            @if($rated ==false)
                                <div class="row">
                                    <p>{{trans('frontend.please_leave_your_review')}}
                                    <div class="comment-send">
                                        <section class='rating-widget'>
                                            <div class='rating-stars text-center'>
                                                <ul id='stars'>
                                                    <li class='star' title='Poor' data-value='1'>
                                                        <i class='fa fa-star fa-fw'></i>
                                                    </li>
                                                    <li class='star' title='Fair' data-value='2'>
                                                        <i class='fa fa-star fa-fw'></i>
                                                    </li>
                                                    <li class='star' title='Good' data-value='3'>
                                                        <i class='fa fa-star fa-fw'></i>
                                                    </li>
                                                    <li class='star' title='Excellent' data-value='4'>
                                                        <i class='fa fa-star fa-fw'></i>
                                                    </li>
                                                    <li class='star' title='WOW!!!' data-value='5'>
                                                        <i class='fa fa-star fa-fw'></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </section>
                                    </div>
                                    </p>
                                </div>
                                <form method="post" action="/restaurant/rate" id="form-rate">
                                    @csrf
                                    <div class="row">
                                        <input type="hidden" value="{{$restaurant->id}}" name="id">
                                        <input type="hidden" value="" name="rates" />
                                        <div class="form-group" style="width:100%">
                                            <textarea name="message" class="form-control rounded-0" rows="5" style="width:100%"></textarea>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="float-right" style="width:100%">
                                            <button type="submit" class="btn btn-warning btn-sm float-right">Send</button>
                                        </div>
                                    </div>
                                </form>
                            @endif


                        </div>
                        <!-- -----------------------------End Tab danh gia----------------------------------- -->
                        <div class="tab-pane fade" id="gioithieu" role="tabpanel" aria-labelledby="gioithieu-tab">
                            {!! $restaurant->description !!}
                        </div>
                    </div>
                </div>


                <!-- ---------------------------------------------------------------- -->
                <div class="nh-order">
                    <div class="box-order">
                        <div class="box-order-title">
                            <button type="button" name="button" onclick="fnResetOrder('{{$restaurant->id}}')" class="btn">Reset</button>
                        </div>
                        <div class="box-order-list">

                            <div class="box-order-item" ng-repeat="item in orders">
                                <div class="row" style="min-height: 27px;">
                                    <span ng-bind-html="item.name" style="line-height: 27px;"></span>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="input-group order-button">
                                            <span class="input-group-btn">
                                                <button type="button" class="btn btn-number" data-id="<% item.id %>" onclick="fnFoodMinus(this,'{{$restaurant->id}}')" data-type="minus"><i class="fas fa-minus"></i></button>
                                            </span>
                                            <input type="text" class="input-number" data-id="<%item.id%>" readonly value="<% item.quality %>">
                                            <span class="input-group-btn">
                                                <button type="button" class="btn btn-number" data-id="<%item.id%>"  onclick="fnFoodPlus(this,'{{$restaurant->id}}')" data-type="plus"><i class="fas fa-plus"></i></button>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col"> <% item.price | number:0 %> <sup>đ</sup> </div>
                                </div>
                            </div>

                        </div>
                        <div class="row box-order-plus">
                            <div class="col-4">{{trans('frontend.sub_total')}}</div>
                            <div class="col-8"><% price | number:0 %> <sup>đ</sup></div>
                        </div>
                        <div class="row box-order-vc">
                            <div class="col-8">{{trans('frontend.delivery_fee')}}</div>
                            <div class="col-4"> <% trans_fee | number:0 %> <sup>đ</sup></div>
                        </div>
                        <div class="row box-order-sum">
                            <div class="col-4">{{trans('frontend.total')}}</div>
                            <div class="col-8"> <% sum  | number:0%> <sup>đ</sup></div>
                        </div>
                        <div class="row box-order-button">
                            <button type="button" name="button" data-price-min="{{$restaurant->price_min}}" data-price="<% sum %>" onclick="fnCheckPrice('{{ $restaurant->id }}',this)" class="btn btn-warning waves-effect ">{{trans('frontend.order_now')}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->


    <div class="modal " id="modalFood"  tabindex="-1" role="dialog"></div>
    <div class="modal " id="modalOrder"  tabindex="-1" role="dialog"></div>
@endsection

@push('scripts')
    <script src="/frontend/js/angular.min.js"></script>
    <script src="/frontend/js/angular-sanitize.min.js"></script>
    <script src="/frontend/js/sweetalert.min.js"></script>
    <script src="/frontend/js/order.js"></script>
    <script>
        $('#btn-love').click(function () {
            var action = $(this).attr('data-action');
            $.ajax({
                url: '{{ route('favorite') }}',
                type: 'post',
                dataType: 'json',
                data: {
                    action: action,
                    id: '{{ $restaurant->id }}',
                    _token: '{{ csrf_token() }}'
                },
                success: function (data) {
                    if(data.status === 'success')
                    {
                        if(data.type === 1){
                            $('#btn-love').attr('data-action', 'remove-favorite');
                            $('.favorite-icon').removeClass('far');
                            $('.favorite-icon').addClass('fas');
                        }
                        else{
                            $('#btn-love').attr('data-action', 'add-favorite');
                            $('.favorite-icon').removeClass('fas');
                            $('.favorite-icon').addClass('far');
                        }
                    }
                },
                error: function(e) {
                    alert('Có lỗi xảy ra, thử lại sau!');
                }
            });
        })
		
		setTimeout(function () {
            DetailOrder('{{$restaurant->id}}');
        },100);

        function fnCheckPrice(res_id,el) {
            var price =parseInt($(el).attr('data-price'));
            var price_min = parseInt($(el).attr('data-price-min'));
            if(price < price_min ){
                alert('Đơn hàng phải lớn hơn hoặc bằng đơn hàng tối thiểu');
            }else{
                fnOrderNow(res_id);
            }
        }
        
        function OrderSuccess() {
            swal("Thank you!", "{{trans('frontend.sucess_order_text')}}",{
                icon: "success",
                button: false,
                timer: 2000
            });
        }
    </script>
@endpush

