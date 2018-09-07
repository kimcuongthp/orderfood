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
                    <h3>{{ trans('frontend.update_userinfo') }}</h3>
                    <hr>
                        {!! Form::open(['route' => 'update.user.info']) !!}
                    @if(session()->has('message'))
                        <div class="alert alert-success">
                            {{ session()->get('message') }}
                        </div>
                    @endif
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="md-form form-sm">
                                    <i class="fas fa-user prefix"></i>
                                    <input type="text" id="full_name" name="full_name" value="{{ $user_info->full_name }}" class="form-control form-control-sm">
                                    <label for="full_name">{{ trans('frontend.your_name') }}</label>
                                    @if($errors->has('full_name'))
                                        <span class="text-danger">{{ $errors->first('full_name') }}</span>
                                    @endif
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="md-form form-sm">
                                    <i class="fas fa-mobile-alt prefix"></i>
                                    <input type="text" id="phone" name="phone" value="{{ $user_info->phone }}" class="form-control form-control-sm">
                                    <label for="phone">{{ trans('frontend.your_phone') }}</label>
                                    @if($errors->has('phone'))
                                        <span class="text-danger">{{ $errors->first('phone') }}</span>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="md-form form-sm">
                                    <i class="far fa-envelope prefix"></i>
                                    <input type="text" id="user_email" name="user_email" value="{{ Auth::user()->email }}" class="form-control form-control-sm">
                                    <label for="user_email">{{ trans('frontend.your_email') }}</label>
                                    @if($errors->has('user_email'))
                                        <span class="text-danger">{{ $errors->first('user_email') }}</span>
                                    @endif
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="md-form form-sm">
                                    <i class="fas fa-address-book prefix"></i>
                                    <input type="text" id="address" name="address" value="{{ $user_info->address }}" class="form-control form-control-sm">
                                    <label for="address">{{ trans('frontend.your_address') }}</label>
                                    @if($errors->has('address'))
                                        <span class="text-danger">{{ $errors->first('address') }}</span>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="row float-right">
                            <button type="submit" class="btn btn-warning btn-sm">{{ trans('frontend.save_changes') }}</button>
                        </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection
@push('js-stack')
    <script>
        $('.action').click(function(){
            $('.action').removeClass('active');
            window.location.href = $(this).attr('href');
        });

        $('#select_city').change(function(){
            var id = $(this).val();
            $.ajax({
                type: 'GET',
                url: '/backend/address/cities/'+id+'/districts?locale={{ LaravelLocalization::getCurrentLocale() }}'
            }).then(function (data) {
                $('#select_district').html(data);
            });
        });
    </script>
@endpush