$( document ).ready( function () {
    $( '.dropdown-menu a.dropdown-toggle' ).on( 'click', function ( e ) {
        var $el = $( this );
        var $parent = $( this ).offsetParent( ".dropdown-menu" );
        if ( !$( this ).next().hasClass( 'show' ) ) {
            $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
        }
        var $subMenu = $( this ).next( ".dropdown-menu" );
        $subMenu.toggleClass( 'show' );

        $( this ).parent( "li" ).toggleClass( 'show' );

        $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
            $( '.dropdown-menu .show' ).removeClass( "show" );
        } );

         if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
            $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
        }

        return false;
    } );

    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        dots:false,
    })

});
var tmplist =0;
$('#thucdon-tab').click(function(){
  setTimeout(function () {
    checkScreen();
  }, 500);
})
$('#danhgia-tab').click(function(){
  var h =$('.box-order').height()+ 100;
  $('#danhgia').css('min-height',h);
});
$(window).scroll(function (event) {

  checkScreen();
});
checkScreen();
$( window ).resize(function() {
    checkScreen();
});

function checkScreen(){
  // if(window.innerWidth >1000){
  //     var height = $(window).scrollTop();
  //     var tmp =$('.nh-sp').height() + $('.nh-menu .list-group').height() -500;
  //     if(height > tmp){
  //       $('.nh-menu').css({"position":'absolute','bottom':'0px','top':'unset'});
  //     }else if(height > 420){
  //         $('.nh-menu').css({"position":'fixed','top':'71px'});
  //     }else{
  //         $('.nh-menu').css({"position":'absolute','top':'0px','bottom':'unset'});
  //     }
  //
  //     var nhsp =0;
  //     if($('.nh-sp').height()  > 0){
  //       nhsp =$('.nh-sp').height();
  //     }else if($('#danhgia').height() > 0){
  //       nhsp =$('#danhgia').height();
  //     }else if($('#gioithieu').height() > 0){
  //       nhsp =$('#gioithieu').height();
  //     }
  //     if(nhsp <600){
  //       nhsp =600;
  //     }
  //
  //     var tmp2 =nhsp + $('.nh-order .box-order').height() -300;
  //     if(height > tmp2){
  //       $('.box-order').css({"position":'absolute','bottom':'0px','top':'unset','right': 'unset'});
  //     }else if(height > 420){
  //       var w = ((window.innerWidth -1200) /2 )+32;
  //       $('.box-order').css({"position":'fixed','top':'71px','right': w,'width':300 });
  //     }else{
  //       $('.box-order').css({"position":'absolute','top':'0px','bottom':'unset','right':'unset'});
  //     }
  // }
  if(window.innerWidth < 1000){
    if(tmplist == 0){
      tmplist =1;
      $('.nh-menu ul').addClass("list-inline");
      $('.nh-menu ul').removeClass("list-group");
      var width =0;
      $('.nh-menu ul li').each(function(e){
          width= $(this).width();
          $(this).addClass("list-inline-item");
          $(this).removeClass("list-group-item");
      })
    }
  }else {
    if(tmplist == 1){
      $('.nh-menu ul').removeClass("list-inline");
      $('.nh-menu ul').addClass("list-group");
      var width =0;
      $('.nh-menu ul li').each(function(e){
          width= $(this).width();
          $(this).removeClass("list-inline-item");
          $(this).addClass("list-group-item");
      })
    }
    tmplist =0;
  }
}
$('.responsive-tabs').responsiveTabs({
  accordionOn: ['xs', 'sm'] // xs, sm, md, lg
});


$(".rating").each(function(item) {

    var name = $(this).attr('class');
    var star= 0;
    if(name.indexOf('star-1') !=-1){

        star =1;
    }else if(name.indexOf('star-2') !=-1){
        star =2;
    }else if(name.indexOf('star-3') !=-1){
        star = 3;
    }else if(name.indexOf('star-4') !=-1){
        star =4;
    }else if(name.indexOf('star-5') !=-1){
        star =5;
    }
    html ="";
    for(var i=1;i<=star;i++){
     html+='<i class="fas fa-star"></i>';
    }
    for(var i=1;i<=5-star;i++){
     html+='<i class="far fa-star"></i>';
    }
    $(this).html(html);
});

var boxItem =[];
var tempTop =0;
$('.box-item').each(function(item){
    var id =$(this).attr('id');
    boxItem.push({id:id,top:$(this).offset().top});
})

$(window).scroll(function (event) {
  var height = $(window).scrollTop();
  var check = boxItem.find(x=>x.top >height);

  if(check !=undefined && check.top !=tempTop){
    tempTop = check.top;

    $('.nh-menu li a').removeClass('box-item-active');
    $('.nh-menu [href="#'+check.id+'"]').addClass('box-item-active');

  }
});


$(document).ready(function(){
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10);
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });

  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    $('input[name=rates]').val(ratingValue);
  });
});
var tabid ='';
$('#box-order-tab [data-toggle="tab"]').click(function(){
  if(tabid !=$(this).attr('id')){
    tabid = $(this).attr('id');
    $('#box-order-tab-content').show();
  }else{
    tabid ='';
    $('#box-order-tab-content').hide();
  }
})

$('#loginOrdeFood').click(function(){
  $('#modalLRFormDemo').modal('show');
})


function fnModalHistory(){
  $('#modalHistory').modal('show');
}

$('#chooselocation a:first-child').click(function(){
  $('.vitricuaban').show();
  $('.diachicuatoi').hide();
  $(this).addClass('active');
  $('#chooselocation a:last-child').removeClass('active');

})
$('#chooselocation a:last-child').click(function(){
  $('.diachicuatoi').show();
  $('.vitricuaban').hide();
  $(this).addClass('active');
  $('#chooselocation a:first-child').removeClass('active');
})

$(window).scroll(function (event) {
  var height = $(window).scrollTop();
  // #slide,#detail-nhahang,#box-order-search
  if(window.innerWidth >1000){
    if(height > 200){
      $('#mainmenu').css('height','70px');
      $('.menux-center').css('top','7px');
      $('#imglogo1').css('height','70px');
    }else{
      $('#mainmenu').css('height','100px');
      $('.menux-center').css('top','20px');
      $('#imglogo1').css('height','100px');
    }
  }

});
