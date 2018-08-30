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
                        <div class="form-group">
                            <label for="username" class="col-sm-3 control-label">Tên tài khoản</label>
                            <div class="col-sm-5">
                                <input type="username" class="form-control" id="username" placeholder="Nhập tên đăng nhập cho tài khoản nhà hàng">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-sm-3 control-label">Mật khẩu</label>
                            <div class="col-sm-5">
                                <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu cho tài khoản nhà hàng">
                                <span class="description">Mật khẩu ít nhất gồm 6 kí tự và không chứa kí tự khoảng trắng.</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="field-3" class="col-sm-3 control-label">Số điện thoại</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" name="phone" id="phone" placeholder="Nhập số điện thoại nhà hàng">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email" class="col-sm-3 control-label">Email</label>
                            <div class="col-sm-5">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Nhập email nhà hàng">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="image" class="col-sm-3 control-label">Ảnh đai diện</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" name="image" id="image" placeholder="Chọn ảnh đại diện cho nhà hàng">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="video" class="col-sm-3 control-label">Video</label>
                            <div class="col-sm-5">
                                <input type="url" class="form-control" name="video" id="video" placeholder="Nhập link video của nhà hàng">
                                <span class="description">Chỉ cho phép link youtube.</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="time_open" class="col-sm-3 control-label">Giá mở cửa</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" name="time_open" id="time_open" placeholder="Nhập thời gian nhà hàng đóng cửa">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="time_close" class="col-sm-3 control-label">Giờ đóng cửa</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" name="time_close" id="time_close" placeholder="Nhập thời gian nhà hàng đóng cửa">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="price_min" class="col-sm-3 control-label">Giá thấp nhất</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" name="price_min" id="price_min" placeholder="Nhập giá sản phẩm thấp nhất của nhà hàng">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="price_max" class="col-sm-3 control-label">Giá cao nhất</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" name="price_max" id="price_max" placeholder="Nhập giá sản phẩm cao nhất của nhà hàng">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="trans_fee" class="col-sm-3 control-label">Phí vận chuyển</label>
                            <div class="col-sm-5">
                                <input type="text" class="form-control" name="trans_fee" id="trans_fee" placeholder="Nhập phí vận chuyển của nhà hàng">
                                <span class="description">Nhập phí vận chuyển trên mỗi km.</span>
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
                                <div class="form-group">
                                    <label for="{{ $locale }}_name" class="col-sm-3 control-label">Tên nhà hàng</label>
                                    <div class="col-sm-5">
                                        <input type="text" class="form-control" name="{{ $locale }}_name" id="{{ $locale }}_name" value="{{ old("{$locale}_name") }}" placeholder="Nhập tên của nhà hàng">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="{{ $locale }}_name" class="col-sm-3 control-label">Mô tả</label>
                                    <div class="col-sm-5">
                                        <textarea class="form-control" name="{{ $locale }}_description" id="{{ $locale }}_description" placeholder="Nhập mô tả nhà hàng"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="{{ $locale }}_address" class="col-sm-3 control-label">Địa chỉ</label>
                                    <div class="col-sm-5">
                                        <input type="text" class="form-control" name="{{ $locale }}_address" id="{{ $locale }}_address" placeholder="Nhập địa chỉ của nhà hàng">
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