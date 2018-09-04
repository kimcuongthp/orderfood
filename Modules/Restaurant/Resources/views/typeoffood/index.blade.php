@extends('backend.layouts.master')
@section('content')
    <div class="admin-section-title">
        <h3><i class="entypo-list"></i> Danh sách thực đơn</h3>
        <a class="btn btn-success" onclick="fnUpdate(0)"><i class="entypo-plus-circled"></i>  Thêm món ăn</a>
    </div>
    <div class="row" style="margin: 0px;">
        <table class="table table-bordered text-middle" id="tbCategory">
            <thead>
            <tr>
                <th style="width: 25px">STT</th>
                <th>Tên thực đơn</th>
                <th>Danh sách thực đơn</th>
                <th>Nhà hàng</th>
                <th>Tác vụ</th>
            </tr>
            </thead>
            @if(count($typeoffood))
            @foreach($typeoffood as $item)
                <tr>
                    <td class="text-center">{{$loop->iteration}}</td>
                    <td>{{$item->name}}</td>
                    <td class="text-center pointer" onclick="window.location.href ='/backend/restaurant/foods/{{$restaurant_id}}/{{$item->id}}'">
                        <a>Xem <strong>{{$item->foods->count()}}</strong> món ăn</a>
                    </td>
                    <td class="text-center text-success">{{ $item->restaurant->name or "" }}</td>
                    <td>
                            <a href="javascript:;" onclick="fnUpdate('{{$item->id}}')" class="btn btn-default">
                                <i class="fa fa-edit"></i>
                            </a>
                            <a href="javascript:;" onclick="fnDelete('{{$item->id}}')" class="btn btn-danger">
                                <i class="fa fa-trash"></i>
                            </a>
                    </td>
                </tr>
            @endforeach
            @endif
        </table>
    </div>
    <div id="modalTypeOfFood" class="modal fade" role="dialog">

    </div>
@endsection

@push('js-stack')
    <script src="/admin/assets/js/jquery.nestable.js"></script>
    <script src="/admin/plugins/sweetalert2/sweetalert2.all.js"></script>
    <script>
        function fnUpdate(id) {
            $('#modalTypeOfFood').load('typeoffoods/typeoffood/modal/'+id+"?restaurant_id={{$restaurant_id}}").modal('show');
        }
        function fnTypeOfFoodSubmit(){

            <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
            if($('#update-typeoffood-form #{{ $locale }}_name').val() == '') {

                toastr.error('Điền thiếu dữ liệu, vui lòng kiểm tra lại!', 'Lỗi!', opts);
                return;
            }
            <?php endforeach; ?>
            $('#update-typeoffood-form').submit();
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
                        url : 'typeoffoods/typeoffood/delete/'+id,
                        type: 'post',
                        dataType: 'json',
                        data: {
                            _token: '{{ csrf_token() }}'
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