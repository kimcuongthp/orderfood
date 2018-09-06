<div class="modal fade" id="modalLRFormDemo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog cascading-modal" role="document">
        <div class="modal-content">
            <div class="modal-c-tabs">
                <ul class="nav nav-tabs tabs-2 light-blue darken-3" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#panel17" role="tab">
                            <i class="fa fa-user mr-1"></i> {{ trans('frontend.login') }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#panel18" role="tab">
                            <i class="fa fa-user-plus mr-1"></i> {{ trans('frontend.register') }}</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <!--Panel 17-->
                    <div class="tab-pane fade in show active" id="panel17" role="tabpanel">

                        <!--Body-->
                        <div class="modal-body mb-1">
                            <div class="md-form form-sm text-center" style="margin-top:0px;">
                                <button type="button" class="btn btn-fb"><i class="fab fa-facebook-f pr-1"></i> {{ trans('frontend.sign_in_fb') }}</button>
                            </div>
                            <div class="row text-center" style="display:block">
                                <div style="width: 100%; height: 13px; border-bottom: 1px solid #d3d3d3; text-align: center">
                                  <span style="font-size: 14px;font-weight: 600; padding: 0 10px;background:#fff">
                                    {{ trans('frontend.or') }}
                                  </span>
                                </div>
                            </div>
                            <div class="md-form form-sm">
                                <i class="fa fa-envelope prefix"></i>
                                <input type="text" id="email" class="form-control form-control-sm">
                                <label for="email">{{ trans('frontend.your_email_phone') }}</label>
                            </div>

                            <div class="md-form form-sm">
                                <i class="fa fa-lock prefix"></i>
                                <input type="password" id="password" class="form-control form-control-sm">
                                <label for="password">{{ trans('frontend.your_password') }}</label>
                            </div>
                            <div class="text-center mt-4">
                                <button id="submit_login" class="btn btn-info">{{ trans('frontend.login') }}
                                    <i class="fa fa-sign-in ml-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="panel18" role="tabpanel">
                        <div class="modal-body">
                            <div class="md-form form-sm">
                                <i class="fa fa-envelope prefix"></i>
                                <input type="text" id="form141" class="form-control form-control-sm">
                                <label for="form14">{{ trans('frontend.your_username') }}</label>
                            </div>
                            <div class="md-form form-sm">
                                <i class="fa fa-envelope prefix"></i>
                                <input type="text" id="form14" class="form-control form-control-sm">
                                <label for="form14">{{ trans('frontend.your_email') }}</label>
                            </div>

                            <div class="md-form form-sm">
                                <i class="fa fa-lock prefix"></i>
                                <input type="password" id="form5" class="form-control form-control-sm">
                                <label for="form5">{{ trans('frontend.your_r_password') }}</label>
                            </div>

                            <div class="md-form form-sm">
                                <i class="fa fa-lock prefix"></i>
                                <input type="password" id="form6" class="form-control form-control-sm">
                                <label for="form6">{{ trans('frontend.retype_password') }}</label>
                            </div>

                            <div class="text-center form-sm mt-4">
                                <button class="btn btn-info">{{ trans('frontend.sign_up') }}
                                    <i class="fa fa-sign-in ml-1"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@push('js-stack')
    <script>
        jQuery(document).ready(function($)
        {
           $('#submit_login').click(function(){
               var email = $('#email').val();
               var password = $('#password').val();
               if(!email || !password)
               {
                   alert('Vui lòng nhập đủ thông tin')
                   return false;
               }
               $.ajax({
                  url: '{{ route('user.login') }}',
                  type: 'post',
                  dataType: 'json',
                  data: {
                      email: email,
                      password: password,
                      _token: '{{ csrf_token() }}'
                  },
                   success: function(data) {
                      if(data.status === 'success')
                      {
                          window.location.href = '{{ url('/') }}'
                      }
                      else
                      {
                          alert(data.message);
                      }
                   }
               });
           });
        });
    </script>
@endpush
