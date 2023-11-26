// header
$('.lang_select').click(function(){
    $('.lang ul').toggle();
})
$('.lang ul li').click(function(){
    var lang = $(this).text();
    $('.lang_select i').text(lang);  
    $('.lang ul').hide();  
})
$('.lang ul').mouseleave(function(){
    $(this).hide();  
})

$('.gnb').mouseenter(function(){
    $('.lnb, .lnb_bg').show();
})
$('.lnb_bg').mouseleave(function(){
    $(this).hide();
    $('.lnb').hide();
})

$('h1, .lang, .topmenu').mouseenter(function(){
    $('.lnb').hide();
    $('.lnb_bg').hide();
})

$('.lnb li').mouseover(function(){
    $(this).children('.lnb2').show();
})
$('.lnb li').mouseout(function(){
    $(this).children('.lnb2').hide();
})

// section_modal
$('body').append('<div class="search_modal"></div>')

$('.btn_search').click(function(){
    $('#search_wrap').slideToggle(200);
    $('#search_wrap input').focus().val('');
    $('.search_modal').fadeToggle();
})
$('.search_modal').click(function(){
    $('#search_wrap').slideUp(200);
    $(this).fadeOut();
})


// section01
$('#section01 .tit_box li').click(function(){
    var liDataTit = $(this).attr('data-sec01tit');
    $('.article ul').hide();
    $('.article ul.'+liDataTit).show();

    $('#section01 .tit_box li').removeClass('on');
    $(this).addClass('on');

    return false;
})

$('#section01 .article ul li').mouseenter(function(){
    $(this).addClass('on');
}).mouseleave(function(){
    $(this).removeClass('on');
})


// section03
$('#section03 ul li').mouseenter(function(){
    $(this).addClass('on');
}).mouseleave(function(){
    $(this).removeClass('on');
})


// footer
$('.famliy_site, .famliy_site li, footer').click(function(){
    $('.fs_list').hide();
})

$('.famliy_site li').click(function(){
    $(this).children('.fs_list').show();
    
    return false;
})

$('.famliy01 .fs_list a').click(function(){
    var fsSelect = $(this).text();
    $('.famliy01 > a').text(fsSelect);
    $('.fs_list').hide();
})

$('.famliy02 .fs_list a').click(function(){
    var fsSelect = $(this).text();
    $('.famliy02 > a').text(fsSelect);
    $('.fs_list').hide();
})

$('.famliy03 .fs_list a').click(function(){
    var fsSelect = $(this).text();
    $('.famliy03 > a').text(fsSelect);
    $('.fs_list').hide();
})

$('.famliy04 .fs_list a').click(function(){
    var fsSelect = $(this).text();
    $('.famliy04 > a').text(fsSelect);
    $('.fs_list').hide();
})


// mobile
var gnbContent = $('.gnb').html();
$('.m_gnb').html(gnbContent);


$('.article > ul > li > p').each(function(){
    var textMaxLength = 100;
    var textLength = $(this).text().length;
    if(textLength >= textMaxLength){
        var pContent = ($(this).text().substr(0, textMaxLength));
        $(this).text(pContent+'...');
    }
})


$('.m_gnb > li > a').click(function(){
    $('.lnb2').hide();
    $(this).siblings('.lnb').slideToggle().parents().siblings().find('.lnb').slideUp();
})
$('.m_gnb .lnb > li > a').click(function(){
    $(this).siblings('.lnb2').slideToggle().parents().siblings().find('.lnb2').slideUp();
})
$('.m_gnb > li > a').each(function(){
    $(this).attr({href:"#"})
})


$('.hambuger').click(function(){
    $('.m_modal').fadeIn(400);
    $('.sidemenu').addClass('on');
})


$('.m_btn_close').click(function(){
    $('.m_modal').fadeOut(400);
    $('.sidemenu').removeClass('on');
})

