$(document).ready(function(){
    
    var max = 0;
    
    $('.lnb').each(function(){
        var lnbH = ($('.lnb').outerHeight())
        console.log(lnbH)

        if(max < lnbH){ //최대값 구하기
            max = lnbH
        }
        console.log(max)
        $('.lnb_bg').height(max)
    })

    $('.topset > .gnb').mouseenter(function(){
        var lnbPd = $('.lnb').css('paddingTop');
        var lnbPd = parseInt(lnbPd)

        $(this).find('.lnb').height(max-lnbPd*2);
        $(this).find('.lnb').stop().slideDown(300);
        $('.lnb_bg').height(max)
        $('.lnb_bg').stop().slideDown(300);
    })
    $('header').mouseleave(function(){
        $('.topset > .gnb').find('.lnb').stop().slideUp(300);
        $('.lnb_bg').stop().slideUp(300);
    })
        
        var lnbBgH = $('.lnb_bg').height();
        if(lnbBgH == max){
            $('.topset > .gnb').show();
        }
    
    
    $('.sidemenu').html($('.gnb').clone());

    $('#burger_menu').click(function(){
        $('.sidemenu, #burger_menu, body').toggleClass('on');
    })

    $('.sidemenu > .gnb > li').click(function(){
        // $('.sidemenu .lnb').slideUp();
        $(this).find('.lnb').slideToggle()
        $(this).siblings().slideToggle();
        $(this).toggleClass('on');
    })

    // 말줄입표
    $('#section2 li h3').each(function(){
        var maxText = 30;
        var textLength = $(this).text().length;

        if(textLength >= maxText){
            var sec2Text = $(this).text().substr(0,maxText);
            $(this).text(sec2Text+"...")
        }
    })
    
    // window scroll
    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        var visH = $('#visual_main').height();
        var winH = $(window).height();
        var sec3Top = $('#section3').offset().top;

        if(scrT >= visH-(winH/2)){
            $('#section1').addClass('on')
        } else {
            $('#section1').removeClass('on')
        }

        if(scrT >= visH-(visH/6)){
            $('#section2').addClass('on')
        } else {
            $('#section2').removeClass('on')
        }

        if(scrT >= sec3Top-(winH/2)){
            $('#section3').addClass('on')
        } else {
            $('#section3').removeClass('on')
        }
    })

   

    // 마우스 드래그 할 때 움직이기 ------------------------------
    // var merong = true;

    // $('.map_info').mousedown(function(){
    //     merong = true;
    // })

    // $('.map_info').mouseup(function(){
    //     merong = false;
    // })

    // $('.map_box_km').mousemove(function(e){
    //     var mouseX = e.pageX
    //     var mouseY = e.pageY
        
    //     if(mouseY >= 3055 && mouseY < 3655){
    //         if(merong == true){
    //             var mapBoxkm = $('.map_box_km').offset().top;
    //             $('.map_info').css({marginLeft:mouseX, marginTop:mouseY-mapBoxkm, left:0, top:0, opacity:0.8})
    //         } else {
    //             $('.map_info').css({opacity:1})
    //         }
    //     } else if (mouseY < 3055) {
    //         merong = false;
    //     } else {
    //         merong = false;
    //     }
    // })

    $( ".map_info" ).draggable({
        containment : 'parent'
    });
        
})