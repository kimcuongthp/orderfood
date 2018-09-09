@extends('frontend.layouts.master')
@section('content')
    @include('frontend.partials.slide')
    <!--Begin collapse danh sach nha hang-->
    <div class="row" id="nhahangv2">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="list-group" id="list-tab" role="tablist">
                        @php
                            $active = (request('category')) ? '' : ' active';
                        @endphp
                        <a href="{{ url('/') }}" class="list-group-item list-group-item-action action{{ $active }}" id="list-home-list" data-toggle="list">{{ trans('frontend.all') }}
                            <span class="badge badge-pill float-right" {!! (!$active) ? 'style="color: #5a5a5a !important;"' : '' !!}>{{ $count_restaurants }}</span>
                        </a>
                        @if(count($categories))
                            @foreach($categories as $category)
                                @php
                                    $active = (request('category') == $category->id) ? ' active' : '';
                                @endphp
                                <a href="{{ url('/').'?category='.$category->id }}" class="list-group-item list-group-item-action action{{ $active }}" id="list-profile-list" data-toggle="list">{{ $category->name }}
                                    <span class="badge badge-pill float-right" {!! (!$active) ? 'style="color: #5a5a5a !important;"' : '' !!}>{{ $category->restaurants->count() }}</span>
                                </a>
                            @endforeach
                        @endif
                        <a href="{{ route('restaurant.all') }}" class="list-group-item list-group-item-action action" id="list-settings-list" data-toggle="list" >Nhiều hơn...</a>
                    </div>
                </div>
                <div class="col-md-9" id="listCardv2">
                    <div class="row">
                        @if(count($restaurants))
                            @foreach($restaurants as $restaurant)
                                <div class="col-6 col-sm-4 col-lg-3 listCardv2-item">
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
        </div>
    </div>
    <!--End collapse danh sach nha hang-->
    <!-- More than -->
    <div class="row" id="totalOrder">
        <div class="container">
            <div class="row text-center">
                <h2 class="h2-title">MORE THAN <span>20,000</span> DISHES TO ORDER!</h2>
                <h4 class="h4-subtitle">Welcome to The Biggest Network of Food Ordering & Delivery</h4>
            </div>
            <div class="row listcard">
                <?php for ($i =1 ;$i<=4;$i++) { ?>
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card" data-aos="fade-up" >
                        <div class="view third-effect">
                            <img class="card-img-top" src="/frontend/images/foody-1.jpg" />
                            <div class="mask">
                                <a href="#" class="first" ></a>
                                <a href="#" class="last" ></a>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-title">Royaltea - Trà Sữa Hồng Kông - Khánh Hội</p>
                            <p class="card-text">178 Khánh Hội, P. 6, Quận 4, TP. HCM</p>
                            <p class="card-tag"><i class="fas fa-tags"></i> <span>Giam 55% tong so mon</span></p>
                        </div>
                    </div>
                </div>
                <?php } ?>
            </div>

        </div>
    </div>
    <!-- End more than -->
    <!-- HOW TO ORDER? -->
    <div class="row" id="howtoorder">
        <div class="container">
            <div class="row text-center">
                <h2 class="h2-title">HOW TO ORDER</h2>
                <h4 class="h4-subtitle">Follow the Steps</h4>
            </div>
            <div class="htorder">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="box-htord">
                            <div class="box-htord-icon">
                                <i class="iconf-icon1"></i>
                            </div>
                            <div class="box-htord-step">
                                <span>1</span>
                            </div>
                            <div class="box-htord-name">
                                Choose your location
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="box-htord">
                            <div class="box-htord-icon">
                                <i class="iconf-icon2"></i>
                            </div>
                            <div class="box-htord-step">
                                <span>2</span>
                            </div>
                            <div class="box-htord-name">
                                Choose restaurant
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="box-htord">
                            <div class="box-htord-icon">
                                <i class="iconf-icon3"></i>
                            </div>
                            <div class="box-htord-step">
                                <span>3</span>
                            </div>
                            <div class="box-htord-name">
                                Make your order
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="box-htord">
                            <div class="box-htord-icon">
                                <i class="iconf-icon4"></i>
                            </div>
                            <div class="box-htord-step">
                                <span>4</span>
                            </div>
                            <div class="box-htord-name">
                                Food is on the way
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End HOW TO ORDER? -->
    <!-- Download App -->
    <div class="row" id="downloadapp">
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <h2>Get Your Favorite Food Fast with the App</h2>
                    <div class="row">
                        <a> <i class="fab fa-apple"></i> DOWNLOAD ON THE APPSTORE</a>
                        <a><i class="iconf-googleplay"></i>  ANDROID APP ON GOOGLE PLAY</a>
                    </div>
                </div>
                <div class="col-sm-4">
                    <a href="#"><img src="/frontend/images/phone.png" alt="" width="276" height="390"></a>
                </div>
            </div>
        </div>
    </div>

    <!-- End download App -->

    <!-- What's Popular -->
    <div class="row" id="whatpopular">
        <div class="container">
            <div class="row text-center">
                <h2 class="h2-title">WHAT'S POPULAR</h2>
                <h4 class="h4-subtitle">Clients’ Most Popular Choise</h4>
            </div>
            <div class="row listcard">
                <?php for ($i =1 ;$i<=4;$i++) { ?>
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card" data-aos="fade-up" >
                        <div class="view third-effect">
                            <img class="card-img-top" src="/frontend/images/foody-1.jpg" />
                            <div class="mask">
                                <a href="#" class="first" ></a>
                                <a href="#" class="last" ></a>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-tag">
                                <a href="#">PASTA</a> ,
                                <a href="#">VEGETARIAN</a>
                            </p>
                            <p class="card-title">Linguine with Two-Cheese Sauce</p>
                            <p class="card-star rating star-3"></p>
                            <p class="card-text">With mortadella, prosciutto, capicollo, salami, parmigiano, </p>
                        </div>
                    </div>
                </div>
                <?php } ?>
            </div>

        </div>
    </div>
    <!-- End what's popular -->

    <!-- Time load -->
    <div class="row" id="timeload">
        <div class="container">
            <div class="card">
                <div class="card-img row">

                    <div class="col-3">
                        <div class="box-time">
                            <div class="box-time-circle">465</div>
                            <div class="box-time-number">Day</div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="box-time">
                            <div class="box-time-circle">12</div>
                            <div class="box-time-number">Hours</div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="box-time">
                            <div class="box-time-circle">46</div>
                            <div class="box-time-number">Minutes</div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="box-time">
                            <div class="box-time-circle">15</div>
                            <div class="box-time-number">Seconds</div>
                        </div>
                    </div>
                </div>
                <div class="card-text">
                    <p>Restaurant “Fusion”</p>
                    <p>Vegetarian Pasta <s>$22.00</s> <span>$19.00</span> </p>
                    <button type="button"class="btn btn-warning">Detail</button>
                </div>
            </div>

        </div>
    </div>
    <!-- Time load -->

    <!-- NEW DISHES -->
    <div class="row" id="newdishes">
        <div class="container">
            <div class="row text-center">
                <h2 class="h2-title"> FOOD STORE</h2>
                <h4 class="h4-subtitle">Clients’ Most Popular Choise</h4>
            </div>
            <div class="row listcard">
                <?php for ($i =1 ;$i<=4;$i++) { ?>
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card" data-aos="fade-up" >
                        <div class="view third-effect">
                            <img class="card-img-top" src="/frontend/images/foody-1.jpg" />
                            <div class="mask">
                                <a href="#" class="first" ></a>
                                <a href="#" class="last" ></a>
                            </div>
                        </div>
                        <div class="card-body">
                            <p class="card-title">Royaltea - Trà Sữa Hồng Kông - Khánh Hội</p>
                            <p class="card-text">178 Khánh Hội, P. 6, Quận 4, TP. HCM</p>
                            <p class="card-tag"><i class="fas fa-tags"></i> <span>Giam 55% tong so mon</span></p>
                        </div>
                    </div>
                </div>
                <?php } ?>
                <div class="row text-center viewmore" >
                    <a href="#">View More food store</a>
                </div>
            </div>

        </div>
    </div>
    <!--END NEW DISHES -->

    <!-- WHY PEOPLE CHOOSE US -->
    <div class="row" id="whypp">
        <div class="container">
            <div class="row text-center">
                <h2 class="h2-title">WHY PEOPLE CHOOSE US</h2>
                <h4 class="h4-subtitle">Clients’ Most Popular Choise</h4>
            </div>
            <div class="row" id="whypp-body">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="row whypp-item-left" >
                        <span >1</span>
                        <h4><a href="#">30,000 Restaurants Menus</a></h4>
                        <p>We’re working with many restaurants in your city to put food all in one place</p>
                    </div>
                    <div class="row whypp-item-left" >
                        <span >2</span>
                        <h4><a href="#">Easy Ordering by Phone</a></h4>
                        <p>This allows you to order quickly and easily. Accessible at any time</p>
                    </div>
                    <div class="row whypp-item-left" >
                        <span >3</span>
                        <h4><a href="#">Free Mobile Application</a></h4>
                        <p>Mobile App allows you to choose restaurant, view price and check order.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img src="/frontend/images/phone_img.png" alt="">
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="row whypp-item-right" >
                        <span >4</span>
                        <h4><a href="#">Easy Online Ordering</a></h4>
                        <p>We’re working with many restaurants in your city to put food all in one place</p>
                    </div>
                    <div class="row whypp-item-right" >
                        <span >5</span>
                        <h4><a href="#">100% positive feedbacks</a></h4>
                        <p>This allows you to order quickly and easily. Accessible at any time</p>
                    </div>
                    <div class="row whypp-item-right" >
                        <span >6</span>
                        <h4><a href="#">Fast Guaranteed Delivery</a></h4>
                        <p>Mobile App allows you to choose restaurant, view price and check order.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!--END WHY PEOPLE CHOOSE US -->

    <!-- Type -->
    <div class="row" id="typelist">
        <div class="container">
            <div class="row text-center">
                <h2 class="h2-title">Food Group</h2>
                <h4 class="h4-subtitle">Classification of foods</h4>
            </div>
            <div class="row" id="typelist-body">
                @if(count($tags))
                    @foreach($tags as $tag)
                        <div class="home-categories"><a href="{{ route('show.tag', $tag->tag->slug) }}">{{ $tag->tag->name or "" }}</a></div>
                    @endforeach
                @endif
            </div>
        </div>
    </div>
    <!-- Type -->
    <div class="row" id="subscribe">
        <div class="container">
            <div class="col-12">
                Want Coupons or Deep Thoughts About Food?<br> Get Our Weekly Email:
            </div>
            <div class="row" id="subscribe-body">
                <div class="col">

                </div>
                <div class="col-12 col-lg-8">
                    <input type="Email" placeholder="Enter Your Email">
                    <button type="button" class="btn btn-default" name="button">Submit</button>
                </div>
                <div class="col">

                </div>
            </div>
        </div>
    </div>
    <!--  -->
@endsection
@push('js-stack')
    <script>
        $('.action').click(function(){
            $('.action').removeClass('active');
            window.location.href = $(this).attr('href');
        });

        $('#select_city').change(function(){
            var id = $(this).val();
            $.ajax({
                type: 'GET',
                url: '/backend/address/cities/'+id+'/districts?locale={{ LaravelLocalization::getCurrentLocale() }}'
            }).then(function (data) {
                $('#select_district').html(data);
            });
        });
    </script>
@endpush