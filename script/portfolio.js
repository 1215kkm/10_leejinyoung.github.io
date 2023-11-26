$(document).ready(function(){
    $(document).ready(function(){
        $('#fullpage').fullpage({  //대상선택
            anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],

            // autoScrolling:true,
            // scrollHorizontally: true,
            
            navigation:true, //네비쓸건지
            navigationPosition:'right',  //어디에위치

            afterLoad : function(anchorLink, index){
                console.log(`현재섹션 번호는 ${index}`)
                $('section').eq(index-1).addClass('on').siblings().removeClass('on');


                if(index-1 == 0){
                    $('nav').fadeOut(200);
                    clearTimeout(sec3slideGo)
                }
                if(index-1 == 1){
                    clearTimeout(sec3slideGo)
                    $('nav').fadeIn(200);
                    
                    // new TypeIt("#sec2 .about strong", {
                    //     speed:50,
                    //     startDelay:1000
                    // })
                    // .go()
                }
                if(index-1 == 2){
                    clearTimeout(sec3slideGo)
                    $('nav').fadeIn(200).find('a').css({color:"#00696D"});
                    sec3slideGo = setTimeout(sec3Slide, 3000);
                } else {
                    $('nav').find('a').css({color:""});
                }

                if(index-1 == 3){
                    $('nav').fadeIn(200);
                    clearTimeout(sec3slideGo)
                }
                if(index-1 == 4){
                    $('nav').fadeIn(200)
                    $('#sec5').addClass('active')
                    clearTimeout(sec3slideGo)
                }
            },

            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
                console.log('현재 슬라이드 번호는' + slideIndex);
                
            }

        });
    })


    // section1 ----------
    // 메인 클릭 버튼
    $('#sec1 .click_btn').click(function(){
        
        $(this).hide()
        .parents('.circle').animate({width:'1920px', height:'1920px'}, 600)
        .delay(200).animate({left:'480px'}, 800);
        $('.circle_text').show()
        .delay(1000).animate({marginLeft:'200px'}, 600)
    })
    
    // 마우스 휠 애니메이션
    autoWheel = setInterval(wheel, 1)
    
    function wheel(){
        $('#sec1 .wheel span').animate({marginTop:"40px"}, 1000)    
        $('#sec1 .wheel span').delay(300).animate({marginTop:"20px"}, 200)    
    }
    

    // section2 ----------
    // 텍스트 입력

    

    // section3 ----------
    // 웹사이트 이미지 마우스 호버
    $('#sec3 .site_box img').mouseover(function(){
        var webImgH = $(this).height();
        var boxH = $('#sec3 .site_box').height();
        $(this).css({marginTop:-webImgH+boxH});
    }).mouseout(function(){
        $(this).css({marginTop:''});
    })
    

    // section4 ----------
    // 탭버튼
    $('.tab li a').each(function(){
        var tabList = $('.tab li a').attr('alt');
    })
    
    $('#sec4 .tab li').click(function(){
        var liDataTit = $(this).attr('data-tab');
        $('.article ul').hide();
        $('.article ul.'+liDataTit).show();
        
        $('#sec4 .tab li').removeClass('on');
        $(this).addClass('on');
        
        return false;
    })

    $('#sec4 .article li').mouseenter(function(){
        $(this).css({opacity:'1'}).siblings().css({opacity:'0.5'})
    })
    $('#sec4 .tab li').mouseenter(function(){
        $('#sec4 .article li').css({opacity:'1'})
    })
    $('#sec4 .box_wrap').mouseleave(function(){
        $('#sec4 .article li').css({opacity:'1'});
    })
    
    // 목업 뷰
    $('#sec4 .article a').click(function(){
        var imgSrc = $(this).find('img').attr('src')
        console.log(imgSrc)

        $('.view_box').find('img').attr({src:imgSrc});
        // $('.view_box').addClass('on');
        $('.view_box').css({opacity:'1', zIndex:'50'});
        $('.view_box img').slideDown();
    })
    $('.view_box, .view_box i').click(function(){
        // $('.view_box').removeClass('on');
        $('.view_box').css({opacity:'0', zIndex:'-1'});
        $('.view_box img').slideUp();
    })


    // section5 ----------
    // $('#sec5').mouseenter(function(){
    //     $(this).addClass('active')
    // })
    

    //섹션3 
        let int = 0;
        let slideLength = $('#sec3 .circle > div').length;
        let slideTime = 3000;
        let sec3slideGo;
        // let bgUrl = ['../images/ddd.jpg', '../images/ddd2.jpg','../images/ddd3.jpg']
        let bgUrl = ['#CBDED9', '#FFE8C7', '#D1DCE7', '#CEE2CE', '#e9c7c7'];
        let navUrl = ['#00696D', '#FE8D4B', '#3B53B1', '#024137', '#cf292d'];

        sec3slideGo = setTimeout(sec3Slide, slideTime);

        function sec3Slide(){
            int++;
            if(int >= slideLength){
                int = 0;
            }
            $('#sec3 .circle .text_box').eq(int).addClass('on').siblings().removeClass('on');
            $('#sec3 .site_box_wrap .site_box').eq(int).addClass('on').siblings().removeClass('on');
            $('#sec3 .list > li').eq(int).addClass('on').siblings().removeClass('on');

            $('#sec3').css({background:bgUrl[int]});
            $('nav li a').css({color:navUrl[int]});

            // if(int == 0){
            //     $('#sec3').css({background:'#CBDED9 url('+bgUrl[0]+')'})
            // };
            // if(int == 1){
            //     $('#sec3').css({background:'#CBDED9  url('+bgUrl[1]+')'})
            // };
            // if(int == 2){
            //     $('#sec3').css({background:'#CBDED9  url('+bgUrl[2]+')'})
            // };
            // if(int == 3){
            //     $('#sec3').css({background:'#CBDED9  url('+bgUrl[3]+')'})
            // };
            

            sec3slideGo = setTimeout(sec3Slide, slideTime);
        };

        $('#sec3 ul.list li').mouseenter(function(){
            clearTimeout(sec3slideGo)
        }).click(function(){
            int = $(this).index()-1;
            sec3slideGo = setTimeout(sec3Slide, 0);
        }).mouseleave(function(){
            clearTimeout(sec3slideGo)
            sec3slideGo = setTimeout(sec3Slide, slideTime);
        })

        $('#sec3 .site_box_wrap, .text_box > a').mouseover(function(){
            clearTimeout(sec3slideGo)
        }).mouseout(function(){
            clearTimeout(sec3slideGo)
            sec3slideGo = setTimeout(sec3Slide, slideTime);
        });
    
})