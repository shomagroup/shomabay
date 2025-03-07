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
    } else {
        $("input[name='countryISO']").val('error');
    }
}

// UTM tracking function
function trackUTM() {
    // URL parameter parser
    $.urlParam = function(name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results == null ? null : decodeURIComponent(results[1] || '');
    };

    // Initialize default values for UTM parameters
    let source = '';
    let medium = '⠀';
    let campaign = '⠀';
    let term = '⠀';
    let utm_id = '';

    // Set UTM cookie if parameters exist in URL
    if ($.urlParam('utm_source') && $.urlParam('utm_source') !== "" && $.urlParam('utm_source') !== undefined) {
        source = $.urlParam('utm_source').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
        medium = ($.urlParam('utm_medium') && $.urlParam('utm_medium') !== "" && $.urlParam('utm_medium') !== undefined) 
            ? $.urlParam('utm_medium').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ') 
            : '⠀';
        campaign = ($.urlParam('utm_campaign') && $.urlParam('utm_campaign') !== "" && $.urlParam('utm_campaign') !== undefined) 
            ? $.urlParam('utm_campaign').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ') 
            : '⠀';
        term = ($.urlParam('utm_term') && $.urlParam('utm_term') !== "" && $.urlParam('utm_term') !== undefined) 
            ? $.urlParam('utm_term').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ') 
            : '⠀';
        
        utm_id = source + ' / ' + medium + ' / ' + campaign;
        const utm = {
            "source": source,
            "medium": medium,
            "campaign": campaign,
            "term": term,
            "id": utm_id
        };

        // Set cookie for 30 days
        Cookies.set("utm", JSON.stringify(utm), { expires: 30 });
    }

    // Return UTM values with error handling
    const utmCookie = Cookies.get('utm');
    let utmData = {};

    if (utmCookie) {
        try {
            utmData = JSON.parse(utmCookie) || {};
        } catch (error) {
            console.error('Error parsing UTM cookie:', error);
            utmData = {}; // Fallback to empty object
        }
    }

    return {
        "source": (utmData.source || '').toLowerCase(),
        "medium": (utmData.medium || '').toLowerCase(),
        "campaign": (utmData.campaign || '').toLowerCase(),
        "term": (utmData.term || '').toLowerCase(),
        "id": (utmData.id || '').toLowerCase()
    };
}

// --- actions
$(document).ready(function() {
    // WEBSITE CODE VERSION
    let codeVer = '250301 0.0.1';
    console.log(codeVer);
    $('div.codever').text(codeVer);

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

    $('[form-trigger]').on('click', function() {
        locator();
        // current url
        $("input[name='current_url']").val(window.location.href); // Fixed undefined 'url'

        // Get UTM values using trackUTM function
        const utmValues = trackUTM();
        if (utmValues.source) { // UTM exists
            $("input[name='utm_id']").val(utmValues.id);
            $("input[name='utm_source']").val(utmValues.source);
            $("input[name='utm_medium']").val(utmValues.medium);
            $("input[name='utm_campaign']").val(utmValues.campaign);
            $("input[name='utm_term']").val(utmValues.term);
        } else if (window.location.href.includes('gclid')) {
            $("input[name='utm_id']").val('Google / Paid / ⠀');
            $("input[name='utm_source']").val('Google');
            $("input[name='utm_medium']").val('Paid');
            $("input[name='utm_campaign']").val('⠀');
            $("input[name='utm_term']").val('⠀');
        } else { // UTM is empty
            $("input[name='utm_id']").val('Direct / ⠀ / ⠀');
            $("input[name='utm_source']").val('Direct');
            $("input[name='utm_medium']").val('⠀');
            $("input[name='utm_campaign']").val('⠀');
            $("input[name='utm_term']").val('⠀');
        }

        setTimeout(() => {
            $(this).siblings('.button-contact').trigger('click');
        }, 800);
    });

    if (window.location.href.includes('#contact-form')) {
        $('.connect-pop').addClass('active');
        $('.body').addClass('no-scroll');
    }

    $("input[name='preference']").val('No Preference');
    $('[preference]').on('click', function() {
        $(this).toggleClass('checked');
        let preference = $('[preference]').filter('.checked').map((k, box) => box.name).toArray().join(', ');
        if ($('.checked[preference]').length === 5) {
            $("input[name='preference']").val('No Preference');
        } else if ($('.checked[preference]').length) {
            $("input[name='preference']").val(preference);
        } else {
            $("input[name='preference']").val('No Preference');
        }
    });

    $('[agent]').on('click', function() {
        if (!$('label[agent] .w-checkbox-input').is('.w--redirected-checked')) {
            $("input[agent-required]").attr('required', '1');
        } else {
            $("input[agent-required]").removeAttr('required');
        }
    });

    // URL Language
    if (window.location.href.includes('/es')) {
        $("input[name='lang']").val('ES');
    } else if (window.location.href.includes('/pt')) {
        $("input[name='lang']").val('PT');
    } else {
        $("input[name='lang']").val('EN');
    }

    // What page is form being submitted
    if (window.location.href.includes('/residences') || window.location.href.includes('/residencias')) {
        $("input[name='formPage']").val('Residences');
    } else if (window.location.href.includes('/floorplans') || window.location.href.includes('/planos') || window.location.href.includes('/plantas')) {
        $("input[name='formPage']").val('Floorplans');
    } else if (window.location.href.includes('/amenities') || window.location.href.includes('/amenidades') || window.location.href.includes('/comodidades')) {
        $("input[name='formPage']").val('Amenities');
    } else if (window.location.href.includes('/location') || window.location.href.includes('/localizacion') || window.location.href.includes('/localizacao')) {
        $("input[name='formPage']").val('Location');
    } else if (window.location.href.includes('/team') || window.location.href.includes('/equipo') || window.location.href.includes('/equipe')) {
        $("input[name='formPage']").val('Team');
    } else if (window.location.href.includes('/blog')) {
        $("input[name='formPage']").val('Blog');
    } else if (window.location.href.includes('/press') || window.location.href.includes('/prensa')) {
        $("input[name='formPage']").val('Press');
    } else if (window.location.href.includes('/customer-registration')) {
        $("input[name='formPage']").val('Customer Registration');
    } else if (window.location.href.includes('/sales-registration')) {
        $("input[name='formPage']").val('Sales Registration');
    } else if (window.location.href.includes('/downloads') || window.location.href.includes('/descargas') || window.location.href.includes('/downloads')) {
        $("input[name='formPage']").val('Downloads');
    } else {
        $("input[name='formPage']").val('Home');
    }

    // HIDDEN stuff
    $('.hidden-form-fields:not(.show) input').attr('type', 'hidden');
    $('.hidden-form-fields input').attr('readonly', 'readonly');

    // Call trackUTM and store its return value
    const utmValues = trackUTM();

    // Phone number logic using utmValues
    if (utmValues.source === 'google') {
        if (utmValues.medium === 'cpc' || utmValues.medium === 'paid') {
            $('[phoneNum]').attr('href', 'tel:+17863860647');
            $('[phoneTx]').text('786-386-0647');
        } else {
            $('[phoneNum]').attr('href', 'tel:+17868825350');
            $('[phoneTx]').text('786-882-5350');
        }
    } else if (utmValues.source === 'facebook') {
        if (utmValues.medium === 'paid') {
            $('[phoneNum]').attr('href', 'tel:+17868768185');
            $('[phoneTx]').text('786-876-8185');
        }
    } else if (utmValues.source === 'eblast') {
        $('[phoneNum]').attr('href', 'tel:+17868861787');
        $('[phoneTx]').text('786-886-1787');
    } else if (utmValues.source === 'fence') {
        $('[phoneNum]').attr('href', 'tel:+7868823098');
        $('[phoneTx]').text('786-882-3098');
    } else if (utmValues.source === 'socials') {
        $('[phoneNum]').attr('href', 'tel:+17868826213');
        $('[phoneTx]').text('786-882-6213');
    } else if (utmValues.source === 'printed materials') {
        if (utmValues.medium === 'shomabazaar') {
            $('[phoneNum]').attr('href', 'tel:+17869339872');
            $('[phoneTx]').text('786-933-9872');
        } else {
            $('[phoneNum]').attr('href', 'tel:+17868337421');
            $('[phoneTx]').text('786-833-7421');
        }
    } else {
        $('[phoneNum]').attr('href', 'tel:+17868825887');
        $('[phoneTx]').text('786-882-5887');
    }

    var newpop = 'visitus-240125';
    if (Cookies.get('ann-seen') === newpop || window.location.href.indexOf("#contact-form") !== -1) {
        $('.popup-announcement').addClass('close');
    } else {
        $('.popup-announcement').removeClass('close');
    }

    $('[closeOtherPop]').on('click', function() {
        $(this).closest('div[announcement]').addClass('close');
        Cookies.set('ann-seen', newpop, { expires: 15 });
    });

    $('[openOtherpopup]').on('click', function() {
        $('div[announcement]').removeClass('close');
    });

    // --------- MODAL
    $('[data-modal-trig]').on('click', function() {
        let $this = $(this);
        let vid = $this.data('vid-embed');
        let modal = $this.closest('div[data-modal]').data('modal');
        $this.closest('.main').siblings(`.view-modal[data-modal-view="${modal}"]`)
            .find('.view-modal-in-content').attr('src', `https://player.vimeo.com/video/${vid}&badge=0&autopause=0&player_id=0&app_id=58479`);
        $this.closest('.main').siblings(`.view-modal[data-modal-view="${modal}"]`)
            .addClass('active');
    });
    $('[data-modal-close]').on('click', function() {
        $(this).closest('.view-modal[data-modal-view]').removeClass('active');
        $(this).closest('.view-modal[data-modal-view]').find('.view-modal-in-content').attr('src', '');
    }); // --------- MODAL end
});