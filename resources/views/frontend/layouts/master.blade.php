<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
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
                <a href="{{ url('/').'/'.LaravelLocalization::getCurrentLocale() }}">
                    <img id="imglogo1" src="/frontend/images/logo2.png" alt="logo"/>
                </a>
                <div class="menux-center">
                    <img id="imgtext" src="/frontend/images/slogan02.png"/>
                </div>
                <div class="menu-right">
                    <div class="dropdown">
                        <button type="button" class="btn dropdown-toggle waves-effect waves-light" data-toggle="dropdown">
                            <div class="flag"> <i class="flag-us"></i> <span>{{ LaravelLocalization::getCurrentLocaleName() }}</span>  </div>
                        </button>
                        <div class="dropdown-menu">
                            @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
                                <a class="dropdown-item" href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
                                    <div class="flag"><i class="flag-us"></i> <span>{{ $properties['native'] }}</span></div>
                                </a>
                            @endforeach
                        </div>
                    </div>

                    <a href="#" class="login" id="loginOrdeFood">
                        <i class="icon-login"></i> Login
                    </a>
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

<div class="modal fade" id="modalLRFormDemo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog cascading-modal" role="document">
        <div class="modal-content">
            <div class="modal-c-tabs">
                <ul class="nav nav-tabs tabs-2 light-blue darken-3" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#panel17" role="tab">
                            <i class="fa fa-user mr-1"></i> Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#panel18" role="tab">
                            <i class="fa fa-user-plus mr-1"></i> Register</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <!--Panel 17-->
                    <div class="tab-pane fade in show active" id="panel17" role="tabpanel">

                        <!--Body-->
                        <div class="modal-body mb-1">
                            <div class="md-form form-sm text-center" style="margin-top:0px;">
                                <button type="button" class="btn btn-fb"><i class="fab fa-facebook-f pr-1"></i> Sign in with Facebook</button>
                            </div>
                            <div class="row text-center" style="display:block">
                                <div style="width: 100%; height: 13px; border-bottom: 1px solid #d3d3d3; text-align: center">
                  <span style="font-size: 14px;font-weight: 600; padding: 0 10px;background:#fff">
                    Or
                  </span>
                                </div>
                            </div>
                            <div class="md-form form-sm">
                                <i class="fa fa-envelope prefix"></i>
                                <input type="text" id="form2" class="form-control form-control-sm">
                                <label for="form2">Your email/phone</label>
                            </div>

                            <div class="md-form form-sm">
                                <i class="fa fa-lock prefix"></i>
                                <input type="password" id="form3" class="form-control form-control-sm">
                                <label for="form3">Your password</label>
                            </div>
                            <div class="text-center mt-4">
                                <button class="btn btn-info">Log in
                                    <i class="fa fa-sign-in ml-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="panel18" role="tabpanel">
                        <div class="modal-body">
                            <div class="md-form form-sm">
                                <i class="fa fa-envelope prefix"></i>
                                <input type="text" id="form14" class="form-control form-control-sm">
                                <label for="form14">Your email</label>
                            </div>

                            <div class="md-form form-sm">
                                <i class="fa fa-lock prefix"></i>
                                <input type="password" id="form5" class="form-control form-control-sm">
                                <label for="form5">Your password</label>
                            </div>

                            <div class="md-form form-sm">
                                <i class="fa fa-lock prefix"></i>
                                <input type="password" id="form6" class="form-control form-control-sm">
                                <label for="form6">Repeat password</label>
                            </div>

                            <div class="text-center form-sm mt-4">
                                <button class="btn btn-info">Sign up
                                    <i class="fa fa-sign-in ml-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
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
</body>

</html>

