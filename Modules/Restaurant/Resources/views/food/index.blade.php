@extends('backend.layouts.master')
@section('content')
    <div class="admin-section-title">
        <h3><i class="entypo-archive"></i> Danh sách món ăn - Nhà hàng : restaurant_id {{$restaurant_id}} </h3>
        <a class="btn btn-success" href="/backend/restaurant/foods/add"><i class="entypo-plus-circled"></i>  Thêm mới</a>
    </div>
    <div class="row" style="margin: 0px;">
        {!! Form::open(['route' => ['category.update'], 'method' => 'post', 'id' => 'update-category-form']) !!}

        {!! Form::close() !!}
    </div>

@endsection

@push('js-stack')
    <script src="/admin/assets/js/jquery.nestable.js"></script>
    <script src="/admin/plugins/sweetalert2/sweetalert2.all.js"></script>
    <script>

    </script>
@endpush