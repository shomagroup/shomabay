// NAV CONFIG
$('.nav-link').on('mouseenter', function() {
    $(this).siblings('.nav-link').addClass('nothover');
});
$('.nav-link').on('mouseleave', function() {
    $(this).siblings('.nav-link').removeClass('nothover');
});

// MOBILE NAV POPUP
$('.m-button').on('click', function() {
    if ($(this).is('.active')) {
        $(this).removeClass('active');
        $('.nav-container').removeClass('active');
        $('.body').removeClass('no-scroll');
    } else {
        $(this).addClass('active');
        $('.nav-container').addClass('active');
        $('.body').addClass('no-scroll');
    }
});

// Floorplan / Residences 
$('[sect-1-hover]').on('mouseenter mouseleave', function() {
    $(this).find('.sect-1-card-1, .sect-1-card-2').toggleClass('swaphover');
});

// CONTACT FORM
$('[form-trigger]').on('click', function() {
    $('.button-contact').trigger('click');
});

let url = window.location.href;
if ($('input#form-id').closest('section').is('.connect-section')) {
    $('input#form-ider').val('connect-section');
} else { $('input#form-ider').val('connect-pop'); }

if (url.includes('/es')) {
    $('input#form-id').val('es-landing');
} else if (url.includes('/amenities')) {
    $('input#form-id').val('amenities');
} else if (url.includes('/residences')) {
    $('input#form-id').val('residences');
} else if (url.includes('/floorplans')) {
    $('input#form-id').val('floorplans');
} else { $('input#form-id').val('en-landing'); }


// CONTACTPOP
$('[contact-pop]').on('click', function() {
    $('.connect-pop').addClass('active');
    $('.body').addClass('no-scroll');
});

$('[closepop]').on('click', function() {
    $(this).closest('[popup]').removeClass('active');
    $('.body').removeClass('no-scroll');
});


// TIMESTAMPER
var DateTime = luxon.DateTime;

function time() {
    const timestamper = DateTime.now().setZone('America/New_York').toFormat("ccc LLL dd (HH:mm) yyyy");
    $("input[timestamper]").val(timestamper);
}
const timer = setInterval(time, 1000);