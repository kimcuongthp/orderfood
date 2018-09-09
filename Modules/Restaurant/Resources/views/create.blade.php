@extends('backend.layouts.master')
@section('content')
    {!! Form::open(['class' => 'form-horizontal form-groups-bordered validate', 'method' => 'post']) !!}
       <div class="row">
            <div class="col-md-12">
                <div class="panel panel-primary" data-collapsed="0">
                    <div class="panel-heading">
                        <div class="panel-title">
                            Thêm Tài Khoản Nhà Hàng
                        </div>
                        <div class="panel-options">
                            <a href="#" data-rel="collapse"><i class="entypo-down-open"></i></a>
                            <a href="#" data-rel="reload"><i class="entypo-arrows-ccw"></i></a>
                        </div>
                    </div>
                    <div class="panel-body">
                        {!! Form::normalInput('username','Tên tài khoản', 'Nhập tên tài khoản', '', $errors, true) !!}
                        {!! Form::normalInput('user_email','Email', 'Nhập email cho tài khoản', '', $errors, true) !!}
                        <div class="form-group{{ $errors->has('password') ? ' validate-has-error' : '' }}">
                            <label for="password" class="col-sm-3 control-label">Mật khẩu</label>
                            <div class="col-sm-5">
                                <input type="password" class="form-control" id="password" name="password" placeholder="Nhập mật khẩu cho tài khoản nhà hàng">
                                <span class="description">Mật khẩu ít nhất gồm 6 kí tự và không chứa kí tự khoảng trắng.</span>
                                @if($errors->has('password'))
                                    <span class="validate-has-error">{{ $errors->first('password') }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="category_id" class="col-sm-3 control-label">Danh mục nhà hàng</label>
                            <div class="col-sm-5">
                                <select class="form-control select2" name="category_id[]" multiple="multiple">
                                    @if(count($categories))
                                        @foreach($categories as $category)
                                            <option value="{{ $category->id }}">{{ $category->name }}</option>
                                        @endforeach
                                    @endif
                                </select>
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('city_id') ? ' validate-has-error' : '' }}">
                            <label class="col-sm-3 control-label">Thuộc Tỉnh thành</label>
                            <div class="col-sm-5">
                                <select name="city_id" id="select_city" class="selectboxit" data-first-option="false">
                                    <option>Chọn Tỉnh thành</option>
                                    @if(count($cities))
                                        @foreach($cities as $city)
                                            <option value="{{ $city->id }}">{{ $city->name }}</option>
                                        @endforeach
                                    @endif
                                </select>
                                @if($errors->has('city_id'))
                                    <span class="validate-has-error">{{ $errors->first('city_id') }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Thuộc Quận huyện</label>
                            <div class="col-sm-5">
                                <select name="district_id" id="select_district" class="selectboxit" data-first-option="false">
                                    <option>Chọn Quận huyện</option>
                                </select>
                            </div>
                        </div>
                        {!! Form::normalInput('phone','Số điện thoại', 'Nhập số điện thoại nhà hàng', '', $errors, true) !!}
                        {!! Form::normalInput('email','Email nhà hàng', 'Nhập email nhà hàng', '', $errors, true) !!}
                        <div class="form-group">
                            <label for="image" class="col-sm-3 control-label">Ảnh đai diện</label>
                            <div class="col-sm-5">
                                <div class="fileinput fileinput-new">
                                    <div class="fileinput-new thumbnail" style="max-width: 200px; height: auto;">
                                        <img src="http://placehold.it/200x132" alt="avatar">
                                    </div>
                                    <div>
									<span>
										<button class="btn btn-white select-image fileinput-new btn_gallery">Chọn ảnh</button>
										<button class="btn btn-white change-image fileinput-exists btn_gallery">Thay đổi</button>
                                        <input type="hidden" name="image" class="input-file" value="" />
									</span>
                                        <button type="button" class="btn btn-orange remove-image fileinput-exists">Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {!! Form::normalInput('video','Link Video', 'Nhập link video giới thiệu nhà hàng', 'Chỉ cho phép link youtube', $errors, true) !!}
                        <div class="form-group{{ ($errors->has('time_open') ? ' validate-has-error' : '') }}">
                            <label for="time_open" class="control-label col-sm-3">Giờ mở cửa</label>
                            <div class="col-sm-5">
                                <input class="form-control timepicker" placeholder="Nhập thời gian nhà hàng mở cửa" name="time_open" type="text" value="" id="time_open">
                                @if($errors->has('time_open'))
                                    <span class="validate-has-error">{{ $errors->first('time_open') }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group{{ ($errors->has('time_close') ? ' validate-has-error' : '') }}">
                            <label for="time_open" class="control-label col-sm-3">Giờ đóng cửa</label>
                            <div class="col-sm-5">
                                <input class="form-control timepicker" placeholder="Nhập thời gian nhà hàng đóng cửa" name="time_close" type="text" value="" id="time_close">
                                @if($errors->has('time_close'))
                                    <span class="validate-has-error">{{ $errors->first('time_close') }}</span>
                                @endif
                            </div>
                        </div>
                        {!! Form::normalInput('price_min','Giá tối thiểu', 'Nhập giá tối thiểu của nhà hàng', '', $errors, true) !!}
                        {!! Form::normalInput('trans_fee','Phí vận chuyển', 'Nhập phí vận chuyển trên mỗi km.', '', $errors, true) !!}
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Trạng thái</label>
                            <div class="col-sm-5">
                            <select name="is_open" class="selectboxit">
                                <option value="1">Hoạt động</option>
                                <option value="0">Không hoạt động</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-primary" data-collapsed="0">
                    <div class="panel-heading">
                        <div class="panel-title">
                            Thêm Tài Khoản Nhà Hàng (Các trường đa ngôn ngữ)
                        </div>
                        <div class="panel-options">
                            <a href="#" data-rel="collapse"><i class="entypo-down-open"></i></a>
                            <a href="#" data-rel="reload"><i class="entypo-arrows-ccw"></i></a>
                        </div>
                    </div>
                    <div class="panel-body">
                        @include('backend.partials.language-tab')
                        <div class="tab-content">
                            <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
                            <?php $active = ($locale == LaravelLocalization::getCurrentLocale()) ? 'active' : ''; ?>
                            <div class="tab-pane {{ $active }}" id="{{ $locale }}">
                                <div class="form-group{{ $errors->has($locale.'_name') ? ' validate-has-error' : '' }}">
                                    <label for="{{ $locale }}_name" class="col-sm-3 control-label">Tên nhà hàng</label>
                                    <div class="col-sm-7">
                                        <input type="text" class="form-control" name="{{ $locale }}_name" id="{{ $locale }}_name" value="{{ old("{$locale}_name") }}" placeholder="Nhập tên của nhà hàng">
                                        @if($errors->has($locale.'_name'))
                                            <span class="validate-has-error">{{ $errors->first($locale.'_name') }}</span>
                                        @endif
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="{{ $locale }}_name" class="col-sm-3 control-label">Mô tả</label>
                                    <div class="col-sm-7">
                                        <textarea class="form-control" name="{{ $locale }}_description" id="{{ $locale }}_description" placeholder="Nhập mô tả nhà hàng">{{ old("{$locale}_description") }}</textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="{{ $locale }}_address" class="col-sm-3 control-label">Địa chỉ</label>
                                    <div class="col-sm-7">
                                        <textarea class="form-control" name="{{ $locale }}_address" id="{{ $locale }}_address" placeholder="Nhập địa chỉ của nhà hàng">{{ old("{$locale}_address") }}</textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="{{ $locale }}_alert" class="col-sm-3 control-label">Thông báo</label>
                                    <div class="col-sm-7">
                                        <input type="text" class="form-control" name="{{ $locale }}_alert" id="{{ $locale }}_alert" value="{{ old("{$locale}_alert") }}" placeholder="Nhập thông báo của nhà hàng">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-3 control-label">Tags</label>
                                    <div class="col-sm-7">
                                        <input type="text" value="" name="{{ $locale }}_tag" class="form-control" data-role="tagsinput" />
                                    </div>
                                </div>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="form-group default-padding">
            <button type="submit" class="btn btn-success">Lưu lại</button>
        </div>
    {!! Form::close() !!}
@stop
@push('css-stack')
    <link rel="stylesheet" href="/admin/assets/js/select2/select2-bootstrap.css">
    <link rel="stylesheet" href="/admin/assets/js/select2/select2.css">
    <link rel="stylesheet" href="/admin/assets/js/selectboxit/jquery.selectBoxIt.css">
@endpush
@push('js-stack')
    <script src="/admin/assets/js/bootstrap-timepicker.min.js"></script>
    <script src="/admin/assets/js/select2/select2.min.js"></script>
    <script src="/admin/assets/js/selectboxit/jquery.selectBoxIt.min.js"></script>
    <script src="{{ asset('vendor/media/packages/ckeditor/ckeditor.js') }}"></script>
    @include('media::partials.media')
    <script src="{{ asset('vendor/media/js/jquery.addMedia.js') }}"></script>
    <script>
        if (jQuery().rvMedia) {

            $('.btn_gallery').rvMedia({
                multiple: false,
                onSelectFiles: function (files, $el) {
                    var firstItem = _.first(files);
                    $('.input-file').val(firstItem.url);
                    $('.thumbnail').html('<img src="'+firstItem.url+'" alt="avatar" />');
                    $('.remove-image').removeClass('fileinput-exists');
                    $('.change-image').removeClass('fileinput-exists');
                    $('.select-image').addClass('fileinput-exists');
                }
            });

            $('.remove-image').click(function(){
                $('.input-file').val('');
                $('.thumbnail').html('<img src="http://placehold.it/200x132" alt="avatar" />');
                $('.remove-image').addClass('fileinput-exists');
                $('.change-image').addClass('fileinput-exists');
                $('.select-image').removeClass('fileinput-exists');
            });


            $('#select_city').change(function(){
                var id = $(this).val();
                // var districtSelect = $('#select_district');
                $.ajax({
                    type: 'GET',
                    url: '/backend/address/cities/'+id+'/districts'
                }).then(function (data) {
                    $('#select_district').html(data)
                    $("#select_district").selectBoxIt("refresh");
                });
            });
            $('.timepicker').timepicker({
                showMeridian: false,
            });
        }
    </script>
    <script>
        'use strict';
        $(document).ready(function () {
            <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
            CKEDITOR.replace('<?php echo $locale;?>_description', {
                filebrowserImageBrowseUrl: '/backend/media_alone?media-action=select-files&method=ckeditor&type=image',
                filebrowserImageUploadUrl: RV_MEDIA_URL.media_upload_from_editor + '?method=ckeditor&type=image&_token=' + $('meta[name="csrf-token"]').attr('content'),
                filebrowserWindowWidth: '768',
                filebrowserWindowHeight: '500',
                height: 356,
                allowedContent: true,
                customConfig: '/admin/plugins/ckeditor/customConfig.js'
            });
            <?php endforeach; ?>
        });
    </script>
@endpush