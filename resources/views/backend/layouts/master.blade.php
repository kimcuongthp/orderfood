<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Neon Admin Panel" />
    <meta name="author" content="" />

    <link rel="icon" href="/admin/assets/images/favicon.ico">

    <title>Neon | Blank Page</title>

    <link rel="stylesheet" href="/admin/assets/js/jquery-ui/css/no-theme/jquery-ui-1.10.3.custom.min.css">
    <link rel="stylesheet" href="/admin/assets/css/font-icons/entypo/css/entypo.css">
    <link rel="stylesheet" href="/admin/assets/css/font-icons/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic">
    <link rel="stylesheet" href="/admin/assets/css/bootstrap.css">
    <link rel="stylesheet" href="/admin/assets/css/neon-core.css">
    <link rel="stylesheet" href="/admin/assets/css/neon-theme.css">
    <link rel="stylesheet" href="/admin/assets/css/neon-forms.css">
    <link rel="stylesheet" href="/admin/plugins/toast/jquery.toast.min.css">
    @stack('css-stack')
    <link rel="stylesheet" href="/admin/assets/css/custom.css">

    <script src="/admin/assets/js/jquery-1.11.3.min.js"></script>

    <!--[if lt IE 9]><script src="/adminassets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->


</head>
<body class="page-body" data-url="http://neon.dev">

<div class="page-container"><!-- add class "sidebar-collapsed" to close sidebar by default, "chat-visible" to make chat appear always -->

    @include('backend.partials.sidebar')

    <div class="main-content">
        <div class="row">
            <!-- Profile Info and Notifications -->
            <div class="col-md-6 col-sm-8 clearfix">
                <ul class="user-info pull-left pull-none-xsm">
                    <!-- Profile Info -->
                    <li class="profile-info dropdown"><!-- add class "pull-right" if you want to place this from right -->
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="/admin/assets/images/girl.png" alt="" class="img-circle" width="44">
                            Xin chào, {{ Auth::user()->name }} !
                        </a>
                    </li>
                </ul>
            </div>
            <!-- Raw Links -->
            <div class="col-md-6 col-sm-4 clearfix hidden-xs">
                <ul class="list-inline links-list pull-right">
                    <li>
                        <a href="{{ route('do.logout') }}"
                           onclick="event.preventDefault();
                                           document.getElementById('logout-form').submit();">
                            {{ __('Đăng xuất') }} <i class="entypo-logout right"></i>
                        </a>
                        <form id="logout-form" action="{{ route('do.logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </li>
                </ul>
            </div>
        </div>
        <hr>
        @yield('content')
        <!-- Footer -->
        <footer class="main">

            &copy; 2018 <strong>Kim Cương</strong> Admin Theme by <a href="http://sentora.vn" target="_blank">Sentora</a>

        </footer>
    </div>

</div>




<!-- Bottom scripts (common) -->
<script src="/admin/assets/js/gsap/TweenMax.min.js"></script>
<script src="/admin/assets/js/jquery-ui/js/jquery-ui-1.10.3.minimal.min.js"></script>
<script src="/admin/assets/js/bootstrap.js"></script>
<script src="/admin/assets/js/joinable.js"></script>
<script src="/admin/assets/js/resizeable.js"></script>
<script src="/admin/assets/js/neon-api.js"></script>
<script src="/admin/plugins/toast/jquery.toast.min.js"></script>


<!-- JavaScripts initializations and stuff -->
<script src="/admin/assets/js/neon-custom.js"></script>


<!-- Demo Settings -->
<script src="/admin/assets/js/neon-demo.js"></script>

<script>

    <?php if(Session::get('note') != '' && Session::get('note_type') != ''): ?>

    if('<?= Session::get("note_type") ?>' == 'success'){
        $.toast({
            heading: 'Xong!',
            text: '<?= Session::get("note") ?>',
            icon: 'success',
            position: 'top-right',
            loader: false,
            showHideTransition: 'slide',
            hideAfter: 3000
        })
    } else if('<?= Session::get("note_type") ?>' == 'error'){
        $.toast({
            heading: 'Rất tiếc!',
            text: '<?= Session::get("note") ?>',
            icon: 'error',
            position: 'top-right',
            loader: false,
            showHideTransition: 'slide',
            hideAfter: 3000
        });
    }
    <?php Session::forget('note');
    Session::forget('note_type');
    ?>
    <?php endif; ?>

    @if ($errors->any())
        $.toast({
            heading: 'Lỗi',
            text: 'Có lỗi xảy ra vui lòng kiểm tra lại thông tin',
            position: 'top-right',
            icon: 'error',
            loader: false,
            showHideTransition: 'slide',
            hideAfter: 3000
        });
    @endif
</script>
<!-- Push JavaScripts -->
@stack('js-stack')

</body>
</html>