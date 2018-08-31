
@extends('backend.layouts.master')

@section('content')

    <div class="admin-section-title">
        @if($food->id ==0)
            <h3><i class="entypo-archive"></i>   Thêm mới món ăn - Nhà hàng : restaurant_id  {{$restaurant_id}}</h3>
            @else
            <h3><i class="entypo-archive"></i>   cập nhật món ăn - Nhà hàng : restaurant_id  {{$restaurant_id}}</h3>
        @endif
    </div>
    <div class="row" style="margin: 0px;">
        {!! Form::open(['route' => ['foods.update'], 'method' => 'post','class'=>'form-horizontal form-groups-bordered' ,'id' => 'update-food-form']) !!}

        <div class="panel panel-primary">
            <div class="panel-heading"><div class="panel-title">Thông tin cơ bản</div>
            </div>
            <div class="panel-body">
                <input name="id" type="hidden" value="{{$food->id}}"/>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="field-1" class="col-sm-3 control-label">Loại món ăn</label>
                            <div class="col-sm-5">
                                <select required class="form-control" name="typeoffood_id" data-style="btn-white">
                                    <option value="">Chọn loại món ăn</option>
                                    @foreach($typeoffood as $item )
                                        <option value="{{$item->id}}">{{$item->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="price" class="col-sm-3 control-label">Giá tiền</label>
                            <div class="col-sm-5">
                                <input required max="99999999" min="1000" autocomplete="off" type="number" name="price" class="form-control" id="price" placeholder="Giá món ăn">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="price" class="col-sm-3 control-label">Trạng thái</label>
                            <div class="col-sm-5">
                                <select class="form-control" name="status"  data-style="btn-white">
                                    <option value="1">Hiển thị món ăn</option>
                                    <option value="0">Ẩn món ăn</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-title">Thông tin cơ bản ( Đa ngôn ngữ )</div>
            </div>
            <div class="panel-body">

                @include('backend.partials.language-tab2')
                <div class="tab-content">
                    <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
                    <?php $active = ($locale == LaravelLocalization::getCurrentLocale()) ? 'active' : ''; ?>
                    <div class="tab-pane {{ $active }}" id="{{ $locale }}2">
                        <br>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="{{ $locale }}_name" class="col-sm-3 control-label">Tên món ăn</label>
                                    <div class="col-sm-5"> <input {{$locale ==LaravelLocalization::getCurrentLocale()?'required':'' }} autocomplete="off" type="text" name="{{ $locale }}_name" class="form-control" id="{{ $locale }}_name" placeholder="Tên món ăn"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="{{ $locale }}_description1" class="col-sm-3 control-label">Mô tả món ăn 1</label>
                                    <div class="col-sm-5"> <input {{$locale ==LaravelLocalization::getCurrentLocale()?'required':'' }} autocomplete="off" type="text" name="{{ $locale }}_description1" class="form-control" id="{{ $locale }}_description1" placeholder="Mô tả món ăn 1"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="{{ $locale }}_description2" class="col-sm-3 control-label">Mô tả món ăn 2</label>
                                    <div class="col-sm-5"> <input {{$locale ==LaravelLocalization::getCurrentLocale()?'required':'' }} autocomplete="off" type="text" name="{{ $locale }}_description2" class="form-control" id="{{ $locale }}_description2" placeholder="Mô tả món ăn 2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

        <div class="row" style="margin-left: 0px;">
            <button type="submit" class="btn btn-blue">Submit</button>
        </div>
        {!! Form::close() !!}
    </div>

@endsection

@push('js-stack')
    <script src="/admin/assets/js/jquery.nestable.js"></script>
    <script src="/admin/plugins/sweetalert2/sweetalert2.all.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.js"></script>

    <script>
        $('select').selectpicker();

    </script>
@endpush
@push('css-stack')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css">
@endpush