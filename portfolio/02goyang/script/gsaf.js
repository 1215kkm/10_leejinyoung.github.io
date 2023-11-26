$(document).ready(function(){
    
    $('.gnb li').mouseover(function(){
        $(this).find('.lnb').show();
    });
    $('.gnb li').mouseout(function(){
        $('.lnb').hide();
    });


    var scrT = $(this).scrollTop();

    $(window).scroll(function(){
        scrT = $(this).scrollTop();
        var winH = $(window).height();
        var winW = $(window).width();
        var docH = $(document).height();
        var val1 = scrT/800;

        $('#visual iframe').css({opacity:1-(val1)});
        $('.text_box').css({marginTop:scrT/3});
        $('#visual .overlay').css({opacity:val1});


        if(scrT >= winH){
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        };

        var scrollVal = winW * scrT / (docH-winH)


        if($('#section_wrap').length > 0){
            var scrT = $(this).scrollTop();
            var sec1Top = $('#section01').offset().top-200;
            var sec2Top = $('#section02').offset().top-200;
            var sec3Top = $('#section03').offset().top-200;
            if(scrT < sec1Top){
                $('.floating_menu li').css({opacity:'100%'})
            }
            if(scrT >= sec1Top){
                $('.floating_menu li').eq(0).css({background:'#759575', opacity:'100%'})
                .siblings().css({opacity:'30%'})
            }
            if(scrT >= sec2Top){
                $('.floating_menu li').eq(1).css({background:'#244683', opacity:'100%'})
                .siblings().css({opacity:'30%'})  
            }
            if(scrT >= sec3Top){
                $('.floating_menu li').eq(2).css({background:'#fe8c49', opacity:'100%'})
                .siblings().css({opacity:'30%'})
            }
        };

        $('.pagebar').css({width:scrollVal});

        subParallax();  //스크롤 휠 돌릴때마다
    })

    subParallax();  //처음 한번 실행

    function subParallax(){
        scrT = $(this).scrollTop();
        if(scrT >= 300){
            $('.right_text').addClass('active');
            $('.left_img').addClass('active');
        } else {
            $('.right_text').removeClass('active');
            $('.left_img').removeClass('active');
        };
    }
    

    var titleText = $('.list_img li').eq(0).text();
    $('.big_img figcaption').text(titleText)

    var listSrc;
    var imgAlt;
    var listImgTitle;
    var rollingIndex = 0;

    $('.list_img li').mouseenter(function(){
        clearInterval(autoRollingImg);

        rollingIndex = $(this).index();
        listSrc = $(this).find('img').attr('src')
        imgAlt = $(this).find('img').attr('alt')
        listImgTitle = $(this).find('h3').text();
        
        rolling();
    })
    
    function rollingImg(){
        rollingIndex++;
        if(rollingIndex == 4){
            rollingIndex = 0;
        }
        listSrc = $('.list_img li').eq(rollingIndex).find('img').attr('src');
        listImgTitle = $('.list_img li').eq(rollingIndex).find('h3').text();
        rolling();
    }
    
    $('.list_img li').eq(rollingIndex).addClass('bd').siblings().removeClass('bd');

    function rolling(){        
        $('.big_img img').attr('src', listSrc);
        $('.big_img img').attr('alt', imgAlt);
        $('.big_img figcaption').text(listImgTitle);
        $('.list_img li').eq(rollingIndex).addClass('bd').siblings().removeClass('bd');
        
        $('.big_img').hide().fadeIn();
    }
    
    var autoRollingImg = setInterval(rollingImg, 3000);
    
    $('.list_img').mouseleave(function(){
        autoRollingImg = setInterval(rollingImg, 3000);
    })


    // $('.sec03_content table td.num').each(function(){
    //     var sec3TrIndex = $('.sec03_content table tr').index()+1;
    //     var sec3Tr = sec3TrIndex.toString(); //문자로 변환
    //     var numLength = sec3Tr.length; //글자의 개수
    //     if(numLength <= 2){
    //         $(this).text('0'+sec3TrIndex);
    //     } else {
    //         $(this).text(sec3TrIndex);
    //     };
    // })

    $('.sec03_content ul li h3').each(function(){
        var nameText = $(this).text();
        var nameLength = nameText.length;

        $(this).text(nameText.substr(0,nameLength-1)+'*')
    })

    $('.floating_menu li a').click(function(){
        var liDate = $(this).attr('href');
        var secTop = $(liDate).offset().top;
        $('html').animate({scrollTop:secTop});
        return false
    })
    

    
    
    // snb에 현재페이지 표시
    /* snb li안에 있는 a태그들의 href값을 각각 구해서
    현재페이지 url 안에 href값이 포함되어있는지 확인해서
    포함되어있는 a가 있으면 a의 부모 li한테 active를 추가 */
    
    var pathUrl = window.location.href; //현재페이지 주소(도메인)

    $('.lnb li a').each(function(){
        var lnbHref = $(this).attr('href');
        var lnbLi = $(this).parents('.lnb').html();
        var lnb1depth = $(this).parents('.lnb').siblings('a').text();
        console.log(lnb1depth)
        if(pathUrl.indexOf(lnbHref) > -1){
            if(pathUrl.indexOf('#') > -1){
                return
            }
            $('.snb').html(lnbLi);
            
            $('.lnb li').removeClass('active');
            $(this).parent().addClass('active');
            
            $('#section_sub h2').text(lnb1depth)
            .append('<span></span><span></span><span></span><span></span>');
        }
    })

    var snb1LiW = $('.snb li:nth-child(1)').width();
    var snb2LiW = $('.snb li:nth-child(3)').width();
    var snb1LiLeft = $('.snb li:nth-child(1)').offset().left;
    var snb2LiLeft = $('.snb li:nth-child(3)').offset().left;
    $('.sb1').css({width:snb1LiW, left:snb1LiLeft});
    $('.sb2').css({width:snb2LiW, left:snb2LiLeft});
    $('.snb li').mouseover(function(){
        var snbLiW = $(this).width();
        var snbLiLeft = $(this).offset().left;
        $('.underline').stop().animate({width:snbLiW, left:snbLiLeft}, 200);
    }).mouseout(function(){
        $('.sb1').stop().animate({width:snb1LiW, left:snb1LiLeft}, 200);
        $('.sb2').stop().animate({width:snb2LiW, left:snb2LiLeft}, 200);
    })
    
    function subLine(re){
        var snbLiW = $('.snb li.active').width();
        var snbLiLeft = $('.snb li.active').offset().left;
        $('.underline').stop().animate({width:snbLiW, left:snbLiLeft}, re);
    }

    subLine();

    $('.snb li').mouseout(function(){
        subLine();
    });

    $(window).resize(function(){
        subLine(0);
    })
}) 




