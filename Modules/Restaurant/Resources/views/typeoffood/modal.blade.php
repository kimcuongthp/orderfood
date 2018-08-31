<div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            @if($type->id == 0)
                <h4 class="modal-title">Tạo mới loại món ăn</h4>
            @else
                <h4 class="modal-title">Cập nhật loại món ăn</h4>
            @endif
        </div>
        <div class="modal-body">
            {!! Form::open(['route' => ['typeoffood.update'], 'method' => 'post', 'id' => 'update-typeoffood-form']) !!}
            @include('backend.partials.language-tab2')
            <div class="tab-content">
                <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
                <?php $active = ($locale == LaravelLocalization::getCurrentLocale()) ? 'active' : ''; ?>
                <div class="tab-pane {{ $active }}" id="{{ $locale }}2">
                    <div class="form-group">
                        <label for="data {{ $locale }}_name">Tên</label>
                        <input autocomplete="off" name="{{ $locale }}_name" id="{{ $locale }}_name" value="{{$type->translate($locale) !=null ? $type->translate($locale)->name:""}}" placeholder="Nhập tên loại món ăn" class="form-control" />
                        <div id="{{ $locale }}_name_error"></div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
            <input type="hidden" name="id" value="{{$type->id}}">
            <input type="hidden" name="restaurant_id" value="{{ $type->restautant_id }}">
            {!! Form::close() !!}
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
            <button type="button" class="btn btn-info" onclick="fnTypeOfFoodSubmit()">Lưu lại</button>
        </div>
    </div>
</div>