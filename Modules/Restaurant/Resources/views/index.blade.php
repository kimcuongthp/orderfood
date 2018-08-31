@extends('backend.layouts.master')
@section('content')
    <div class="admin-section-title">
        <h3><i class="entypo-list"></i> Danh sách nhà hàng</h3>
    </div>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-bordered" id="tbCategory">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên loại nhà hàng</th>
                    <th>Địa chỉ</th>
                    <th>Người quản lí</th>
                    <th>Ngày đăng kí</th>
                    <th>Tác vụ</th>
                </tr>
                </thead>
                @if(count($restaurants))
                @foreach($restaurants as $restaurant)
                    <tr>
                        <td class="text-center">{{$loop->iteration}}</td>
                        <td>{{ $restaurant->name }}</td>
                        <td>{{ $restaurant->address }}</td>
                        <td>{{ $restaurant->user->name or "" }}</td>
                        <td>{{ $restaurant->created_at->format('d/m/Y') }}</td>
                        <td>
                            <div class="actions">
                                <a href="{{ route('restaurant.edit', $restaurant->id) }}" class="edit" target="_blank">Sửa</a>
                                <a href="" class="delete">Xóa</a>
                            </div>
                        </td>
                    </tr>
                @endforeach
                @endif
            </table>
            <div class="text-center">
                {{ $restaurants->links('vendor/pagination/simple-default') }}
            </div>
        </div>
    </div>
@stop