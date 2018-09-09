<div class="row">
    @if(count($restaurants))
        @foreach($restaurants as $restaurant)
            <div class="col-6 col-sm-4 col-lg-3 listCardv2-item">
                <a href="{{ route('restaurant', $restaurant->id) }}" title="{{ $restaurant->name }}" class="card">
                    @php
                        $now = strtotime(\Illuminate\Support\Carbon::now()->format('H:i'));
                        $status = ($restaurant->is_open === 1 || ($now > strtotime($restaurant->time_open) && $now < strtotime($restaurant->time_close))) ? ' online' : ' offline';
                    @endphp
                    <div class="dotOnline{{ $status }}">
                        <i class="fas fa-circle"></i>
                    </div>
                    <img class="card-img-top" src="{{ $restaurant->image }}" />
                    <div class="card-body">
                        <p class="card-head">{{ $restaurant->name }}</p>
                        <p class="card-text">{{ $restaurant->address }}</p>
                        <p class="card-note"><i class="fas fa-tags"></i> {{ $restaurant->alert }}</p>
                    </div>
                </a>
            </div>
        @endforeach
    @endif
</div>