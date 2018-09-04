@extends('backend.layouts.master')
@section('content')
    <div class="admin-section-title">
        <h3><i class="entypo-archive"></i> Danh sách món ăn</h3>
        <a class="btn btn-success" id="add_food" href="/backend/restaurant/foods/add/{{$restaurant_id}}"><i class="entypo-plus-circled"></i>  Thêm mới</a>
    </div>
    <div class="row" style="margin: 0px;">
        <table class="table table-bordered ">
            <thead>
                <tr >
                    <th class="text-center" style="width: 50px;">STT</th>
                    <th class="text-center" style="width: 50px;">Hiện</th>
                    <th class="text-center" style="width: 150px;">Tên món ăn</th>
                    <th class="text-center" style="width: 150px;">Loại món ăn</th>
                    <th class="text-center" style="width: 150px;">Giá tiền</th>
                    <th class="text-center">Mô tả</th>
                    <th class="text-center">Thực đơn</th>
                    <th  class="text-center" style="width: 100px;">Tác vụ</th>
                </tr>
            </thead>
            @if(count($foods))
            @foreach($foods as $food)
                <tr>
                    <td class="text-center">{{$loop->iteration}}</td>
                    <td class="text-center">
                        <input type="checkbox" onchange="fnChangeStatus('{{$food->id}}',this)" {{$food->status ==1 ?'checked':'' }} data-toggle="toggle" data-onstyle="success"  data-offstyle="danger" data-size="mini">
                    </td>
                    <td class="text-center">{{$food->name}}</td>
                    <td class="text-center">{{$food->typeoffood->name or ""}}</td>
                    <td class="text-right">{{number_format($food->price)}}</td>
                    <td class="text-left">{{$food->description1}}</td>
                    <td>
                        {{ $food->typeoffood->name or "" }}
                    </td>
                    <td>
                        <div class="actions">
                            <a href="/backend/restaurant/foods/update/{{$restaurant_id}}/{{$food->id}}" class="edit">Sửa</a>
                            <a onclick="fnDelete('{{$food->id}}')" class="delete">Xóa</a>
                        </div>
                    </td>
                </tr>
            @endforeach
            @endif

        </table>
    </div>
    <div class="modal fade" id="modal_add_food">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Thêm mới món ăn</h4>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-info">Thêm</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('js-stack')
    <script src="/admin/assets/js/jquery.nestable.js"></script>
    <script src="/admin/plugins/sweetalert2/sweetalert2.all.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
    <script>
        $('#add_food').click(function(e){
            e.preventDefault();
            $('#modal_add_food').modal('show');
        });
        function  fnChangeStatus(id,el) {
            var status =$(el).is(":checked") ==true ? 1:0;
            $.ajax({
                method:'post',
                url:'/backend/restaurant/foods/changeStatus',
                data:{id:id, status:status , _token:'{{csrf_token()}}'}
            }).done(function (data) {
                console.log(data);
            })
        }
        function fnDelete(id) {
            swal({
                title: 'Bạn có chắc chắn muốn xóa?',
                text: "Bạn sẽ không thể phục hồi dữ liệu này!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xóa!'
            }).then((result) => {
                if (result.value) {
                    $.ajax({
                        url : '/backend/restaurant/foods/delete',
                        type: 'post',
                        dataType: 'json',
                        data: {
                            _token: '{{ csrf_token() }}',
                            id:id
                        },
                        success: function (data) {
                            if(data.status === 'success')
                            {
                                swal(
                                    'Xong!',
                                    data.message,
                                    'success'
                                );
                            }
                            else if(data.status === 'error'){
                                swal(
                                    'Lỗi!',
                                    data.message,
                                    'error'
                                );
                            }
                            else {
                                swal(
                                    'Lỗi!',
                                    'Lỗi không xác định vui lòng thử lại',
                                    'error'
                                );
                            }
                            location.reload(true);
                        },
                        error: function ()
                        {
                            swal(
                                'Lỗi!',
                                'Lỗi không xác định vui lòng thử lại',
                                'error'
                            );
                        }
                    });
                }
            })
        }
    </script>
@endpush
@push('css-stack')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-toggle/2.2.2/css/bootstrap-toggle.css">

@endpush