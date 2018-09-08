@extends('backend.layouts.master')
@push('css-stack')
    <style>
        #tableOrder tr th{text-align: center;}
        #tableOrder tr th:first-child{width: 50px;}
        #tableOrder tr th:last-child{width: 150px;}
        #tableOrder tr td{max-width: 200px ;line-height: 28px;color:#000}
        #tableOrder tr td{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
    </style>
@endpush
@section('content')
    <div class="admin-section-title">
        <h3><i class="entypo-list"></i> Quản lý đơn hàng</h3>
    </div>
    <div class="row" style="margin: 0px">
        <form class="form-inline" action="{{route('order.index')}}">
            @if(Auth::user()->hasRole('Staff') == true)
            <div class="col-sm-4">
                <div class="form-group" style="width: 100%">
                    <div class="col-xs-4" style="text-align: right;line-height: 30px">Nhà hàng:</div>
                    <div class="col-xs-8">
                        <select data-size="8"  data-live-search="true" class="form-control" name="rid" style="width: 100%" data-style="btn-white">
                            <option value="0">Tất cả</option>
                            @foreach($restaurant as $item)
                                <option {{$rid==$item->id?'selected':''}} value="{{$item->id}}">{{$item->name}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
            @endif
            <div class="col-sm-4">
                <div class="form-group"  style="width: 100%">
                    <div class="col-xs-4" style="text-align: right;line-height: 30px">Tình trạng:</div>
                    <div class="col-xs-8">
                        <select  name="status" class="form-control" style="width: 100%" data-style="btn-white">
                            <option value="-1">Tất cả</option>
                            @foreach($status as $item)
                                <option {{$stt == $item->id ?'selected':''}} value="{{$item->id}}">{{$item->name}}</option>
                            @endforeach

                        </select>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-blue">Tìm kiếm</button>
        </form>
    </div>
    <br/>
    <div class="row" style="margin: 0px;">
        <div class="table-responsive">
            <table class="table table-bordered" id="tableOrder">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên nhà hàng</th>
                        <th>Tên khách</th>
                        <th>SDT khách</th>
                        <th>Số tiền(đ)</th>
                        <th>Số món ăn</th>
                        <th>Tình trạng</th>
                        <th>Cập nhật lúc</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                @foreach($orders as  $order)
                    <tr>
                        <td class="text-center">{{$loop->iteration}}</td>
                        <td>{{$order->restaurant}}</td>
                        <td class="text-center">{{$order->customer_full_name}}</td>
                        <td class="text-center">{{$order->customer_phone}}</td>
                        <td class="text-center">{{number_format($order->sum_price)}}</td>
                        <td class="text-center">{{number_format($order->number_food)}}</td>
                        <td class="text-center"><span style="color: {{$order->status_color}};">{{$order->status}}</span></td>
                        <td class="text-center">{{ Carbon\Carbon::parse($order->updated_time)->format('H:i d/m/y') }}</td>
                        <td class="text-center">
                            <button class="btn btn-sm btn-blue" onclick="fnOrderDetail({{$order->id}})" title="Chi tiết đơn hàng"><i class="fa fa-info-circle" aria-hidden="true"></i></button>
                            @if($order->status_id != 6 && $order->status_id !=0 && Auth::user()->hasRole('Staff') == true)
                                <button class="btn btn-sm" style="background:{{$order->status_color}};color:#fff"  onclick="fnOrderStatus({{$order->id}})">Next</button>
                                <button class="btn btn-sm btn-red" onclick="fnOrderDestroy({{$order->id}})" title="Hủy đơn hàng"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                            @endif
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
            {{$order_list->appends(['rid' => $rid,'status'=>$stt])->links()}}
        </div>
    </div>

    <div class="modal" id="modalOrderDetail" tabindex="-1" role="dialog">

    </div>
    <div class="modal" id="modalNext" tabindex="-1" role="dialog">

    </div>
    <div class="modal" id="modalDestroy" tabindex="-1" role="dialog">

    </div>
@endsection

@push('js-stack')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.js"></script>
<script>
    function fnOrderDetail(id){
        $('#modalOrderDetail').load('{{route('order.detail')}}?order_id='+id,function (e) {
            $('#modalOrderDetail').modal('show');
        });
    }
    function fnOrderDestroy(id){
        $('#modalOrderDetail').load('{{route('order.destroy')}}?order_id='+id,function (e) {
            $('#modalOrderDetail').modal('show');
        });
    }

    function fnOrderStatus(id) {
        $('#modalOrderDetail').load('{{route('order.change')}}?order_id='+id,function (e) {
            $('#modalOrderDetail').modal('show');
        });
    }
    $('select').selectpicker();
</script>
@endpush
@push('css-stack')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css">
    <style>
        .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {
            color: #fff;
            text-decoration: none;
            outline: 0;
            background-color: #FFCC80 !important;
        }
    </style>
@endpush