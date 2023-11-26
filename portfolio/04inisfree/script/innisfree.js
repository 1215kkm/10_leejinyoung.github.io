$(document).ready(function(){

    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        var hTop = $('.header_top').height();
        var hMiddle = $('.header_middle').height();

        if(scrT >= hTop + hMiddle){
            $('.header_bottom').css({position:'fixed', height: '58px', top:0, border:0})
            $('.header_middle h1').addClass('on')
        } else {
            $('.header_bottom').css({position:'', height: '', top:'', border:''})
            $('.header_middle h1').removeClass('on')
        }
    })

    $('.gnb li.product').mouseenter(function(){
        $('.gnb').addClass('on');
    }).mouseleave(function(){
        $('.gnb').removeClass('on');
    })

    $('.lnb li').mouseenter(function(){
        $(this).find('.lnb2').addClass('on');
    }).mouseleave(function(){
        $(this).find('.lnb2').removeClass('on');
    })

    $('.img_list li').click(function(){
        var int = $(this).index();
        var tbIndex = $('#visual_main .center_box > div').index();
        var bgUrl = ['images/main1.jpg', 'images/main2.jpg','images/main3.jpg','images/main4.jpg'];
        console.log(bgUrl[int])
        
        $('#visual_main').css({background: 'url('+bgUrl[int]+')'});
        // $(this).addClass('bd').siblings().removeClass('bd');
        $('#visual_main .center_box > div').eq(int).addClass('active').siblings().removeClass('active');
    })
    // $('.img_list li').click(function(){
    //     // $('.img_list li').removeClass('bd')
    //     $(this).css({border:"2px solid #000"});
    // })


     
 

    // var k = ''

        // k += 5
        // k += 2
        // k += '가'
        // k += '나'
        // k += '다'
        
        // alert(k)

        // var today = new Date;
        // var year = today.getFullYear();
        // var month = today.getMonth() + 1;
        // var date = today.getDate();
        // var day = today.getDay();

        // var week = ['일', '월', '화', '수', '목', '금', '토']

        // console.log(year+'년'+month+'월'+date+'일'+week[day]+'요일')


    // 텍스트 입력 효과
    // new TypeIt(".text_box strong", {
    //     speed:100,
    //     startDelay:1000
    // })
    // .move(-3, {delay:500})
    // .type(' 씨드', {delay:500})
    // .move(3, {delay:500})
    // .go()


    

    
})