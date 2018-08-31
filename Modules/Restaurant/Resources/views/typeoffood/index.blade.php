@extends('backend.layouts.master')
@section('content')
    <div class="admin-section-title">
        <h3><i class="entypo-archive"></i> Loại món ăn - Nhà hàng : restaurant_id {{$restaurant_id}}</h3>
        <a class="btn btn-success" onclick="fnUpdate(0)"><i class="entypo-plus-circled"></i>  Thêm mới</a>
    </div>
    <div class="row" style="margin: 0px;">
        <table class="table table-bordered" id="tbCategory">
            <thead>
            <tr>
                <th>STT</th>
                <th>Tên loại món ăn</th>
                <th>Món ăn</th>
                <th>Tác vụ</th>
            </tr>
            </thead>
            @foreach($typeoffood as $item)
                <tr>
                    <td class="text-center">{{$loop->iteration}}</td>
                    <td>{{$item->name}}</td>
                    <td></td>
                    <td>
                        <div class="actions">
                            <a href="javascript:;" onclick="fnUpdate('{{$item->id}}')" class="edit">Sửa</a>
                            <a href="javascript:;" onclick="fnDelete('{{$item->id}}')" class="delete">Xóa</a>
                        </div>
                    </td>
                </tr>
            @endforeach
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