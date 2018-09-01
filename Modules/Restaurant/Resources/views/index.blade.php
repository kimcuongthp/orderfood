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
                    <th>Ảnh đại diện</th>
                    <th>Tên loại nhà hàng</th>
                    <th>Địa chỉ</th>
                    <th>Người quản lí</th>
                    <th>Ngày đăng kí</th>
                    <th>Tác vụ</th>
                </tr>
                </thead>
                @if(count($restaurants))
                @foreach($restaurants as $restaurant)
                    <tr class="text-center">
                        <td>{{$loop->iteration}}</td>
                        <td>
                            @if($restaurant->image)
                                <img src="{{ $restaurant->image }}" style="max-width: 50px;" alt=""/>
                            @else
                                <img src="http://placehold.it/300x200" alt=""/>
                            @endif
                        </td>
                        <td style="vertical-align: middle;">{{ $restaurant->name }}</td>
                        <td style="vertical-align: middle;">{{ $restaurant->address }}</td>
                        <td style="vertical-align: middle;">{{ $restaurant->user->name or "" }}</td>
                        <td style="vertical-align: middle;">{{ $restaurant->created_at->format('d/m/Y') }}</td>
                        <td style="vertical-align: middle;">
                            <a href="{{ route('restaurant.edit', $restaurant->id) }}" class="btn btn-default">
                                <i class="fa fa-edit"></i> Sửa
                            </a>
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