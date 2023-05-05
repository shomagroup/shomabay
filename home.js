// OnReady 

const phone = $('a.cta[phoneNum]').attr('href');
if (url.includes('#phonering')) {
    window.open(phone, "_top");
}


if (url.includes('?sbroker') || url.includes('?First') || url.includes('?Last') || url.includes('?Email') || url.includes('?Phone') || url.includes('?country') || url.includes('?Message') || url.includes('?preference') ||
    url.includes('?lang') || url.includes('?agent') || url.includes('?ratingID') || url.includes('?timestamper') || url.includes('?form') || url.includes('?utm_url') || url.includes('?current_url')) {
    window.open("https://www.shomabay.com/", "_top");
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