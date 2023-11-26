$(document).ready(function(){
    
    $('.gnb li').mouseover(function(){
        $(this).find('.lnb').show();
    });
    $('.gnb li').mouseout(function(){
        $('.lnb').hide();
    });

    $(window).scroll(function(){
        var scrT = $(this).scrollTop();
        var winH = $(window).height();
        var winW = $(window).width();
        var docH = $(document).height();
        var val1 = scrT/500;

        $('#visual iframe').css({opacity:1-(val1)});
        $('.text_box').css({marginTop:scrT/3});
        $('#visual .overlay').css({opacity:val1});


        if(scrT >= winH){
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }

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

        subParallax();
    });

    subParallax();

    function subParallax(){
        if(scrT >= 300){
            $('.right_text').addClass('active');
            $('.left_img').addClass('active');
        } else {
            $('.right_text').removeClass('active');
            $('.left_img').removeClass('active');
        }
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
    });
    
    function rollingImg(){
        rollingIndex++;
        if(rollingIndex == 4){
            rollingIndex = 0;
        }
        listSrc = $('.list_img li').eq(rollingIndex).find('img').attr('src');
        listImgTitle = $('.list_img li').eq(rollingIndex).find('h3').text();
        rolling();
    }
    
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


    $('.sec03_content table td.num').each(function(){
        var sec3TrIndex = $('.sec03_content table tr').index()+1;
        var sec3Tr = sec3TrIndex.toString(); //문자로 변환
        var numLength = sec3Tr.length; //글자의 개수
        
        if(numLength <= 2){
            $('.sec03_content table tr').find('td.num').text('0'+sec3TrIndex);
        } else {
            $('.sec03_content table tr').find('td.num').text(sec3TrIndex);
        }
    })

    $('.sec03_content ul li h3').each(function(){
        var nameText = $(this).text();
        var nameLength = nameText.length;

        $(this).text(nameText.substr(0,nameLength-1)+'*')
    })

    // 1) 
    // $('.floating_menu li').eq(0).click(function(){
    //     $('html').animate({scrollTop:1041})
    // })
    // $('.floating_menu li').eq(1).click(function(){
    //     $('html').animate({scrollTop:1850})
    // })
    // $('.floating_menu li').eq(2).click(function(){
    //     $('html').animate({scrollTop:2280})
    // })
    // $('.floating_menu li').eq(3).click(function(){
    //     $('html').animate({scrollTop:0})
    // })

    // 2) 요소의 위치를 찾아서 적용하기
    // $('.floating_menu li').eq(0).click(function(){
    //     var sec1Top = $('#section01').offset().top;
    //     $('html').animate({scrollTop:sec1Top})
    // })
    // $('.floating_menu li').eq(1).click(function(){
    //     var sec1Top = $('#section02').offset().top;
    //     $('html').animate({scrollTop:sec1Top})
    // })
    // $('.floating_menu li').eq(2).click(function(){
    //     var sec1Top = $('#section03').offset().top;
    //     $('html').animate({scrollTop:sec1Top})
    // })
    // $('.floating_menu li').eq(3).click(function(){
    //     $('html').animate({scrollTop:0})
    // })

    // 3) 클릭한 li와 같은 index번호를 가지고 있는 section 위치 찾기
    // $('.floating_menu li').click(function(){
    //     var floatIndex = $(this).index();
    //     var secTop = $('#section_wrap section').eq(floatIndex).offset().top;
    //     $('html').animate({scrollTop:secTop});
    // })

    // 4) 클릭한 li의 속성값 등 찾기
    $('.floating_menu li a').click(function(){
        var liDate = $(this).attr('href');
        var secTop = $(liDate).offset().top;
        $('html').animate({scrollTop:secTop});
        return false
    });


    var snbLiW, snbLiLeft
    
    function subLine(re){
        snbLiW = $('.snb li.active').width();
        snbLiLeft = $('.snb li.active').offset().left;
        $('.underline').stop().animate({width:snbLiW, left:snbLiLeft}, re);
    }

    $('.snb li').mouseover(function(){
        snbLiW = $(this).width();
        snbLiLeft = $(this).offset().left;
        $('.underline').stop().animate({width:snbLiW, left:snbLiLeft}, 200);
    });


    subLine();

    $('.snb li').mouseout(function(){
        subLine();
    });

    $(window).resize(function(){
        snbLine(0);
    });
}) 


