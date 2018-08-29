{!! Form::open(['route' => ['address.district.update', $district->id], 'method' => 'post', 'id' => 'update-district-form']) !!}
@include('backend.partials.language-tab2')
<div class="tab-content">
    <?php foreach (LaravelLocalization::getSupportedLocales() as $locale => $language): ?>
    <?php $active = ($locale == LaravelLocalization::getCurrentLocale()) ? 'active' : ''; ?>
    <div class="tab-pane {{ $active }}" id="{{ $locale }}2">
        <div class="form-group">
            <label for="{{ $locale }}_name">Tên</label>
            <input name="{{ $locale }}_name" id="{{ $locale }}_name" value="{{ $district->translate($locale)->name }}" placeholder="Nhập tên Quận huyện" class="form-control" />
            <div id="{{ $locale }}_name_error"></div>
        </div>
    </div>
    <?php endforeach; ?>
</div>
<div class="form-group">
    <label for="city_id">Chọn Thành phố</label>
    <select name="city_id" id="city_id" class="form-control">
        @if(count($cities))
            @foreach($cities as $city)
                <?php $selected = ($city->id === $district->city_id) ? ' selected' : '' ;?>
                <option value="{{ $city->id }}" {{ $selected }}>{{ $city->name }}</option>
            @endforeach
        @endif
    </select>
</div>
{!! Form::close() !!}