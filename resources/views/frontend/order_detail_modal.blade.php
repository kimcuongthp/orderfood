
<div class="modal-dialog modal-dialog-centered modal-md" role="document">
    <div class="modal-content">
        <div class="modal-body">
            <div class="row">
                <h4>Chi tiết đơn hàng</h4>
            </div>
            <div class="row">
                Tổng {{$order->order_detail->count()}} món
            </div>
            <br/>
            <div class="row">
                <ul class="list-group" style="width: 100%" id="listOrderDetail">
                    @foreach($order->order_detail as $item)
                        <li class="list-group-item">
                            <div>
                                <a class="badge badge-primary">{{$item->quality}}</a>
                                {!! $item->name !!}
                            </div>
                            <span>{{number_format($item->price)}} đ</span>
                        </li>
                    @endforeach
                    <li class="list-group-item" style="border-top: 2px solid orangered; ">
                        <div style="font-weight: 500">
                            Cộng
                        </div>
                        <span>{{number_format($order->price)}} đ</span>
                    </li>
                    <li class="list-group-item">
                        <div style="font-weight: 500">
                            Phí vận chuyển
                        </div>
                        <span style="">{{number_format($order->trans_fee)}} đ</span>
                    </li>
                    <li class="list-group-item">
                        <div style="font-weight: 500">
                            Tổng tiền
                        </div>
                        <span style="color:orangered">{{number_format($order->sum_price)}} đ</span>
                    </li>
                </ul>
            </div>

            </div>
            <div class="modal-footer">
                <button class="btn btn-orange btn-sm" onclick="fnDatHang('{{$order->id}}')"> Đặt hàng</button>
                <button class="btn btn-blue btn-sm"  data-dismiss="modal"> Đóng</button>
            </div>
        </div>
    </div>
</div>

<script>

</script>