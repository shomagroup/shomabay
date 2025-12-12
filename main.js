// WEBSITE CODE VERSION
let codeVer = '251212 0.0.2';
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

function trackUTM() {
    // URL parameter parser
    $.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
    return results == null ? null : (results[1] || 0);
    };
    
    if (!Cookies.get("utm")) {
if ($.urlParam('utm_source') && $.urlParam('utm_source') !== "" && $.urlParam('utm_source') !== undefined) {
   	var source = $.urlParam('utm_source').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ').trim();
    var medium = ($.urlParam('utm_medium') && $.urlParam('utm_medium') !== "" && $.urlParam('utm_medium') !== undefined) 
    ? $.urlParam('utm_medium').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ').trim() 
    : "⠀";
    var campaign = ($.urlParam('utm_campaign') && $.urlParam('utm_campaign') !== "" && $.urlParam('utm_campaign') !== undefined) 
    ? $.urlParam('utm_campaign').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ').trim() 
    : "⠀";
    var term = ($.urlParam('utm_term') && $.urlParam('utm_term') !== "" && $.urlParam('utm_term') !== undefined) 
    ? $.urlParam('utm_term').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ').trim() 
    : "⠀";

    if (source === '') {
      return;  // Skip setting the cookie if source is empty after trimming
    }

    var utm_id = source + ' / ' + medium + ' / ' + campaign;
    var utm = {
     "source": source,
     "medium": medium,
     "campaign": campaign,
     "term": term,
     "id": utm_id
     };
// Set cookie for 30 days
     Cookies.set("utm", JSON.stringify(utm), { expires: 30 });
     }
    }


// Return UTM values with error handling
     var utmCookie = JSON.parse(Cookies.get('utm') || '{}');
     if (utmCookie.source == 'google') {
        if (utmCookie.medium == 'cpc' || utmCookie.medium == 'paid') {
            //- Paid
            $('[phoneNum]').attr('href', 'tel:+17863860647');
            $('[phoneTx]').text('786-386-0647');
        } else {
            //- Organic
            $('[phoneNum]').attr('href', 'tel:+17868825350');
            $('[phoneTx]').text('786-882-5350');
            //-------------
        }
    } else if (utmCookie.source == 'facebook') {
        //---- FACEBOOK
        if (utmCookie.medium == 'paid') {
            //----- FACEBOOK AD
            $('[phoneNum]').attr('href', 'tel:+17868768185');
            $('[phoneTx]').text('786-876-8185');
        }
        //-------------
    } else if (utmCookie.source == 'eblast') {
        //---- EBLAST
        $('[phoneNum]').attr('href', 'tel:+17868861787');
        $('[phoneTx]').text('786-886-1787');
        //-------------
        //---- SOCIAL MEDIA ----//
    } else if (utmCookie.source == 'fence') {
        //---- EBLAST
        $('[phoneNum]').attr('href', 'tel:+7868823098');
        $('[phoneTx]').text('786-882-3098');
        //-------------
        //---- SOCIAL MEDIA ----//
    } else if (utmCookie.source == 'socials') {
    
        $('[phoneNum]').attr('href', 'tel:+17868826213');
        $('[phoneTx]').text('786-882-6213');
    
    } else if (utmCookie.source == 'printed materials') {
        if (utmCookie.medium == 'shomabazaar') {
        $('[phoneNum]').attr('href', 'tel:+17869339872');
        $('[phoneTx]').text('786-933-9872');
        }
        else {
        //---- ALL PRINTED MATERIALS
        $('[phoneNum]').attr('href', 'tel:+17868337421');
        $('[phoneTx]').text('786-833-7421');
        }
        //-------------
    } else {
        //---- PROPERTY WEBSITE
        $('[phoneNum]').attr('href', 'tel:+17868825887');
        $('[phoneTx]').text('786-882-5887');
    }
    }
function formtrigger(fauxbutton) {
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
    } else if (url.includes('gclid')) {
        $("input[name='utm_id']").val('Google / Paid / ⠀');
        $("input[name='utm_source']").val('Google'); 
        $("input[name='utm_medium']").val('Paid'); 
        $("input[name='utm_campaign']").val('⠀'); 
        $("input[name='utm_term']").val('⠀'); 
    } else { // ------------------------------------------------------ UTM IS EMPTY
    $("input[name='utm_id']").val('Direct / ⠀ / ⠀');
    $("input[name='utm_source']").val('Direct'); 
    $("input[name='utm_medium']").val('⠀'); 
    $("input[name='utm_campaign']").val('⠀'); 
    $("input[name='utm_term']").val('⠀'); 
    }
    
    // if ($('input[name="message"]').val().length > 255) { $(this).closest('form')[0].reset()} else {
    setTimeout(() => {
    $(fauxbutton).siblings('.button-contact').trigger('click');
    }, 800);
    // };
    }

    // --- actions
    $(document).ready(function() {
    console.log(codeVer);
    $('div.codever').text(codeVer);
    // UTM
    trackUTM();
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
    
    // CONTACT FORM IDER
    $('.connect-section').find("input[name='formLocation']").val('Section');
    $('.connect-pop').find("input[name='formLocation']").val('Popup');
    
    //$('.connect-section input[name="email"], .connect-pop input[name="email"]').on('input', function() {
    //$('.spam-tracker input[name="email"]').val($(this).val());
    //});
    
    $('[form-trigger]').on('click', function() {
   formtrigger($(this));
    });
    
    
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
    } else if (url.includes('/downloads') || url.includes('/descargas') || url.includes('/downloads')) {
    $("input[name='formPage']").val('Downloads');
    } else if (url.includes('/preview')) {
    $("input[name='formPage']").val('Preview Booking');
    } else { $("input[name='formPage']").val('Home'); }
    
    // HIDDEN stuff
    $('.hidden-form-fields:not(.show) input').attr('type', 'hidden');
    $('.hidden-form-fields input').attr('readonly', 'readonly');

    
    var newpop = 'visitus-240125';
    if ( Cookies.get('ann-seen') == newpop || window.location.href.indexOf("#contact-form") !== -1) {
    $('.popup-announcement').addClass('close');
    } else {
    $('.popup-announcement').removeClass('close');
    }
    
    $('[closeOtherPop]').on('click', function(){
    $(this).closest('div[announcement]').addClass('close');
    Cookies.set('ann-seen', newpop, { expires: 15 });
    });
    
    $('[openOtherpopup]').on('click', function(){
    $('div[announcement]').removeClass('close');
    });
    
    // --------- MODAL
    //NOTE: This is needs to be usable for all the modals and types
    $('[data-modal-trig]').on('click', function() {
        let $this = $(this);
        let vid = $this.data('vid-embed');
        let modal = $this.closest('div[data-modal]').data('modal');
        $this.closest('.main').siblings(`.view-modal[data-modal-view="${modal}"]`)
        .find('.view-modal-in-content').attr('src', `https://player.vimeo.com/video/${vid}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`);
        $this.closest('.main').siblings(`.view-modal[data-modal-view="${modal}"]`)
        .addClass('active');
        });
        $('[data-modal-close]').on('click', function() {
        $(this).closest('.view-modal[data-modal-view]').removeClass('active');
        $(this).closest('.view-modal[data-modal-view]').find('.view-modal-in-content').attr('src', '');
        });// --------- MODAL end
    
    
    }); // DOM LOADED