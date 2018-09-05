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
                    <div class="video-container"><iframe width="853" height="480" src="{{$restaurant->video}}" frameborder="0" allowfullscreen></iframe></div>
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
                                Nguoiwf giao
                            </div>
                            <div class="row" style="color: red;font-weight: 700">
                                Orderfood.vn
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                Tối thiểu
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

    <div class="row" id="nd-detail">
        <div class="container" style="position:relative">
            <div class="row" >
                <div class="nh-tab">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="thucdon-tab" data-toggle="tab" href="#thucdon" role="tab" aria-controls="thucdon" aria-selected="true">THỰC ĐƠN</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="danhgia-tab" data-toggle="tab" href="#danhgia" role="tab" aria-controls="danhgia" aria-selected="false">ĐÁNH GIÁ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="gioithieu-tab" data-toggle="tab" href="#gioithieu" role="tab" aria-controls="gioithieu" aria-selected="false">GIỚI THIỆU</a>
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
                                            <?php $foods = \Modules\Restaurant\Entities\Food::where(['typeoffood_id'=>$typeoffood->id,'status'=>1])->get(); ?>

                                            @foreach($foods as $food)
                                                <div class="box-item-detail">
                                                    <div class="box-img">
                                                        <img class="img-thumbnail" src="{{$food->image}}" alt="">
                                                    </div>
                                                    <div class="box-info" style="min-height: 75px;">
                                                        <h3 class="box-info-title">{{$food->name}}</h3>
                                                        <p class="box-info-attr">{{$food->description1 or ""}}</p>
                                                        <p class="box-info-text">{{$food->description2 or ''}}</p>
                                                        <p class="box-info-count">Da duoc dat 120 lan</p>
                                                    </div>
                                                    <div class="box-price">
                                                        <span>{{number_format($food->price)}} <sup>đ</sup></span>
                                                        <button type="button" onclick="fnModalFood('{{$food->id}}')" class="btn btn-outline-warning btn-sm waves-effect px-3"><i class="fas fa-plus" aria-hidden="true"></i></button>
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
                        <div class="tab-pane fade text-center" id="gioithieu" role="tabpanel" aria-labelledby="gioithieu-tab">
                            {!! $restaurant->description !!}
                        </div>
                    </div>
                </div>


                <!-- ---------------------------------------------------------------- -->
                <div class="nh-order">
                    <div class="box-order">
                        <div class="box-order-title">
                            <button type="button" name="button" class="btn">Reset</button>
                        </div>
                        <div class="box-order-list">
                            <?php for($i =1 ;$i<=10;$i++) {?>
                            <div class="box-order-item">
                                <div class="row">
                                    <span><b>Mango milk tea</b> - Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="input-group order-button">
                            <span class="input-group-btn">
                          <button type="button" class="btn btn-number" data-type="minus" data-field="quant[1]">
                              <i class="fas fa-minus"></i>
                            </button>
                            </span>
                                            <input type="text" name="quant[1]" class="input-number" value="1">
                                            <span class="input-group-btn">
                              <button type="button" class="btn btn-number" data-type="plus" data-field="quant[1]">
                              <i class="fas fa-plus"></i>
                            </button>
                            </span>
                                        </div>
                                    </div>
                                    <div class="col">39,0000 <sup>đ</sup> </div>
                                </div>
                            </div>
                            <?php } ?>
                        </div>
                        <div class="row box-order-plus">
                            <div class="col-4">Cộng</div>
                            <div class="col-8">1.0000.0000 <sup>đ</sup></div>
                        </div>
                        <div class="row box-order-vc">
                            <div class="col-8">Phí vận chuyển</div>
                            <div class="col-4">6.0000 <sup>đ</sup></div>
                        </div>
                        <div class="row box-order-sum">
                            <div class="col-4">Tổng</div>
                            <div class="col-8">1.0000.0000 <sup>đ</sup></div>
                        </div>
                        <div class="row box-order-button">
                            <button type="button" name="button" class="btn btn-warning waves-effect ">Thanh toan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modalFood" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row">
                        <div class="box-item-detail" style="width:100%">
                            <div class="box-img">
                                <img class="img-thumbnail" src="public/images/monan.jpg" alt="">
                            </div>
                            <div class="box-info">
                                <h3 class="box-info-title">Tra den sua tuoi suong sao</h3>
                                <p class="box-info-attr">Size M</p>
                                <p class="box-info-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <p class="box-info-count">Da duoc dat 120 lan</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="modal-data">
                            <h3>Mức đường <span>(Bắt buộc chọn nhieu loại)</span> </h3>
                            <div class="row h3-item">
                                <div class="col-sm-6">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="foodcb1">
                                        <label class="custom-control-label" for="foodcb1">Banh Oreo</label>
                                        <span> + 6,000d</span>
                                        <div class="button-plus-minus" style="float:right">
                                            <button type="button" name="button"><i class="fas fa-minus"></i></button>
                                            <input type="text" name="" value="" >
                                            <button type="button" name="button"><i class="fas fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="foodcb2">
                                        <label class="custom-control-label" for="foodcb2">Them kem cheese</label>
                                        <span> + 6,000d</span>
                                        <div class="button-plus-minus" style="float:right">
                                            <button type="button" name="button"><i class="fas fa-minus"></i></button>
                                            <input type="text" name="" value="" >
                                            <button type="button" name="button"><i class="fas fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="foodcb3">
                                        <label class="custom-control-label" for="foodcb3">Tran chau ngoc trai</label>
                                        <span> + 6,000d</span>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="foodcb4">
                                        <label class="custom-control-label" for="foodcb4">Tran chau den</label>
                                        <span> + 6,000d</span>
                                    </div>
                                </div>
                            </div>

                            <h3>Mức đường <span>(Bắt buộc chọn 1 loại)</span> </h3>
                            <div class="row h3-item">
                                <div class="col-sm-6">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="foodrd1" name="radio">
                                        <label class="custom-control-label" for="foodrd1">100% da</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="foodrd2" name="radio">
                                        <label class="custom-control-label" for="foodrd2">75% da</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="foodrd3" name="radio">
                                        <label class="custom-control-label" for="foodrd3">50% da</label>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" class="custom-control-input" id="foodrd4" name="radio">
                                        <label class="custom-control-label" for="foodrd4">25% da</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="button-plus-minus">
                            <button type="button" name="button"><i class="fas fa-minus"></i></button>
                            <input type="text" name="" value="" >
                            <button type="button" name="button"><i class="fas fa-plus"></i></button>
                        </div>

                        <button url="#" class="btn btn-orange btn-sm"> <i class="fas fa-plus"></i> 340.000 <sup>d</sup> </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script >
        $('#form-rate').submit(function () {
            var rate =$('[name=rates]').val();
            var message =$('[name=message]').val();
            if(rate =='' || rate == undefined || message ==''){
                alert('Vui lòng đánh giá và để lại nội dung tin nhắn.');
                return false;
            }
        })
    </script>
@endpush

