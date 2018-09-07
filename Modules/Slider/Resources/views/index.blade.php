@extends('backend.layouts.master')
@section('content')
    <div class="row">
        <div class="col-md-6">
            <h3 style="margin-bottom: 20px">Sắp xếp slide</h3>
            <div id="list-1" class="nested-list dd with-margins">
                <ul class="dd-list">
                    @if(count($slides))
                        @foreach($slides as $slide)
                            <li class="dd-item" data-id="{{ $slide->id }}">
                                <div class="dd-handle">
                                    {{ $slide->name or "Chưa đặt tên"}}
                                </div>
                                <div class="actions"><a href="javascript:;" data-form-id="delete_slide{{ $slide->id }}" class="delete delete_slide">Xóa</a></div>
                                {!! Form::open(['route' => ['slide.delete', $slide->id],'id' => 'delete_slide'.$slide->id]) !!}
                                {!! Form::close() !!}
                            </li>
                        @endforeach
                    @else
                        <i>Chưa có slide nào, vui lòng thêm mới!</i>
                    @endif
                </ul>
            </div>
        </div>
        <div class="col-md-6">
            <h3 style="margin-bottom: 20px">Thêm slide</h3>
            {!! Form::open(['route' => 'slide.store']) !!}
            {!! Form::normalInput('name','Tên slide', 'Nhập tên slide', '', $errors, false) !!}
            <div class="form-group validate-has-error">
                <label for="image">Ảnh slide</label><br/>
                <div class="fileinput fileinput-new">
                    <div class="fileinput-new thumbnail" style="max-width: 300px; height: auto;">
                        <img src="http://placehold.it/1420x500" alt="avatar">
                    </div>
                    <div>
                        <span>
                            <button class="btn btn-white select-image fileinput-new btn_gallery">Chọn ảnh</button>
                            <button class="btn btn-white change-image fileinput-exists btn_gallery">Thay đổi</button>
                            <input type="hidden" name="image" class="input-file" value="" />
                        </span>
                        <button type="button" class="btn btn-orange remove-image fileinput-exists">Xóa</button>
                    </div>
                    @if($errors->has('image'))
                        <span class="validate-has-error">{{ $errors->first('image') }}</span>
                    @endif
                </div>
            </div>
            <button class="btn btn-success" type="submit">Thêm slide</button>
            {!! Form::close() !!}
        </div>
    </div>
@stop
@push('js-stack')
    <script src="/admin/assets/js/jquery.nestable.js"></script>
    <script src="/admin/plugins/sweetalert2/sweetalert2.all.js"></script>
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
                $('.thumbnail').html('<img src="http://placehold.it/1420x500" alt="avatar" />');
                $('.remove-image').addClass('fileinput-exists');
                $('.change-image').addClass('fileinput-exists');
                $('.select-image').removeClass('fileinput-exists');
            });
        }
    </script>
    <script>
        $(document).ready(function($) {
            $('.dd').nestable({
                maxDepth: 1
            });
            $('.dd').on('change', function () {
                $.post('{{ route('slide.order') }}',
                    {order: JSON.stringify($('.dd').nestable('serialize')), _token: '{{ csrf_token() }}'},
                    function (data) {
                    }
                );
            });

            $('.delete_slide').click(function()
            {
                var formid = $(this).attr('data-form-id');
                var r = confirm("Bạn có thực sự muốn xóa?");
                if (r == true) {
                    $('#'+formid).submit();
                }
            });
        });
    </script>
@endpush