<div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Thay đổi trạng thái đơn hàng</h4>
        </div>
        <form action="{{route('order.onchange')}}" method="post">
            @csrf
            <input type="hidden" value="{{$data->id}}" name="order_id"/>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-6">
                        <p>Khách hàng: <b>{{$data->customer_full_name}}</b></p>
                        <p>Số điện thoại: <b>{{$data->customer_phone}}</b></p>
                    </div>
                    <div class="col-sm-6">
                        <p>Nhà hàng: <b>{{$data->restaurant}}</b> </p>
                        <p>Tổng tiền: <b>{{number_format($data->sum_price)}}</b> <sup>đ</sup> </p>
                    </div>
                </div>
                <hr/>
                <p>Chuyển trạng thái đơn hàng thành: <b style="color:{{$data->next_status_color}}">{{$data->next_status}}</b> </p>
                <p>Ghi chú thay đổi:</p>
                <textarea class="form-control" style="resize: vertical" rows="3" name="note" required></textarea>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-orange">Tiếp tục</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal">Đóng</button>
            </div>
        </form>
    </div>
</div>