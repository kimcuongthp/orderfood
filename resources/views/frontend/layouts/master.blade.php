<!doctype html>
<html lang="{{LaravelLocalization::getCurrentLocale()}}">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="/frontend/css/fontello.css">
    <link rel="stylesheet" href="/frontend/css/plugin.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <link rel="stylesheet" href="/frontend/css/site.css" />

    <title>Hello, world!</title>
</head>

<body >
<div class="container-fluid">
    <div class="row" id="header">
        <div class="" id="mainmenu">
            <div class="container">
                @php
                    $locale = 'vi' === LaravelLocalization::getCurrentLocale() ? '' : LaravelLocalization::getCurrentLocale();
                @endphp
                <a href="{{ url('/').'/'.$locale }}">
                    <img id="imglogo1" src="/frontend/images/logo2.png" alt="logo"/>
                </a>
                <div class="menux-center">
                    <img id="imgtext" src="/frontend/images/slogan02.png"/>
                </div>
                <div class="menu-right">
                    <div class="dropdown">
                        <button type="button" class="btn dropdown-toggle waves-effect waves-light" data-toggle="dropdown">
                            <div class="flag"> <i class="flag-us"></i> <span style="text-transform: none">{{ LaravelLocalization::getCurrentLocaleName() }}</span>  </div>
                        </button>
                        <div class="dropdown-menu">
                            @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
                                <a class="dropdown-item" href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
                                    <div class="flag"><i class="flag-us"></i> <span>{{ $properties['native'] }}</span></div>
                                </a>
                            @endforeach
                        </div>
                    </div>
                    @if(Auth::check())
                        <a href="{{ route('user.info') }}" class="login">
                            <i class="icon-user"></i> {{ Auth::user()->name }}
                        </a>
                    @else
                        <a href="javascript:;" class="login" id="loginOrdeFood">
                            <i class="icon-login"></i> {{ trans('frontend.login') }}
                        </a>
                    @endif

                </div>
            </div>
        </div>
    </div>
    @yield('content')
</div>
<div class="footer">
    <div class="footer-blank"></div>
    <div class="row" style="height:94px">
        <div class="footer-info">
            <p>
                Chicago, IL <br> 123, New Lenox
            </p>
            <img src="/frontend/images/logo1.png" width="140" height="140" alt="">
            <p>
                <span>Call us 24/7</span><br>
                <span> <i class="icon-phone"></i> 094 711 80 58 </span>
            </p>
        </div>
    </div>
</div>
@include('frontend.partials.modal_login')
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js"></script>
<script src="/frontend/js/popper.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
<script src="https://owlcarousel2.github.io/OwlCarousel2/assets/owlcarousel/owl.carousel.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script type="text/javascript" src="http://vtimbuc.github.io/bootstrap-responsive-tabs/dist/js/jquery.bootstrap-responsive-tabs.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.9/js/mdb.min.js"></script>
<div id="fb-root"></div>
<script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
<script src="https://apis.google.com/js/platform.js" async defer></script>

<script src="/frontend/js/site.js"></script>


<script>
    window.onresize = function(event) {
        $('.owl-theme .item image').css('width', '100%');
    };
    AOS.init({
        once: true
    });
</script>
@stack('js-stack')
@stack('scripts')
</body>
</html>

