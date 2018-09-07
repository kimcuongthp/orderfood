@extends('frontend.layouts.master')
@section('content')
    @include('frontend.partials.slide')
    <div class="row" id="nhahangv2">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" >Tat ca
                            <span class="badge badge-pill light-blue float-right">92</span>
                        </a>
                        <?php for($i=1;$i<=8;$i++){ ?>
                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" >Mon nhat & Sushi
                            <span class="badge badge-pill light-blue float-right">12</span>
                        </a>
                        <?php } ?>
                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" >More...</a>
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
                                            $status = ($restaurant->is_open === 1 || ($now > strtotime($restaurant->time_open) && $now < strtotime($restaurant->time_close))) ? ' online' : ' offline';
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
        </div>
    </div>

    <div class="row" id="downloadapp">
        <div class="container">
            <div class="row">
                <div class="col-sm-8">

                </div>
                <div class="col-sm-4">

                </div>
            </div>
        </div>
    </div>


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
    <div class="row" id="downloadapp">
        <div class="container">
            <div class="row">
                <div class="col-sm-8">

                </div>
                <div class="col-sm-4">

                </div>
            </div>
        </div>
    </div>
    <!-- Type -->
    <div class="row" id="typelist" style="margin-bottom:0px;padding-bottom:60px;">
        <div class="container">
            <div class="row text-center">
                <h2 class="h2-title">Food Group</h2>
                <h4 class="h4-subtitle">Classification of foods</h4>
            </div>
            <div class="row" id="typelist-body">
                <?php for($i =1;$i<=99;$i++){ ?>
                <div class="home-categories"><a href="#">Bento Box  <?php echo $i; ?> </a></div>
                <?php } ?>
            </div>
        </div>
    </div>
    <!-- Type -->
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