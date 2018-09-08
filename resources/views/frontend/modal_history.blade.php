<div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title w-100" id="myModalLabel">{{trans('frontend.order_detail')}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p> <b>{{$data->restaurant}}</b> </p>
            <p> <b>Tổng tiền:</b> {{number_format($data->sum_price)}} <sup>đ</sup> </p>
            <p>Tổng số {{$data->order_detail->count()}} món đã đặt </p>
            <div class="row">
                <ul class="list-group" style="width: 100%" id="listOrderDetail">
                    @foreach($data->order_detail as $item)
                        <li class="list-group-item">
                            <div>
                                <a class="badge badge-primary">{{$item->quality}}</a>
                                {!! $item->name !!}
                            </div>
                            <span>{{number_format($item->price)}} đ</span>
                        </li>
                    @endforeach
                </ul>
            </div>
            <br/>
            <p>Timeline đơn hàng </p>
            <div class="row">
                <ul class="list-group" style="width: 100%" >
                    @foreach($data->timeline as $item)
                        <li class="list-group-item">
                            <div>
                                {{ Carbon\Carbon::parse($item->created_at)->format('H:i d/m/Y') }} - {{$item->name}}
                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-orange btn-sm" data-dismiss="modal">Close</button>
        </div>
    </div>
</div>