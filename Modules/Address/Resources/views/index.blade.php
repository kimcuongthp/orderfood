@extends('backend.layouts.master')
@section('content')
    <div class="admin-section-title">
        <h3><i class="entypo-archive"></i> Tỉnh thành / Quận huyện</h3>
        <a href="javascript:;" onclick="jQuery('#add-new').modal('show');" class="btn btn-success"><i class="entypo-plus-circled"></i> Thêm mới</a>
    </div>
    <div class="panel panel-primary" data-collapsed="0">
        <div class="panel-heading">
            <div class="panel-title">
                Danh sách Tỉnh thành
            </div>
            <div class="panel-options">
                <a href="#" data-rel="collapse"><i class="entypo-down-open"></i></a>
            </div>
        </div>
        <div class="panel-body">
            <div id="nestable" class="nested-list dd with-margins"><!-- adding class "with-margins" will separate list items -->
                <ul class="dd-list">
                    @if(count($cities))
                        @foreach($cities as $city)
                            <li class="dd-item" data-id="{{ $city->id }}">
                                <div class="dd-handle">
                                    {{ $city->name }}
                                </div>
                                <div class="actions"><a href="{{ route('address.city.edit', $city->id) }}" class="edit edit_city">Sửa</a> <a href="javascript:;" data-id="{{ $city->id }}" class="delete delete_city">Xóa</a></div>
                            </li>
                        @endforeach
                    @endif
                </ul>
            </div>
        </div>
    </div>
    <div class="panel panel-primary" data-collapsed="0">
        <div class="panel-heading">
            <div class="panel-title">
                Danh sách Quận huyện
            </div>
            <div class="panel-options">
                <a href="#" data-rel="collapse"><i class="entypo-down-open"></i></a>
            </div>
        </div>
        <div class="panel-body">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên Quận huyện</th>
                    <th>Thành Phố</th>
                    <th>Tác vụ</th>
                </tr>
                </thead>
                <tbody>
                @if(count($districts))
                    @foreach($districts as $district)
                        <tr>
                            <td>{{ $district->id }}</td>
                            <td>{{ $district->name }}</td>
                            <td>{{ $district->city->name or "" }}</td>
                            <td>
                                <div class="actions">
                                    <a href="{{ route('address.district.edit', $district->id) }}" class="edit edit_district">Sửa</a>
                                    <a href="javascript:;" data-id="{{ $district->id }}" class="delete delete_district">Xóa</a>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                @endif
                </tbody>
            </table>
            <div class="text-center">
                {!! $districts->links('vendor.pagination.simple-default') !!}
            </div>
        </div>
    </div>

    <!-- Add New Modal-->
    <div class="modal fade" id="add-new">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Thêm mới Tỉnh thành / Quận huyện</h4>
                </div>
                <div class="modal-body">
                    {!! Form::open(['route' => ['address.store'], 'method' => 'post', 'id' => 'add-new-form']) !!}
                        <div class="form-group">
                            <label for="type">Loại</label>
                            <select name="type" id="type" class="form-control">
                                <option value="city">Tỉnh thành</option>
                                <option value="district">Quận huyện</option>
                            </select>
                        </div>
                        @include('backend.partials.language-tab')
                        <div class="tab-content">
                            <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
                            <?php $active = ($locale == LaravelLocalization::getCurrentLocale()) ? 'active' : ''; ?>
                            <div class="tab-pane {{ $active }}" id="{{ $locale }}">
                                <div class="form-group">
                                    <label for="{{ $locale }}_name">Tên</label>
                                    <input name="{{ $locale }}_name" id="{{ $locale }}_name" value="{{ old($locale.'_name') }}" placeholder="Nhập tên Tỉnh thành hoặc Quận huyện" class="form-control" />
                                    <div id="{{ $locale }}_name_error"></div>
                                </div>
                            </div>
                            <?php endforeach; ?>
                        </div>
                        @csrf
                        <div id="append_city"></div>
                    {!! Form::close() !!}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-info" id="submit-new">Lưu lại</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Update City Modal-->
    <div class="modal fade" id="update-city">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Sửa thông tin Thành phố</h4>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-info" id="submit-update-city">Lưu lại</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Update District Modal-->
    <div class="modal fade" id="update-district">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Sửa thông tin Quận huyện</h4>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-info" id="submit-update-district">Lưu lại</button>
                </div>
            </div>
        </div>
    </div>
@stop
@push('js-stack')
    <script src="/admin/assets/js/jquery.nestable.js"></script>
    <script src="/admin/plugins/sweetalert2/sweetalert2.all.js"></script>
    <script>
        $(document).ready(function($)
        {
            $('.dd').nestable({
                maxDepth: 1
            });

            $('.dd').on('change', function() {
                $.post('{{ route('address.city.order') }}',
                    { order : JSON.stringify($('.dd').nestable('serialize')), _token: '{{ csrf_token() }}' },
                    function (data) {}
                );
            });


            $('.actions .edit_city').click(function (e) {
                $('#update-city').modal('show', {backdrop: 'static'});
                e.preventDefault();
                href = $(this).attr('href');
                $('#update-city .modal-body').load(href);
            });

            $('.actions .edit_district').click(function (e) {
                $('#update-district').modal('show', {backdrop: 'static'});
                e.preventDefault();
                href = $(this).attr('href');
                $('#update-district .modal-body').load(href);
            });

            $('#submit-update-city').click(function () {
                <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
                if($('#update-city-form #{{ $locale }}_name').val() == '') {
                    toastr.error('Điền thiếu dữ liệu, vui lòng kiểm tra lại!', 'Lỗi!', opts);
                    return;
                }
                <?php endforeach; ?>
               $('#update-city-form').submit();
            });

            $('#submit-update-district').click(function () {
                <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
                if($('#update-district-form #{{ $locale }}_name').val() == '') {
                    toastr.error('Điền thiếu dữ liệu, vui lòng kiểm tra lại!', 'Lỗi!', opts);
                    return;
                }
                <?php endforeach; ?>
                $('#update-district-form').submit();
            });

            $('#submit-new').click(function()
            {
                <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
                    if($('#{{ $locale }}_name').val() == '') {
                        toastr.error('Điền thiếu dữ liệu, vui lòng kiểm tra lại!', 'Lỗi!', opts);
                        return;
                    }
                <?php endforeach; ?>
                $('#add-new-form').submit();
            });

            $('#type').change(function()
            {
               if($('#type').val() === 'district')
               {
                   $('#append_city').load("{{ route('address.city.all') }}");
               }
               else
               {
                   $('#append_city').html('');
               }
            });

            $('.delete_district').click(function(){
                var id = $(this).attr('data-id');
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
                            url : '/backend/address/districts/'+id+'/delete',
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
                            error: function (e)
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
            });

            $('.delete_city').click(function(){
                var id = $(this).attr('data-id');
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
                            url : '/backend/address/cities/'+id+'/delete',
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
                            error: function (e)
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
            });
        });

    </script>
@endpush