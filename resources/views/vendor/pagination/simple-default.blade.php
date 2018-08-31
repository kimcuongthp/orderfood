@if ($paginator->hasPages())
    <ul class="pagination" role="navigation">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="disabled" aria-disabled="true"><span><i class="entypo-left-thin"></i> Trang trước</span></li>
        @else
            <li><a href="{{ $paginator->previousPageUrl() }}" rel="prev"><i class="entypo-left-thin"></i> Trang trước</a></li>
        @endif

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li><a href="{{ $paginator->nextPageUrl() }}" rel="next">Trang sau <i class="entypo-right-thin"></i></a></li>
        @else
            <li class="disabled" aria-disabled="true"><span>Trang sau <i class="entypo-right-thin"></i></span></li>
        @endif
    </ul>
@endif
