$(document).ready(function(){
  
    $('.depth1').mouseenter(function(){
        $(this).find('.depth2').slideDown(500);
        $(this).addClass('on') 
    }).mouseleave(function(){
        $(this).find('.depth2').hide();
        $(this).removeClass('on')
    })



    /////////////////////////
});