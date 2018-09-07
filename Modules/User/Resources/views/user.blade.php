@extends('backend.layouts.master')
@section('content')
    <h3 style="margin-bottom: 20px;">Quản lí người dùng</h3>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên tài khoản</th>
                <th>Tên đầy đủ</th>
                <th>Điện thoại</th>
                <th>Email</th>
                <th>Loại người dùng</th>
                <th>Thời gian đăng kí</th>
                <th>Tác vụ</th>
            </tr>
        </thead>
        <tbody>
        @if(count($users))
            @foreach($users as $user)
                <tr>
                    <td>{{ $loop->iteration }}</td>
                    <td>{{ $user->name }}</td>
                    <td>{{ $user->info->full_name or ""}}</td>
                    <td>{{ $user->info->phone or ""}}</td>
                    <td>{{ $user->email }}</td>
                    <?php
                        if($user->getRoleNames()->first() === 'Staff'){
                            $role = 'Quản trị viên';
                        }
                        elseif($user->getRoleNames()->first() === 'Agency'){
                            $role = 'Quản trị nhà hàng';
                        }
                        else {
                            $role = 'Khách hàng';
                        }
                    ?>
                    <td>{{ $role }}</td>
                    <td>{{ $user->created_at }}</td>
                    <td>
                        <a href="javascript:;" onclick="editUser()" class="btn btn-default">
                            <i class="fa fa-edit"></i>
                        </a>
                        <a href="javascript:;" onclick="deleteUser()" class="btn btn-danger">
                            <i class="fa fa-trash"></i>
                        </a>
                    </td>
                </tr>
            @endforeach
        @endif
        </tbody>
    </table>
@endsection
@push('js-stack')
<script src="/admin/plugins/sweetalert2/sweetalert2.all.js"></script>
<script>
    function deleteUser()
    {
        swal({
            type: 'error',
            title: 'Oops...',
            text: 'Chức năng chưa được cho phép!',
        })
    }
    function editUser()
    {
        swal({
            type: 'info',
            title: 'Oops...',
            text: 'Chức năng đang xây dựng!',
        })
    }
</script>
@endpush