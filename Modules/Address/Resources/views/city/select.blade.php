<div class="form-group">
    <label for="city_id">Chọn Thành phố</label>
    <select name="city_id" id="city_id" class="form-control">
        @if(count($cities))
            @foreach($cities as $city)
                <option value="{{ $city->id }}">{{ $city->name }}</option>
            @endforeach
        @endif
    </select>
</div>