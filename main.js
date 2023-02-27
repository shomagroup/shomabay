// NAV CONFIG
$('.nav-link').on('mouseenter', function() {
    $(this).siblings('.nav-link').addClass('nothover');
    $('nav-overlay').addClass('active');
});
$('.nav-link').on('mouseleave', function() {
    $(this).siblings('.nav-link').removeClass('nothover');
    $('nav-overlay').removeClass('active');

});

// SECTION 1
$('[sect-1-hover]').on('mouseenter mouseleave', function() {
    $('.sect-1-card-1').toggleClass('swaphover');
});