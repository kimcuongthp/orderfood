
<?php
$stt=-1;$temp=-1;$tmp=-1;
?>

@extends('backend.layouts.master')

@section('content')

    <div class="admin-section-title">
        @if($food->id ==0)
            <h3><i class="entypo-archive"></i>   Thêm mới món ăn - Nhà hàng : restaurant_id  {{$restaurant_id}}</h3>
            @else
            <h3><i class="entypo-archive"></i>   Cập nhật món ăn{{$stt}} - Nhà hàng : restaurant_id  {{$restaurant_id}}</h3>
        @endif
    </div>
    {!! Form::open(['route' => ['foods.update'], 'method' => 'post','class'=>'form-horizontal form-groups-bordered' ,'id' => 'update-food-form']) !!}
    <div class="row" style="margin: 0px;">
        <div class="col-md-6" style="padding: 0px;">
            <div class="panel panel-primary">
                <div class="panel-heading"><div class="panel-title">Thông tin cơ bản</div>
                </div>
                <div class="panel-body">
                    <input name="id" type="hidden" value="{{$food->id}}"/>
                    <input name="restaurant_id" type="hidden" value="{{$restaurant_id}}"/>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="field-1" class="col-sm-3 control-label">Loại món ăn</label>
                                <div class="col-sm-9">
                                    <select required class="form-control" name="typeoffood_id" data-style="btn-white">
                                        <option value="">Chọn loại món ăn</option>
                                        @foreach($typeoffood as $item )
                                            <option {{$food->id !=0 && $food->typeoffood_id == $item->id  ? 'selected':'' }} value="{{$item->id}}">{{$item->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="price" class="col-sm-3 control-label">Giá tiền</label>
                                <div class="col-sm-9">
                                    <input required max="99999999" min="1000" autocomplete="off" type="number" name="price" class="form-control" id="price" placeholder="Giá món ăn" value="{{$food->price}}" >
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="price" class="col-sm-3 control-label">Trạng thái</label>
                                <div class="col-sm-9">
                                    <select class="form-control" name="status"  data-style="btn-white">
                                        <option  {{$food->id !=0 && $food->status == 1  ? 'selected':'' }}  value="1">Hiển thị món ăn</option>
                                        <option {{$food->id !=0 && $food->status == 0  ? 'selected':'' }} value="0">Ẩn món ăn</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label for="image" class="col-sm-3 control-label">Ảnh đai diện</label>
                            <div class="col-sm-9">
                                <div class="fileinput fileinput-new">
                                    <div class="fileinput-new thumbnail" style="max-width: 200px; height: 140px;">
                                        <img src="{{$food->id !=0 && $food->image !=NULL ? "$food->image":"http://placehold.it/200x132" }}" alt="avatar">
                                    </div>
                                    <div>
									<span>
										<button type="button" class="btn btn-white select-image fileinput-new btn_gallery">Chọn ảnh</button>
										<button type="button" class="btn btn-white change-image fileinput-exists btn_gallery">Thay đổi</button>
                                        <input type="hidden" name="image" class="input-file" value="{{$food->image}}" />
									</span>
                                        <button type="button" class="btn btn-orange remove-image fileinput-exists">Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="col-md-6" style="padding-right: 0px;">
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
                                        <div class="col-sm-9"> <input {{$locale ==LaravelLocalization::getCurrentLocale()?'required':'' }} value="{{$food->translate($locale) !=null ? $food->translate($locale)->name:''}}" autocomplete="off" type="text" name="{{ $locale }}_name" class="form-control" id="{{ $locale }}_name" placeholder="Tên món ăn"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="{{ $locale }}_description1" class="col-sm-3 control-label">Mô tả 1</label>
                                        <div class="col-sm-9"> <input {{$locale ==LaravelLocalization::getCurrentLocale()?'required':'' }} autocomplete="off" type="text" value="{{$food->translate($locale) !=null ? $food->translate($locale)->description1:''}}" name="{{ $locale }}_description1" class="form-control" id="{{ $locale }}_description1" placeholder="Mô tả món ăn 1"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="{{ $locale }}_description2" class="col-sm-3 control-label">Mô tả 2</label>
                                        <div class="col-sm-9"> <input {{$locale ==LaravelLocalization::getCurrentLocale()?'required':'' }} autocomplete="off" type="text" value="{{$food->translate($locale) !=null ? $food->translate($locale)->description2:''}}" name="{{ $locale }}_description2" class="form-control" id="{{ $locale }}_description2" placeholder="Mô tả món ăn 2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="panel-title">Món phụ</div>
            </div>
            <div class="panel-body">

                @include('backend.partials.language-tab3')
                <div class="tab-content">
                    <?php foreach (LaravelLocalization::getSupportedLocales() as $locate => $language): ?>
                    <?php $active = ($locate == LaravelLocalization::getCurrentLocale()) ? 'active' : ''; ?>

                    <?php $tmp=0; $stt =0;?>
                    <div class="tab-pane {{ $active }}" id="{{ $locate }}3" style="padding-top: 10px;">
                        <table class="table table-bordered table-cus" id="{{ $locate }}_tableoption">
                            <tr>
                                <td>Tên nhóm</td>
                                <td>Ghi chú</td>
                                <td width="200px;">Chọn một hoặc nhiều</td>

                                @if($locate == LaravelLocalization::getCurrentLocale())
                                <td width="100px" class="text-center">
                                    <button type="button" class="btn btn-green btn-xs" onclick="fnAddGroup()">Add Group</button>
                                </td>
                                @endif
                            </tr>
                            @foreach($food->food_options as $food_option)

                                <?php $stt= $stt+1; ?>
                                <tr data-id="{{$stt}}">
                                    <td><input {{$locate == LaravelLocalization::getCurrentLocale() ?'required':''}} value="{{$food_option->translate($locate)->name}}"  class="form-control" name="{{$locate}}_foodoption_name[]"></td>
                                    <td><input class="form-control" value="{{$food_option->translate($locate)->note}}" name="{{$locate}}_foodoption_note[]"></td>
                                    <td>
                                        <input type="hidden" name="{{$locate}}_foodoption_id[]" value="{{$food_option->id}}">
                                        @if($locate == LaravelLocalization::getCurrentLocale())
                                            <select name="{{$locate}}_foodoption_one_or_more[]" class="form-control"  data-style="btn-white">
                                                <option {{$food_option->one_or_more ==0?'selected':''}}  value="0">Chọn một</option>
                                                <option {{$food_option->one_or_more ==1?'selected':''}} value="1">Chọn nhiều</option>
                                            </select>
                                        @endif
                                    </td>

                                    @if($locate == LaravelLocalization::getCurrentLocale())
                                        <td class="text-center">
                                            <button type="button" class="btn btn-red btn-xs" onclick="fnDelGroup('{{$stt}}')">Del Group</button>
                                        </td>
                                    @endif

                                </tr>
                                <tr class="sub" data-id="{{$stt}}" style="background: #ffffe0">
                                    <td colspan="100">
                                        <table class="table table-bordered" >
                                            <?php
                                            $sub_options = \Modules\Restaurant\Entities\FoodOption::where('id',$food_option->id)->with('sub_options')->first()->sub_options;
                                            ?>
                                            <tr>
                                                <td>Tên món</td>
                                                <td>Số tiền</td>
                                                @if($locate == LaravelLocalization::getCurrentLocale())
                                                    <td width="100px" class="text-center">
                                                        <input type="hidden" data-id="{{$stt}}" name="count_subOption[]" value="{{$sub_options->count()}}">
                                                        <button type="button" class="btn btn-green btn-xs" onclick="fnAddIem('{{$stt}}')">Add Item</button>
                                                    </td>
                                                @endif
                                            </tr>
                                            <tbody data-sub="{{$stt}}" data-locate="{{$locate}}" >


                                            @foreach($sub_options as $sub_option)

                                                <tr data-temp="{{$tmp}}">
                                                    <td>
                                                        <input type="hidden" name="{{$locate}}_subOption_id[]" value="{{$sub_option->id}}">
                                                        <input  value="{{$sub_option->translate($locate)->name}}" {{$locate == LaravelLocalization::getCurrentLocale() ?'required':''}} name="{{$locate}}_suboption_name[]" class="form-control">
                                                    </td>
                                                    <td>
                                                        @if($locate != LaravelLocalization::getCurrentLocale())
                                                            <input disabled="disabled" class="form-control">
                                                        @else
                                                            <input value="{{$sub_option->price}}" type="number" max="1000000" min="0"  {{$locate == LaravelLocalization::getCurrentLocale() ?'required':''}} name="{{$locate}}_suboption_price[]" class="form-control">
                                                        @endif
                                                    </td>
                                                    @if($locate == LaravelLocalization::getCurrentLocale())
                                                        <td>
                                                            <button type="button" class="btn btn-xs btn-red" onclick="fnDelItem('{{$tmp}}',this)">Del item</button>
                                                        </td>
                                                    @endif
                                                </tr>
                                                <?php $tmp= $tmp+1; ?>
                                            @endforeach
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>

                            @endforeach
                        </table>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>

    <div class="row" style="margin-left: 0px;">
        <button type="submit" class="btn btn-blue">Submit</button>
    </div>
    {!! Form::close() !!}

@endsection

@push('js-stack')
    <script src="/admin/assets/js/jquery.nestable.js"></script>
    <script src="/admin/plugins/sweetalert2/sweetalert2.all.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.js"></script>
    @include('media::partials.media')
    <script src="{{ asset('vendor/media/js/jquery.addMedia.js') }}"></script>
    <script>
        $('select').selectpicker();
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
        }
        String.prototype.replaceAll = function(search, replacement) {
            var target = this;
            return target.replace(new RegExp(search, 'g'), replacement);
        };
    </script>

    <?php foreach (LaravelLocalization::getSupportedLocales() as $locate => $language): ?>
    <script type="text/html" id="{{$locate}}_FoodOption">
            <tr data-id="-stt-">
                <td><input {{$locate == LaravelLocalization::getCurrentLocale() ?'required':''}}  class="form-control" name="{{$locate}}_foodoption_name[]"></td>
                <td><input class="form-control" name="{{$locate}}_foodoption_note[]"></td>
                <td>
                    <input type="hidden" name="{{$locate}}_foodoption_id[]" value="0">
                    @if($locate == LaravelLocalization::getCurrentLocale())
                        <select name="{{$locate}}_foodoption_one_or_more[]" class="form-control"  data-style="btn-white">
                            <option value="0">Chọn một</option>
                            <option value="1">Chọn nhiều</option>
                        </select>
                    @endif
                </td>

            @if($locate == LaravelLocalization::getCurrentLocale())
                <td class="text-center">
                    <button type="button" class="btn btn-red btn-xs" onclick="fnDelGroup('-stt-')">Del Group</button>
                </td>
            @endif

            </tr>
            <tr class="sub" data-id="-stt-" style="background: #ffffe0">
                <td colspan="100">
                    <table class="table table-bordered" >
                        <tr>
                            <td>Tên món</td>
                            <td>Số tiền</td>
                            @if($locate == LaravelLocalization::getCurrentLocale())
                            <td width="100px" class="text-center">
                                <input type="hidden" data-id="-stt-" name="count_subOption[]" value="0">
                                <button type="button" class="btn btn-green btn-xs" onclick="fnAddIem('-stt-')">Add Item</button>
                            </td>
                            @endif
                        </tr>
                        <tbody data-sub="-stt-" data-locate="{{$locate}}" ></tbody>
                    </table>
                </td>
            </tr>
    </script>
    <script type="text/html" id="{{$locate}}_SubOption">
        <tr data-temp="-temp-">
            <td>
                <input type="hidden" name="{{$locate}}_subOption_id[]" value="0">
                <input  {{$locate == LaravelLocalization::getCurrentLocale() ?'required':''}} name="{{$locate}}_suboption_name[]" class="form-control">
            </td>
            <td>
            @if($locate != LaravelLocalization::getCurrentLocale())
                <input disabled="disabled" class="form-control">
                @else
                    <input type="number" max="1000000" min="0"  {{$locate == LaravelLocalization::getCurrentLocale() ?'required':''}} name="{{$locate}}_suboption_price[]" class="form-control">
            @endif
            </td>
            @if($locate == LaravelLocalization::getCurrentLocale())
                <td>
                    <button type="button" class="btn btn-xs btn-red" onclick="fnDelItem('-temp-',this)">Del item</button>
                </td>
            @endif
        </tr>
    </script>

    <?php endforeach; ?>
    <script>
        var stt =parseInt('{{$stt+1}}');
        var temp =parseInt('{{$temp+1}}');
        function fnAddGroup() {
            <?php foreach (LaravelLocalization::getSupportedLocales() as $locate => $language): ?>
                var html =$('script#{{$locate}}_FoodOption').html();
                html = html.replaceAll('-stt-',stt);
                $('#{{$locate}}_tableoption > tbody').append(html);
            <?php endforeach; ?>
            stt = stt + 1;
            $('select').selectpicker();
        }
        function fnDelGroup(id) {
            $('[data-id='+id+']').remove();
        }
        function fnAddIem(id) {
            var number =parseInt($('[data-id='+id+'][name="count_subOption[]"]').val());
            $('[data-id='+id+'][name="count_subOption[]"]').val(number + 1);
            <?php foreach (LaravelLocalization::getSupportedLocales() as $locate => $language): ?>
            var html =$('script#{{$locate}}_SubOption').html();
            html = html.replaceAll('-temp-',temp);
            $('tbody [data-sub='+id+'][data-locate={{$locate}}]').append(html);
            <?php endforeach; ?>
            temp = temp+1;
        }
        function fnDelItem(id,el) {
            var input = $(el).parent().parent().parent().parent().find('[name="count_subOption[]"]');
            input.val(parseInt(input.val())-1);
            $('tr[data-temp='+id+']').remove();
        }
    </script>
@endpush
@push('css-stack')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css">
@endpush