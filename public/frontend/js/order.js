$('#form-rate').submit(function () {
    var rate =$('[name=rates]').val();
    var message =$('[name=message]').val();
    if(rate =='' || rate == undefined || message ==''){
        alert('Vui lòng đánh giá và để lại nội dung tin nhắn.');
        return false;
    }
})
function  fnModalFood(id,count) {
    if(count ==0){
        addOrderOption(id);
    }else{
        showModal(id);
    }
}
function showModal(id) {
    $('#modalFood').load('/restaurant/food/option/'+id,function (e) {
        $('#modalFood').modal('show');
    });
}
$('#modalFood').on('hidden.bs.modal', function (e) {
    $('#modalFood').html('');
})

var order= {food_id:0,total:0,item:0,data:[]};

function addOrderOption(id){

}


$('#modalFood').on('shown.bs.modal',function (e) {

    LoadOrder();
    $('#modalFood button.btn-plus').click(function (e) {
        var number = parseInt($('#modalFood input[name=numberFood]').val());
        if(number < 98){
            $('#modalFood input[name=numberFood]').val(number + 1);
            $('#modalFood input[name=numberFood]').trigger('change');
        }
    })
    $('#modalFood button.btn-minus').click(function (e) {
        var number = parseInt($('#modalFood input[name=numberFood]').val());
        if(number >0){
            $('#modalFood input[name=numberFood]').val(number - 1);
            $('#modalFood input[name=numberFood]').trigger('change');
        }
    })


    $('#modalFood input[name=numberFood]').change(function () {

        order.item =parseInt($('#modalFood input[name=numberFood]').val());
        var price =parseInt($('#modalFood input[name=priceFood]').val());
        order.total = order.item * price;
        $.each(order.data,function (index,item) {
            order.total += order.item * item.price;
        })
        $('#modalFood #total').html(order.total.toLocaleString());
    })

    $('#modalFood .custom-control-input[type=radio]').on('change',function (e) {
        var food_option = $(this).attr('name').replace('foodrd','');
        var price =$(this).val();
        var sub_option =$(this).attr('id').replace('foodrd','');
        var data = {
            food_option:food_option,
            sub_option:sub_option,
            price:price
        }
        var find = order.data.find(function (dt) {
            return dt.food_option == food_option;
        });
        if(find !=undefined){
            order.total = order.total - parseInt(find.price) * order.item;
        }
        order.total = order.total + parseInt(data.price) * order.item;
        order.data = order.data.filter(function (item) {
            return item.food_option != food_option;
        })
        order.data.push(data);
        $('#modalFood #total').html(order.total.toLocaleString());
    })

    $('#modalFood .custom-control-input[type=checkbox]').on('change',function (e) {
        var food_option = $(this).attr('data-food_option');
        var price =$(this).val();
        var sub_option =$(this).attr('id').replace('foodcb','');
        var data = {
            food_option:food_option,
            sub_option:sub_option,
            price:price
        }
        if($(this).is(':checked')){
            order.total= order.total + order.item * parseInt(price);
            order.data.push(data);
        }else{
            order.total=order.total - order.item * parseInt(price);
            order.data= order.data.filter(function (item) {
                return item.sub_option !=sub_option;
            })
        }
        $('#modalFood #total').html(order.total.toLocaleString());
    })

    $('#modalFood #btnAddOrderItem').click(function (e) {
        var token =$('#modalFood [name=_token]').val();
        $.ajax({
            method:'post',
            url:'/restaurant/food/order-item',
            data:{
                _token: token,
                item : order
            }
        }).done(function (result) {
            if(result.status ==true){
                $('#modalFood').modal('hide');
            }else{
                alert(result.msg);
            }
        })
    })
})

function LoadOrder() {
    order= {food_id:0,total:0,item:0,data:[]};
    order.food_id =parseInt($('#modalFood .box-info-title').attr('data-food_id'));
    order.total = parseInt($('#modalFood input[name=numberFood]').val()) * parseInt($('#modalFood input[name=priceFood]').val());
    order.item =parseInt($('#modalFood input[name=numberFood]').val());


    $.each($('#modalFood .custom-control-input[type=radio]'),function (index,item) {
        if($(this).is(':checked')){

            var food_option = $(this).attr('name').replace('foodrd','');
            var price =$(this).val();
            var sub_option =$(this).attr('id').replace('foodrd','');
            var data = {
                food_option:food_option,
                sub_option:sub_option,
                price:price
            }
            order.total = order.total + parseInt(data.price) * order.item;
            order.data.push(data);
        }
    })

    $.each($('#modalFood .custom-control-input[type=checkbox]'),function (index,item) {
        if($(this).is(':checked')){

            var food_option = $(this).attr('data-food_option');
            var price =$(this).val();

            var sub_option =$(this).attr('id').replace('foodcb','');
            var data = {
                food_option:food_option,
                sub_option:sub_option,
                price:price
            }
            order.total= order.total + order.item * parseInt(price);
            console.log(order);
            order.data.push(data);
        }
    })
}

// angularjs
var app = angular.module('myApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});
app.controller('RestaurantCtrl', function($scope, $http) {
    $scope.test =new Date();
    setInterval(function(){
        $scope.$apply(function () {
            $scope.test =new Date();
        });
        }, 1000);

});