<div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Tạo mới danh mục</h4>
        </div>
        <div class="modal-body">
            {!! Form::open(['route' => ['category.update'], 'method' => 'post', 'id' => 'update-category-form']) !!}
            @include('backend.partials.language-tab2')
            <input type="hidden" name="id" value="{{$data->id}}">
            <div class="tab-content">
                <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
                <?php $active = ($locale == LaravelLocalization::getCurrentLocale()) ? 'active' : ''; ?>
                <div class="tab-pane {{ $active }}" id="{{ $locale }}2">
                    <div class="form-group">
                        <label for="{{ $locale }}_name">Tên</label>

                        <input name="{{ $locale }}_name" id="{{ $locale }}_name" value="{{$data->translate($locale) !=null ? $data->translate($locale)->name:""}}" placeholder="Nhập tên loại nhà hàng" class="form-control" />
                        <div id="{{ $locale }}_name_error"></div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
            {!! Form::close() !!}
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
            <button type="button" class="btn btn-info" onclick="fnCategorySubmit()">Lưu lại</button>
        </div>

    </div>
</div>