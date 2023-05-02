// WEBSITE CODE VERSION
console.log('ver 230502 0.5')

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


// CONTACTPOP
$('[contact-pop]').on('click', function() {
    $('.connect-pop').addClass('active');
    $('.body').addClass('no-scroll');
});

$('[closepop]').on('click', function() {
    $(this).closest('.connect-pop').removeClass('active');
    $('.body').removeClass('no-scroll');
});

// CONTACT FORM
$('.connect-pop').find('input#form-ider').val('popup');
$('.connect-section').find('input#form-ider').val('section');
$('[form-trigger]').on('click', function() {
    $(this).siblings('.button-contact').trigger('click');
});


$("input[name='preference']").val('No Preference');
$('[preference]').on('click', function() {
    $(this).toggleClass('checked');
    let preference = $('[preference]').filter('.checked').map((k, box) => box.name).toArray().join(', ');
    if ($('.checked[preference]').length === 5) {
        $("input[name='preference']").val('No Preference');
    } else if ($('.checked[preference]').length) {
        $("input[name='preference']").val(preference);
    } else { $("input[name='preference']").val('No Preference'); }
});

$("input[name='agent']").val('false');
$('[agent]').closest('label').on('click', function() {
    $('input[agent]').toggleClass('checked');
    if ($('[agent]').is('.checked')) {
        $("input[name='agent']").val('true');
    } else { $("input[name='agent']").val('false'); }
});

$('[name="country"]').on('click', function() {
    $(this).closest('form').find('[name="countryID"]').val($(this).find('option:selected').index());
});

// HIDDEN stuff
$('.hidden-form-fields:not(.show) input').attr('type', 'hidden');
$('.hidden-form-fields input').attr('readonly', 'readonly');


let url = window.location.href;

if (url.includes('/es')) { $("input[name='lang']").val('ES'); } else { $("input[name='lang']").val('EN'); }
// what page is form being submited

if (url.includes('/residences') || url.includes('/residencias')) {
    $("input[name='form-id']").val('Residences');
} else if (url.includes('/floorplans') || url.includes('/planos')) {
    $("input[name='form-id']").val('Floorplans');
} else if (url.includes('/amenities') || url.includes('/comodidades')) {
    $("input[name='form-id']").val('Amenities');
} else if (url.includes('/es')) {
    $("input[name='form-id']").val('Home');
} else { $("input[name='form-id']").val('Home'); }


// TIMESTAMPER
var DateTime = luxon.DateTime;

function time() {
    const timestamper = DateTime.now().setZone('America/New_York').toFormat("(HH:mm) ccc LLL dd yyyy");
    $("input[timestamper]").val(timestamper);
}
const timer = setInterval(time, 5000);


//==== PHONE NUMBER FILTER ====//

//---- GOOGLE
if ($("input[name='utm_source']").is("[value*='google']")) {
    //- Organic
    if ($('.utm_medium').is("[value*='organic']")) {
        $('[phoneNum]').attr('href', 'tel:+17868825350');
        $('[phoneTx]').text('786-882-5350');
        //-------------
    } else if ($('.utm_medium').is("[value*='paid']")) {
        //- Paid
        $('[phoneNum]').attr('href', 'tel:+17863860647');
        $('[phoneTx]').text('786-386-0647');
        //-------------
    } else {
        $('[phoneNum]').attr('href', 'tel:+17868825350');
        $('[phoneTx]').text('786-882-5350');
        //-------------
    }
} else if ($("input[name='utm_source']").is("[value*='facebook']")) {
    //---- FACEBOOK
    if ($("input[name='utm_medium']").is("[value*='socialmedia']")) {
        //---- FACEBOOK SOCIALMEDIA
        $('[phoneNum]').attr('href', 'tel:+17868826213');
        $('[phoneTx]').text('786-882-6213');
        //----- FACEBOOK AD
    } else {
        $('[phoneNum]').attr('href', 'tel:+17868768185');
        $('[phoneTx]').text('786-876-8185');
    }
    //-------------
} else if ($("input[name='utm_source']").is("[value*='eblast']")) {
    //---- EBLAST
    $('[phoneNum]').attr('href', 'tel:+17868861787');
    $('[phoneTx]').text('786-886-1787');
    //-------------
    //---- SOCIAL MEDIA ----//
} else if ($("input[name='utm_medium']").is("[value*='socialmedia']")) {
    $('[phoneNum]').attr('href', 'tel:+17868826213');
    $('[phoneTx]').text('786-882-6213');
    // } else if ($("input[name='utm_source']").is("[value*='instagram']")) {
    //     //---- INSTAGRAM
    //     $('[phoneNum]').attr('href', 'tel:+17868826213');
    //     //-------------
    // } else if ($("input[name='utm_source']").is("[value*='tiktok']")) {
    //     //---- TIKTOK
    //     $('[phoneNum]').attr('href', 'tel:+17868826213');
    //     //-------------
    // } else if ($("input[name='utm_source']").is("[value*='youtube']")) {
    //     //---- YOUTUBE
    //     $('[phoneNum]').attr('href', 'tel:+17868826213');
    //     //-------------
} else if ($("input[name='utm_source']").is("[value*='printed']")) {
    //---- PRINTED MATERIALS
    $('[phoneNum]').attr('href', 'tel:+17868337421');
    $('[phoneTx]').text('786-833-7421');
    //-------------
} else if ($("input[name='utm_source']").is("[value*='mailer']")) {
    //---- DIRECT MAILER
    $('[phoneNum]').attr('href', 'tel:+17868337421');
    $('[phoneTx]').text('786-833-7421');
    //-------------

} else {
    //---- PROPERTY WEBSITE
    $('[phoneNum]').attr('href', 'tel:+17868825887');
    $('[phoneTx]').text('786-882-5887');
}

// === UTM TRACKER === //
$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
    if (results == null) { return null; } else { return results[1] || 0; }
}
let cleanUrl = url.replace('https://www.shomabay.com/?', '').replace('https://shomabay.webflow.io/?', '');

if (!$.urlParam('utm_source') == null || !$.urlParam('utm_source') == "") {
    var source = $.urlParam('utm_source').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
    Cookies.set('source', source, { expires: 30 });
    Cookies.set('url', cleanUrl, { expires: 30 });
}

if (!$.urlParam('utm_medium') == null || !$.urlParam('utm_medium') == "") {
    var medium = $.urlParam('utm_medium').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
    Cookies.set('medium', medium, { expires: 30 });
}

if (!$.urlParam('utm_campaign') == null || !$.urlParam('utm_campaign') == "") {
    var campaign = $.urlParam('utm_campaign').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
    Cookies.set('campaign', campaign, { expires: 30 });
}

if (!$.urlParam('utm_term') == null || !$.urlParam('utm_term') == "") {
    var term = $.urlParam('utm_term').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
    Cookies.set('term', term, { expires: 30 });
}

$("input[name='current_url']").val(url);
$("input[name='utm_url']").val(Cookies.get('url'));
$("input[name='utm_source']").val(Cookies.get('source'));
$("input[name='utm_medium']").val(Cookies.get('medium'));
$("input[name='utm_campaign']").val(Cookies.get('campaign'));
$("input[name='utm_term']").val(Cookies.get('term'));