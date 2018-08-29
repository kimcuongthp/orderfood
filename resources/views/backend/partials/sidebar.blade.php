<div class="sidebar-menu">

    <div class="sidebar-menu-inner">

        <header class="logo-env">

            <!-- logo -->
            <div class="logo">
                <a href="index.html">
                    <img src="/admin/assets/images/logo@2x.png" width="120" alt="" />
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
            <li class="has-sub">
                <a href="index.html">
                    <i class="entypo-gauge"></i>
                    <span class="title">Dashboard</span>
                </a>
                <ul>
                    <li>
                        <a href="index.html">
                            <span class="title">Dashboard 1</span>
                        </a>
                    </li>
                    <li>
                        <a href="dashboard-2.html">
                            <span class="title">Dashboard 2</span>
                        </a>
                    </li>
                    <li>
                        <a href="dashboard-3.html">
                            <span class="title">Dashboard 3</span>
                        </a>
                    </li>
                    <li class="has-sub">
                        <a href="skin-black.html">
                            <span class="title">Skins</span>
                        </a>
                        <ul>
                            <li>
                                <a href="skin-black.html">
                                    <span class="title">Black Skin</span>
                                </a>
                            </li>
                            <li>
                                <a href="skin-white.html">
                                    <span class="title">White Skin</span>
                                </a>
                            </li>
                            <li>
                                <a href="skin-purple.html">
                                    <span class="title">Purple Skin</span>
                                </a>
                            </li>
                            <li>
                                <a href="skin-cafe.html">
                                    <span class="title">Cafe Skin</span>
                                </a>
                            </li>
                            <li>
                                <a href="skin-red.html">
                                    <span class="title">Red Skin</span>
                                </a>
                            </li>
                            <li>
                                <a href="skin-green.html">
                                    <span class="title">Green Skin</span>
                                </a>
                            </li>
                            <li>
                                <a href="skin-yellow.html">
                                    <span class="title">Yellow Skin</span>
                                </a>
                            </li>
                            <li>
                                <a href="skin-blue.html">
                                    <span class="title">Blue Skin</span>
                                </a>
                            </li>
                            <li>
                                <a href="skin-facebook.html">
                                    <span class="title">Facebook Skin</span>
                                    <span class="badge badge-secondary badge-roundless">New</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="highlights.html">
                            <span class="title">What's New</span>
                            <span class="badge badge-success badge-roundless">v2.0</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="index.html" target="_blank">
                    <i class="entypo-monitor"></i>
                    <span class="title">Frontend</span>
                </a>
            </li>
            <li class="has-sub">
                <a href="#">
                    <i class="entypo-flow-tree"></i>
                    <span class="title">Quản lý danh mục</span>
                </a>
                <ul>
                    <li>
                        <a href="{{ route('address.index') }}">
                            <i class="entypo-flow-line"></i>
                            <span class="title">Tỉnh thành - Quận huyện</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

    </div>

</div>