// WEBSITE CODE VERSION
let codeVer = '240306 0.0.0';
console.log(codeVer);
$('div.codever').text(codeVer);

// NAV CONFIG
$('.nav-link').on('mouseenter', function() {
$(this).siblings('.nav-link').addClass('nothover');
});
$('.nav-link').on('mouseleave', function() {
$(this).siblings('.nav-link').removeClass('nothover');
});

let url = window.location.href;

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

// CONTACT FORM IDER
$('.connect-section').find("input[name='formLocation']").val('Section');
$('.connect-pop').find("input[name='formLocation']").val('Popup');

//$('.connect-section input[name="email"], .connect-pop input[name="email"]').on('input', function() {
//$('.spam-tracker input[name="email"]').val($(this).val());
//});

$('[form-trigger]').on('click', function() {
locator();
//current url
$("input[name='current_url']").val(url);
//get cookies into form 
// ----------------------------- C H A N G E
if (!(Cookies.get('utm') == null) || !(Cookies.get('utm') == undefined)) { // UTM NOT EMPTY
$("input[name='utm_id']").val(JSON.parse(Cookies.get('utm')).id);
$("input[name='utm_source']").val(JSON.parse(Cookies.get('utm')).source);
$("input[name='utm_medium']").val(JSON.parse(Cookies.get('utm')).medium);
$("input[name='utm_campaign']").val(JSON.parse(Cookies.get('utm')).campaign);
$("input[name='utm_term']").val(JSON.parse(Cookies.get('utm')).term);
} else { // ------------------------------------------------------ UTM IS EMPTY
$("input[name='utm_id']").val('Direct / ⠀ / ⠀');
$("input[name='utm_source']").val('Direct'); 
$("input[name='utm_medium']").val('⠀'); 
$("input[name='utm_campaign']").val('⠀'); 
$("input[name='utm_term']").val('⠀'); 
}
setTimeout(() => {
$(this).siblings('.button-contact').trigger('click');
}, 869);
});

// locator setup
function locator() {
if (navigator.geolocation) {
fetch('https://ipapi.co/json')
.then((response) => response.json())
.then((data) => {
$("input[name='country']").val(data.country_code_iso3);
$("input[name='state']").val(data.region);
$("input[name='city']").val(data.city);
$("input[name='ip']").val(data.ip);
});
} else { $("input[name='countryISO']").val('error'); }
}
//
if (url.includes('#contact-form')) {
    $('.connect-pop').addClass('active');
    $('.body').addClass('no-scroll');
}

//
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
//

$('[agent]').on('click', function() {
if (!$('label[agent] .w-checkbox-input').is('.w--redirected-checked')) {
$("input[agent-required]").attr('required', '1');
} else {
$("input[agent-required]").removeAttr('required');
}
});

// Blocking some Attempt spam
if (url.includes('?agenbt') || url.includes('?First') || url.includes('?Last') || url.includes('?Email') || url.includes('?Phone') || url.includes('?country') || url.includes('?Message') ||
url.includes('?preference') || url.includes('?countryID') || url.includes('?lang') || url.includes('?timestamper') ||
url.includes('?form') || url.includes('?utm_url') || url.includes('?current_url')) {
window.open("https://www.shomabay.com/", "_top");
function cleanse() {
Cookies.remove('source');
Cookies.remove('medium');
Cookies.remove('campaign');
Cookies.remove('term');
}
const cleanserTime = setInterval(cleanse, 5000);
}

// URL Language
if (url.includes('/es')) {
$("input[name='lang']").val('ES');
} else if (url.includes('/pt')) {
$("input[name='lang']").val('PT');
} else { $("input[name='lang']").val('EN'); }

// What page is form being submited
if (url.includes('/residences') || url.includes('/residencias')) {
$("input[name='formPage']").val('Residences');
} else if (url.includes('/floorplans') || url.includes('/planos') || url.includes('/plantas')) {
$("input[name='formPage']").val('Floorplans');
} else if (url.includes('/amenities') || url.includes('/amenidades') || url.includes('/comodidades')) {
$("input[name='formPage']").val('Amenities');
} else if (url.includes('/location') || url.includes('/localizacion') || url.includes('/localizacao')) {
$("input[name='formPage']").val('Location');
} else if (url.includes('/team') || url.includes('/equipo') || url.includes('/equipe')) {
$("input[name='formPage']").val('Team');
} else if (url.includes('/blog')) {
$("input[name='formPage']").val('Blog');
} else if (url.includes('/press') || url.includes('/prensa')) {
$("input[name='formPage']").val('Press');
} else if (url.includes('/customer-registration')) {
$("input[name='formPage']").val('Customer Registration');
} else if (url.includes('/sales-registration')) {
$("input[name='formPage']").val('Sales Registration');
} else { $("input[name='formPage']").val('Home'); }

// HIDDEN stuff
$('.hidden-form-fields:not(.show) input').attr('type', 'hidden');
$('.hidden-form-fields input').attr('readonly', 'readonly');

// === UTM TRACKER === //
$.urlParam = function(name) {
var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
if (results == null) { return null; } else { return results[1] || 0; }
}
// var inTwoMins = new Date(new Date().getTime() + 2 * 60 * 1000);
//cookie setter
if (!($.urlParam('utm_source') == null) && !($.urlParam('utm_source') == "") && !($.urlParam('utm_source') == undefined) ) {
var source = $.urlParam('utm_source').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
// source, exist
if (!($.urlParam('utm_medium') == null) && !($.urlParam('utm_medium') == "")  && !($.urlParam('utm_medium') == undefined) ) {
var medium = $.urlParam('utm_medium').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
} else { var medium = "⠀"}
if (!($.urlParam('utm_campaign') == null) && !($.urlParam('utm_campaign') == "") && !($.urlParam('utm_campaign') == undefined)  ) {
var campaign = $.urlParam('utm_campaign').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
} else {var campaign = "⠀"}
if (!($.urlParam('utm_term') == null) && !($.urlParam('utm_term') == "") && !($.urlParam('utm_term') == undefined)  ) {
var term = $.urlParam('utm_term').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
} else {var term = "⠀"}
var utm_id = source+' / '+medium+' / '+campaign+' / '+term;
var utm = {
    "source": source,
    "medium": medium,
    "campaign": campaign,
    "term": term,
    "id": utm_id
}
Cookies.set("utm", JSON.stringify(utm) , {expires:30})
}

//

//==== PHONE NUMBER FILTER ====//

//---- GOOGLE
if (Cookies.get('source') == 'google') {
    if (Cookies.get('medium') == 'paid') {
        //- Paid
        $('[phoneNum]').attr('href', 'tel:+17863860647');
        $('[phoneTx]').text('786-386-0647');
    } else {
        //- Organic
        $('[phoneNum]').attr('href', 'tel:+17868825350');
        $('[phoneTx]').text('786-882-5350');
        //-------------
    }
} else if ($("input[name='utm_source']").is("[value='facebook']")) {
    //---- FACEBOOK
    if ($("input[name='utm_medium']").is("[value='socialmedia']")) {
        //---- FACEBOOK SOCIALMEDIA
        $('[phoneNum]').attr('href', 'tel:+17868826213');
        $('[phoneTx]').text('786-882-6213');
        //----- FACEBOOK AD
    } else {
        $('[phoneNum]').attr('href', 'tel:+17868768185');
        $('[phoneTx]').text('786-876-8185');
    }
    //-------------
} else if ($("input[name='utm_source']").is("[value='eblast']")) {
    //---- EBLAST
    $('[phoneNum]').attr('href', 'tel:+17868861787');
    $('[phoneTx]').text('786-886-1787');
    //-------------
    //---- SOCIAL MEDIA ----//
} else if ($("input[name='utm_source']").is("[value='fence']")) {
    //---- EBLAST
    $('[phoneNum]').attr('href', 'tel:+7868823098');
    $('[phoneTx]').text('786-882-3098');
    //-------------
    //---- SOCIAL MEDIA ----//
} else if ($("input[name='utm_medium']").is("[value='socialmedia']")) {
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

//