@extends('frontend.layouts.master')
@section('content')
    @include('frontend.partials.slide')
    <br><br>
    <div class="row">
        <div class="container" id="usermenu">
            <div class="row">
                <div class="col-sm-3">
                    @include('frontend.partials.sidebar_userinfo')
                </div>
                <div class="col-sm-9">
                    <h3>{{ trans('frontend.change_pass') }}</h3>
                    <hr>
                    {!! Form::open(['route' => 'user.do_change_password', 'id' => 'form_changepass']) !!}
                        <div class="row">
                            <div class="col-sm-12">
                                @if(session()->has('message'))
                                    <div class="alert alert-success">
                                        {{ session()->get('message') }}
                                    </div>
                                @endif
                                <div class="md-form form-sm">
                                    <i class="fas fa-lock-open prefix"></i>
                                    <input type="password" id="oldpass" name="oldpass" class="form-control form-control-sm">
                                    <label for="oldpass">Mật khẩu cũ</label>
                                    @if($errors->has('oldpass'))
                                        <span class="text-danger">{{ $errors->first('oldpass') }}</span>
                                    @endif
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="md-form form-sm">
                                    <i class="fas fa-unlock-alt prefix"></i>
                                    <input type="password" id="newpass" name="newpass" class="form-control form-control-sm">
                                    <label for="newpass">Mật khẩu mới</label>
                                    @if($errors->has('newpass'))
                                        <span class="text-danger">{{ $errors->first('newpass') }}</span>
                                    @endif
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="md-form form-sm">
                                    <i class="fas fa-unlock prefix"></i>
                                    <input type="password" id="renew" name="renew" class="form-control form-control-sm">
                                    <label for="renew">Nhập lại mật khẩu mới</label>
                                    @if($errors->has('renew'))
                                        <span class="text-danger">{{ $errors->first('renew') }}</span>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="row float-left">
                            <button type="submit" id="change_button" class="btn btn-warning">{{ trans('frontend.save_changes') }}</button>
                        </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection
@push('js-stack')
    <script>
        $('[href="{{route('user.change_password')}}"]').addClass('active');
        $('#change_button').click(function(e){
            e.preventDefault();
            var newpass = $('#newpass').val();
            var renew = $('#renew').val();
            if(renew != newpass)
            {
                alert('Nhập mật khẩu mới không trùng khớp');
            }
            else{
                $('#form_changepass').submit();
            }
        })
    </script>
@endpush