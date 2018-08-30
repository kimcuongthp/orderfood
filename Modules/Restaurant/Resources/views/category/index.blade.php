@extends('backend.layouts.master')
@section('content')
<div class="admin-section-title">
    <h3><i class="entypo-archive"></i> Danh mục nhà hàng</h3>
    <a class="btn btn-success" onclick="fnUpdate(0)"><i class="entypo-plus-circled"></i>  Thêm mới</a>
</div>
<div class="row">
    <table class="table table-bordered" id="tbCategory">
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên loại nhà hàng</th>
                <th>Nhà hàng</th>
                <th>Tác vụ</th>
            </tr>
        </thead>
        @foreach($category as $categories)
            <tr>
                <td class="text-center">{{$loop->iteration}}</td>
                <td>{{$categories->name}}</td>
                <td></td>
                <td  class="text-center">
                    <button class="btn btn-blue btn-xs" onclick="fnUpdate('{{$categories->id}}')"><i class="glyphicon glyphicon-pencil"></i> </button>
                    <button class="btn btn-red btn-xs" onclick="fnDelete('{{$categories->id}}')"><i class="glyphicon glyphicon-trash"></i></button>
                </td>
            </tr>
        @endforeach
    </table>

</div>



<div id="modalCategory" class="modal fade" role="dialog">

</div>


@endsection

@push('js-stack')
    <script src="/admin/assets/js/jquery.nestable.js"></script>
    <script src="/admin/plugins/sweetalert2/sweetalert2.all.js"></script>
    <script>
        function fnUpdate(id) {
            $('#modalCategory').load('categories/category/modal/'+id).modal('show');
        }

        function fnCategorySubmit(){

            <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
            if($('#update-category-form #{{ $locale }}_name').val() == '') {

                toastr.error('Điền thiếu dữ liệu, vui lòng kiểm tra lại!', 'Lỗi!', opts);
                return;
            }
            <?php endforeach; ?>
            $('#update-category-form').submit();
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
                        url : 'categories/category/delete/'+id,
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
