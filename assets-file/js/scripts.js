$(document).ready(function() {


    $('.modalLink').each(function() {
        $(this).attr('href', $(this).parent().siblings('.itembox__img').children('img').attr('src'));
    });
    $('.othListImg').each(function() {
        $(this).attr('href', $(this).siblings('img').attr('src'));
    });

    $('.modalLink').fancybox();
    $('.othListImg').fancybox();

    let newWidth = $('#newWidth').attr('class');
    let newRand = $('#newRand').attr('class');
    let newWidthSec = $('#newWidthSec').attr('class');

    if($('.content-asset').css('flex-direction') == 'row'){
        $('.secondColumn').css({'width': newWidth,'order':newRand});
        if($('.secondColumn').css('order') == '1'){
            $('.firstColumn').css({'width': '100%','order':'2'});
        }else{
            $('.firstColumn').css({'width': '100%','order':'1'});
        }
        $('.new-box').css({'flex-wrap':'wrap'});
        $('.new-itembox').css({'width':'100%'});
        if(newRand == '1' || newRand == '3'){
            $('.new-itembox').css({'width':'100%','flex-direction':'row'});
            $('.new-box').css({'flex-direction':'column'});
            $('.itembox__img img').css({'width':newWidthSec,'height':newWidthSec,'align-items':'center'});
        }

    }
    if($('.firstColumn-image').css('flex-direction') == 'row' || $('.firstColumn-image').css('flex-direction') == 'row-reverse'){
        $('.firstColumn-image').css({'align-items':'center'});
        $('.title-site').css({'flex-direction':'column'});
    }
    if($('.bot-info-site__author img').css('display') == 'none'){
        $('.bot-info-site').css({'justify-content':'space-between'});
        $('.bot-info-site__author i').show();
        $('.bot-info-site__author').css({'display':'flex','align-items':'center','gap':'5px'});
    }else{
        $('.bot-info-site').css({'flex-direction':'column','align-items':'center','text-align':'center'});
    }
    if($('.comments-site').css('flex-direction') == 'row'){
        $('.comments-site__item').css({'text-align':'center'});
    }else{
        let newBorder = $('#newBorder').attr('class');
        $('.comments-site__item').css({'width':'100%','flex-direction':'row','align-items':'center','border-bottom':newBorder+ ' solid #eaeaea','padding-bottom':'20px'});
        $('.comments-site__item > div:first-child').css({'text-align':'center'});
    }


    let imHeight = $('.top-image').prop('naturalHeight');
    let imWidth = $('.top-image').prop('naturalWidth');

    if(imHeight == imWidth){
        if(imWidth > 600){
            $('.top-image').css({'width':'50%'});
        }
    }
    if(imHeight > imWidth){
        if(imHeight < 1400 && imHeight > 700){
            $('.top-image').css({'width':'25%'});
        }
        if(imHeight < 700 && imHeight > 500){
            $('.top-image').css({'width':'50%'});
        }
    }
    if(imHeight < imWidth){
        if($('.firstColumn-image').css('flex-direction') == 'row' || $('.firstColumn-image').css('flex-direction') == 'row-reverse'){
            $('.top-image').css({'width':'50%'});
            $('.title-site').css({'width':'50%'});
        }else{
            $('.top-image').css({'width':'100%'});
        }

        if(imWidth < 600){
            $('.top-image').css({'width':'500px'});
        }
    }

    if(imHeight > imWidth){
        if(imHeight < 1400 && imHeight > 700){
            $('.top-image').css({'width':'25%'});
        }
        if(imHeight < 700 && imHeight > 500){
            $('.top-image').css({'width':'50%'});
        }
    }


});
