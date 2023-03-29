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
    $('.button-contact').trigger('click');
});

let url = window.location.href;
if (url.includes('/es')) {
    $('input#form-id').val('es-landing');
} else if (url.includes('/amenities')) {
    $('input#form-id').val('amenities');
} else if (url.includes('/residences')) {
    $('input#form-id').val('residences');
} else if (url.includes('/floorplans')) {
    $('input#form-id').val('floorplans');
} else { $('input#form-id').val('en-landing'); }


// TIMESTAMPER
var DateTime = luxon.DateTime;

function time() {
    const timestamper = DateTime.now().setZone('America/New_York').toFormat("ccc LLL dd (HH:mm) yyyy");
    $("input[timestamper]").val(timestamper);
}
const timer = setInterval(time, 1000);

// COOKIES & UTM PARAM

function getAllUrlParams(url) {
    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
    // we'll store the parameters here
    var obj = {};
    // if query string exists
    if (queryString) {
        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];
        // split our query string into its component parts
        var arr = queryString.split('&');
        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');
            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof(a[1]) === 'undefined' ? true : a[1];
            // (optional) keep case consistent
            // paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.replace(/\+/g, ' ');
            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {
                // create key if it doesn't exist
                var key = paramName;
                if (!obj[key]) obj[key] = [];
                // if it's an indexed array e.g. colors[2]
                if (paramName.match(/\[\d+\]$/)) {
                    // get the index value and add the entry at the appropriate position
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    // otherwise add the value to the end of the array
                    obj[key].push(paramValue);
                }
            } else {
                // we're dealing with a string
                if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string') {
                    // if property does exist and it's a string, convert it to an array
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                }
            }
        }
    }
    return obj;
}

/* Check if Lead Cookie already exist */
var cookieExist = Cookies.get('Lead'); // => 'value'
/* get URL params object */
var getAllUrlParams = getAllUrlParams();
/*Convert a JavaScript object into a string */
var getAllUrlParamsJSON = JSON.stringify(getAllUrlParams);
/* Check if the url with utm_parameters */
let isEmpty = jQuery.isEmptyObject(getAllUrlParams);

/* OPTION 1 - if the page with parameters and no cockie exsist */
if (!isEmpty && cookieExist === undefined) {
    /* set lead object for the cockies */
    console.log("1 - Create Cockie");
    /* 
## Set Cookies ##
expires: If omitted, the cookie becomes a session cookie (This example)
*/
    createLead();
    setUTMformValues();
} /*end if*/

/* OPTION 2 -
if page with utm params but the lead already exsist (overide current Lead) 
else use the currnet cockie
*/
if (!isEmpty && cookieExist !== undefined) {
    if (JSON.parse(cookieExist).parameters.utm_source != getAllUrlParams.utm_source ||
        JSON.parse(cookieExist).parameters.utm_medium != getAllUrlParams.utm_medium ||
        JSON.parse(cookieExist).parameters.utm_campaign != getAllUrlParams.utm_campaign ||
        JSON.parse(cookieExist).parameters.utm_term != getAllUrlParams.utm_term
    ) {
        console.log("lead Exist but with diff parames");
        Cookies.remove('Lead');
        createLead();
        console.log("Option 3");
        setUTMformValues();
    } else {
        console.log("option 2");
        setUTMformValues();
    }
}

/* option 3 - cookie Exist  but page without any utm param */
if (isEmpty && cookieExist !== undefined) {
    console.log("option 4");
    setUTMformValues();
}

function createLead() {
    var lead = {
        parameters: getAllUrlParams
    };
    /* if you want to add 2 days expires for example: 
Cookies.set('Lead', 'lead', { expires: 2}) 
*/
    Cookies.set('Lead', lead, { expires: 30 });
}

function setUTMformValues() {
    /* utm data */
    let source_value = JSON.parse(Cookies.get('Lead')).parameters.utm_source;
    let utm_source_value = JSON.parse(Cookies.get('Lead')).parameters.utm_source;
    let utm_medium_value = JSON.parse(Cookies.get('Lead')).parameters.utm_medium;
    let utm_campaign_value = JSON.parse(Cookies.get('Lead')).parameters.utm_campaign;
    let utm_term_value = JSON.parse(Cookies.get('Lead')).parameters.utm_term;

    /* webflow form object (Add embed code under webflow designer inside FORM */
    /*<input type="text" class="utm_source" placeholder="utm_source" name="utm_source">
    <input type="text" class="utm_medium" placeholder="utm_medium" name="utm_medium">
    <input type="text" class="utm_campaign" placeholder="utm_campaign" name="utm_campaign">
    */

    var utm_source_nodes = $("input[name='utm_source']");
    var utm_medium_nodes = $("input[name='utm_medium']");
    var utm_campaign_nodes = $("input[name='utm_campaign']");
    var utm_term_nodes = $("input[name='utm_term']");
    $("input[name='utm_term']").val('UPDATED!');

    /* 1 of 3 change all utm_source form feilds */
    if (utm_source_nodes != null && utm_source_value !== undefined) {
        for (var i = 0; i < utm_source_nodes.length; i++) {
            utm_source_nodes[i].value = source_value;
        }
    }
    /* 2 of 3 change all utm_source form feilds */
    if (utm_medium_nodes != null && utm_source_value !== undefined) {
        for (var i = 0; i < utm_source_nodes.length; i++) {
            utm_medium_nodes[i].value = utm_medium_value;
        }
    }
    /* 3 of 3 change all utm_campaign form feilds */
    if (utm_campaign_nodes != null && utm_source_value !== undefined) {
        for (var i = 0; i < utm_source_nodes.length; i++) {
            utm_campaign_nodes[i].value = utm_campaign_value;
        }
    }
    if (utm_term_nodes != null && utm_source_value !== undefined) {
        for (var i = 0; i < utm_source_nodes.length; i++) {
            utm_term_nodes[i].value = utm_term_value;
        }
    }
}