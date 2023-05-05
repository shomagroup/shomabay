// OnReady 

const phone = $('a.cta[phoneNum]').attr('href');
if (url.includes('#phonering')) {
    window.open(phone, "_top");
}

// SECTION 4
$('.c33-2').on('mouseenter', function() {
    $('.c33-2').removeClass('hovered');
    $('.c33-2').removeClass('unhovered');
    $(this).addClass('hovered');
    $(this).siblings('.c33-2').addClass('unhovered');
});
$('.c33-2').on('mouseleave', function() {
    $('.c33-2').removeClass('hovered');
    $('.c33-2').removeClass('unhovered');
});