<div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Chi tiết đơn hàng</h4>
        </div>
        <div class="modal-body">

            <p>Khách hàng: <b>{{$data->customer_full_name}}</b></p>
            <p>Số điện thoại: <b>{{$data->customer_phone}}</b></p>
            <hr/>
            <p>Nhà hàng: <b>{{$data->restaurant}}</b> </p>
            <p>Tổng tiền: <b>{{number_format($data->sum_price)}}</b> <sup>đ</sup> </p>
            <p>Tổng số <b>{{$data->order_detail->count()}}</b> món đã đặt </p>

            <div class="row">
                <ul class="list-group" style="width: 100%" id="listOrderDetail">
                    @foreach($data->order_detail as $item)
                        <li class="list-group-item">
                            <div>
                                {{$item->quality}} - {!! $item->name !!}
                            </div>
                            <span>{{number_format($item->price)}} đ</span>
                        </li>
                    @endforeach
                </ul>
            </div>

            <p>Timeline đơn hàng </p>
            <div class="row">
                <ul class="list-group" style="width: 100%" id="listTimeline">
                    @foreach($data->timeline as $item)
                        <li class="list-group-item">
                            <p>{{ Carbon\Carbon::parse($item->created_at)->format('H:i d/m/Y') }} - <span style="color:{{$item->color}}">{{$item->name}}</span></p>
                            @if($item->note !=null)
                                <p>Note: {{$item->note}}</p>
                            @endif
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
    </div>
</div>