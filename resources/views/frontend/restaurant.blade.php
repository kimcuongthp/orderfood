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
                    <div class="row nh-rate rating star-3"></div>
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
                                <?php for($i=1;$i<=5;$i++) { ?>
                                <div class="comment-item">
                                    <div class="row">
                                        <div class="comment-item-img">
                                            <img src="public/images/logo-7.jpg" alt="" width="50" height="50">
                                        </div>
                                        <div class="comment-item-user">
                                            <p>Orderfood.VN</p>
                                            <div class="rating star-4"></div>
                                            <p> <i class="icon-clock"></i> 12:30 Aug 08 2018 </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </div>
                                </div>
                                <?php } ?>
                            </div>
                            <div class="row">
                                <p>De lai danh gia cua ban:
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
                            <div class="row">
                                <div class="form-group" style="width:100%">
                                    <textarea class="form-control rounded-0" rows="5" style="width:100%"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="float-right" style="width:100%">
                                    <button type="button" name="button" class="btn btn-warning btn-sm float-right">Submit</button>
                                </div>
                            </div>

                        </div>
                        <!-- -----------------------------End Tab danh gia----------------------------------- -->
                        <div class="tab-pane fade text-center" id="gioithieu" role="tabpanel" aria-labelledby="gioithieu-tab">
                            <h3 style="margin: 15px 0px; padding: 0px; font-weight: 700; font-size: 14px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif;">The standard Lorem Ipsum passage, used since the 1500s</h3><p style="margin-bottom: 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p><h3 style="margin: 15px 0px; padding: 0px; font-weight: 700; font-size: 14px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif;">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3><p style="margin-bottom: 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px;">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p><h3 style="margin: 15px 0px; padding: 0px; font-weight: 700; font-size: 14px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif;">1914 translation by H. Rackham</h3><p style="margin-bottom: 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px;">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p><h3 style="margin: 15px 0px; padding: 0px; font-weight: 700; font-size: 14px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif;">Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3><p style="margin-bottom: 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px;">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p><h3 style="margin: 15px 0px; padding: 0px; font-weight: 700; font-size: 14px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif;">1914 translation by H. Rackham</h3><p style="margin-bottom: 15px; padding: 0px; text-align: justify; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px;">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
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