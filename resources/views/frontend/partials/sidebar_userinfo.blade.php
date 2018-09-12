<div class="list-group">
    <a href="{{route('user.info')}}" class="list-group-item waves-light"> <i class="fas fa-user"></i> {{ trans('frontend.userinfo') }}</a>
    <a href="{{ route('show.favorite') }}" class="list-group-item waves-effect"><i class="fas fa-clipboard-list"></i> {{ trans('frontend.favorite_restaurants') }}</a>
    <a href="{{ route('order.history') }}" class="list-group-item waves-effect"><i class="fas fa-cart-arrow-down"></i> {{ trans('frontend.order_history') }}</a>
    <a href="{{ route('user.change_password') }}" class="list-group-item waves-effect"><i class="fas fa-unlock"></i> {{ trans('frontend.change_password') }}</a>
    @hasanyrole('Staff|Agency')
    <a href="{{ route('show.dashboard') }}" class="list-group-item waves-light"> <i class="fas fa-truck-loading"></i> {{ trans('frontend.admin_manager') }}</a>
    @endhasanyrole
    <a href="javascript:;" onclick="$('#user_logout').submit()" class="list-group-item waves-effect"><i class="fas fa-sign-out-alt"></i> {{ trans('frontend.logout') }}</a>
    {!! Form::open(['route' => 'user.logout', 'id' => 'user_logout']) !!}
    {!! Form::close() !!}
</div>