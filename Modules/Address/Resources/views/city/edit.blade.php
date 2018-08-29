{!! Form::open(['route' => ['address.city.update', $city->id], 'method' => 'post', 'id' => 'update-city-form']) !!}
@include('backend.partials.language-tab2')
<div class="tab-content">
    <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
    <?php $active = ($locale == LaravelLocalization::getCurrentLocale()) ? 'active' : ''; ?>
    <div class="tab-pane {{ $active }}" id="{{ $locale }}2">
        <div class="form-group">
            <label for="{{ $locale }}_name">Tên</label>
            <input name="{{ $locale }}_name" id="{{ $locale }}_name" value="{{ $city->translate($locale)->name }}" placeholder="Nhập tên Tỉnh thành hoặc Quận huyện" class="form-control" />
            <div id="{{ $locale }}_name_error"></div>
        </div>
    </div>
    <?php endforeach; ?>
</div>
{!! Form::close() !!}