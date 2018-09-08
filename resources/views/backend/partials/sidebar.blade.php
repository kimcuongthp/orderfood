<div class="sidebar-menu">

    <div class="sidebar-menu-inner">

        <header class="logo-env">

            <!-- logo -->
            <div class="logo">
                <a href="/backend">
                    <img src="/admin/assets/images/logo-sentora-vietnam.png" height="50px" alt="" />
                </a>
            </div>

            <!-- logo collapse icon -->
            <div class="sidebar-collapse">
                <a href="#" class="sidebar-collapse-icon"><!-- add class "with-animation" if you want sidebar to have animation during expanding/collapsing transition -->
                    <i class="entypo-menu"></i>
                </a>
            </div>


            <!-- open/close menu icon (do not remove if you want to enable menu on mobile devices) -->
            <div class="sidebar-mobile-menu visible-xs">
                <a href="#" class="with-animation"><!-- add class "with-animation" to support animation -->
                    <i class="entypo-menu"></i>
                </a>
            </div>

        </header>


        <ul id="main-menu" class="main-menu">
            <!-- add class "multiple-expanded" to allow multiple submenus to open -->
            <!-- class "auto-inherit-active-class" will automatically add "active" class for parent elements who are marked already with class "active" -->
            <li>
                <a href="/backend">
                    <i class="entypo-gauge"></i>
                    <span class="title">Dashboard</span>
                </a>
            </li>
            @role('Agency')
            <li class="has-sub">
                <a href="#">
                    <i class="fa fa-coffee"></i>
                    <span class="title">Nhà hàng của tôi</span>
                </a>
                <ul>
                    <li>
                        <?php $res = \Modules\Restaurant\Entities\Restaurant::where('user_id',Auth::user()->id)->first(); ?>
                        <a href="{{ route('restaurant.edit', $res->id) }}">
                            <i class="entypo-right-open-mini"></i>
                            <span class="title">Thông tin nhà hàng</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('typeoffood.index') }}?restaurant_id={{ $res->id }}">
                            <i class="entypo-right-open-mini"></i>
                            <span class="title">Loại món ăn</span>
                        </a>
                    </li>
                </ul>
            </li>
            @endrole
            @role('Staff')
            <li>
                <a href="{{ route('slide') }}">
                    <i class="entypo-picture"></i>
                    <span class="title">Quản lí slide</span>
                </a>
            </li>
            <li class="has-sub">
                <a href="#">
                    <i class="fa fa-coffee"></i>
                    <span class="title">Nhà Hàng</span>
                </a>
                <ul>
                    <li>
                        <a href="{{ route('restaurant.create') }}">
                            <i class="entypo-right-open-mini"></i>
                            <span class="title">Thêm nhà hàng</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('restaurant.index') }}">
                            <i class="entypo-right-open-mini"></i>
                            <span class="title">Danh sách nhà hàng</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('category.index') }}">
                            <i class="entypo-right-open-mini"></i>
                            <span class="title">Danh mục nhà hàng</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="{{ route('show.users') }}">
                    <i class="fa fa-users"></i>
                    <span class="title">Người dùng</span>
                </a>
            </li>
            <li>
                <a href="{{ route('media.index') }}">
                    <i class="entypo-picture"></i>
                    <span class="title">Thư viện ảnh</span>
                </a>
            </li>
            <li>
                <a href="{{ route('address.index') }}">
                    <i class="entypo-location"></i>
                    <span class="title">Tỉnh thành / Quận huyện</span>
                </a>
            </li>
            @endrole
            <li>
                <a href="{{ route('do.logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    <i class="entypo-logout right"></i>
                    <span class="title">Đăng xuất</span>
                </a>
            </li>
        </ul>
    </div>

</div>