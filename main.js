// WEBSITE CODE VERSION
const codeVer = '2301122 1.0.1';
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
$('.connect-section').find("input[name='formIDER']").val('section');
$('.connect-pop').find("input[name='formIDER']").val('popup');

//$('.connect-section input[name="email"], .connect-pop input[name="email"]').on('input', function() {
//$('.spam-tracker input[name="email"]').val($(this).val());
//});

$('[form-trigger]').on('click', function() {
timestamper();
locator();
setTimeout(() => {
countryIDer();
}, 269);
//current url
$("input[name='current_url']").val(url);
$("input[name='utm_url']").val(Cookies.get('url'));
//get cookies into form
if (!Cookies.get('source') == null || !Cookies.get('source') == "") {
    $("input[name='utm_source']").val(Cookies.get('source'));
} else { $("input[name='utm_source']").val('Direct'); }
$("input[name='utm_medium']").val(Cookies.get('medium'));
$("input[name='utm_campaign']").val(Cookies.get('campaign'));
$("input[name='utm_term']").val(Cookies.get('term'));
setTimeout(() => {
$(this).siblings('.button-contact').trigger('click');
}, 569);
    // timestamp setup
function timestamper() {
const date = new Date();
const year = new Intl.DateTimeFormat('en',{year:'2-digit'}).format(date);
const month = new Intl.DateTimeFormat('en',{month:'short'}).format(date);
const weekday = new Intl.DateTimeFormat('en',{weekday:'short'}).format(date);
const day = new Intl.DateTimeFormat('en',{day:'2-digit'}).format(date);
const time = new Intl.DateTimeFormat('en',{hour:'2-digit', minute:'2-digit', hour12:false}).format(date);
var timestamp = `${time} ${weekday} ${month} ${day} ${year}`;
$("input[timestamper]").val(timestamp);
}
// locator setup
function locator() {
if (navigator.geolocation) {
fetch('https://ipapi.co/json')
.then((response) => response.json())
.then((data) => {
$("input[name='countryISO']").val(data.country_code_iso3);
$("input[name='countryName']").val(data.country_name);
$("input[name='ip']").val(data.ip.replace(/\./g, '').replace(/:/g, ''));
});
} else { $("input[name='countryISO']").val('error'); }
}
//
if (url.includes('#contact-form')) {
    $('.connect-pop').addClass('active');
    $('.body').addClass('no-scroll');
}

// COUNTRY CODE
var cIderForm = $('form:not([doNotcIder])');
function countryIDer() {

    if ($("input[name='countryISO']").val() === 'AFG') {
        $(cIderForm).find('input[name="countryID"]').val('1');

    } else if ($("input[name='countryISO']").val() === 'ALB') {
        $(cIderForm).find('input[name="countryID"]').val('2');

    } else if ($("input[name='countryISO']").val() === 'DZA') {
        $(cIderForm).find('input[name="countryID"]').val('3');

    } else if ($("input[name='countryISO']").val() === 'ASM') {
        $(cIderForm).find('input[name="countryID"]').val('4');

    } else if ($("input[name='countryISO']").val() === 'AND') {
        $(cIderForm).find('input[name="countryID"]').val('5');

    } else if ($("input[name='countryISO']").val() === 'AGO') {
        $(cIderForm).find('input[name="countryID"]').val('6');

    } else if ($("input[name='countryISO']").val() === 'AIA') {
        $(cIderForm).find('input[name="countryID"]').val('7');

    } else if ($("input[name='countryISO']").val() === 'ATG') {
        $(cIderForm).find('input[name="countryID"]').val('8');

    } else if ($("input[name='countryISO']").val() === 'ARG') {
        $(cIderForm).find('input[name="countryID"]').val('9');

    } else if ($("input[name='countryISO']").val() === 'ARM') {
        $(cIderForm).find('input[name="countryID"]').val('10');

    } else if ($("input[name='countryISO']").val() === 'ABW') {
        $(cIderForm).find('input[name="countryID"]').val('11');

    } else if ($("input[name='countryISO']").val() === 'AUS') {
        $(cIderForm).find('input[name="countryID"]').val('12');

    } else if ($("input[name='countryISO']").val() === 'AUT') {
        $(cIderForm).find('input[name="countryID"]').val('13');

    } else if ($("input[name='countryISO']").val() === 'AZE') {
        $(cIderForm).find('input[name="countryID"]').val('14');

    } else if ($("input[name='countryISO']").val() === 'BHS') {
        $(cIderForm).find('input[name="countryID"]').val('15');

    } else if ($("input[name='countryISO']").val() === 'BHR') {
        $(cIderForm).find('input[name="countryID"]').val('16');

    } else if ($("input[name='countryISO']").val() === 'BGD') {
        $(cIderForm).find('input[name="countryID"]').val('17');

    } else if ($("input[name='countryISO']").val() === 'BRB') {
        $(cIderForm).find('input[name="countryID"]').val('18');

    } else if ($("input[name='countryISO']").val() === 'BLR') {
        $(cIderForm).find('input[name="countryID"]').val('19');

    } else if ($("input[name='countryISO']").val() === 'BEL') {
        $(cIderForm).find('input[name="countryID"]').val('20');

    } else if ($("input[name='countryISO']").val() === 'BLZ') {
        $(cIderForm).find('input[name="countryID"]').val('21');

    } else if ($("input[name='countryISO']").val() === 'BEN') {
        $(cIderForm).find('input[name="countryID"]').val('22');

    } else if ($("input[name='countryISO']").val() === 'BMU') {
        $(cIderForm).find('input[name="countryID"]').val('23');

    } else if ($("input[name='countryISO']").val() === 'BTN') {
        $(cIderForm).find('input[name="countryID"]').val('24');

    } else if ($("input[name='countryISO']").val() === 'BOL') {
        $(cIderForm).find('input[name="countryID"]').val('25');

    } else if ($("input[name='countryISO']").val() === 'BIH') {
        $(cIderForm).find('input[name="countryID"]').val('26');

    } else if ($("input[name='countryISO']").val() === 'BWA') {
        $(cIderForm).find('input[name="countryID"]').val('27');

    } else if ($("input[name='countryISO']").val() === 'BRA') {
        $(cIderForm).find('input[name="countryID"]').val('28');

    } else if ($("input[name='countryISO']").val() === 'BRN') {
        $(cIderForm).find('input[name="countryID"]').val('29');

    } else if ($("input[name='countryISO']").val() === 'BGR') {
        $(cIderForm).find('input[name="countryID"]').val('30');

    } else if ($("input[name='countryISO']").val() === 'BFA') {
        $(cIderForm).find('input[name="countryID"]').val('31');

    } else if ($("input[name='countryISO']").val() === 'BDI') {
        $(cIderForm).find('input[name="countryID"]').val('32');

    } else if ($("input[name='countryISO']").val() === 'KHM') {
        $(cIderForm).find('input[name="countryID"]').val('33');

    } else if ($("input[name='countryISO']").val() === 'CMR') {
        $(cIderForm).find('input[name="countryID"]').val('34');

    } else if ($("input[name='countryISO']").val() === 'CAN') {
        $(cIderForm).find('input[name="countryID"]').val('35');

    } else if ($("input[name='countryISO']").val() === 'CPV') {
        $(cIderForm).find('input[name="countryID"]').val('36');

    } else if ($("input[name='countryISO']").val() === 'CYM') {
        $(cIderForm).find('input[name="countryID"]').val('37');

    } else if ($("input[name='countryISO']").val() === 'CAF') {
        $(cIderForm).find('input[name="countryID"]').val('38');

    } else if ($("input[name='countryISO']").val() === 'TCD') {
        $(cIderForm).find('input[name="countryID"]').val('39');

    } else if ($("input[name='countryISO']").val() === 'CHL') {
        $(cIderForm).find('input[name="countryID"]').val('40');

    } else if ($("input[name='countryISO']").val() === 'CHN') {
        $(cIderForm).find('input[name="countryID"]').val('41');

    } else if ($("input[name='countryISO']").val() === 'COL') {
        $(cIderForm).find('input[name="countryID"]').val('42');

    } else if ($("input[name='countryISO']").val() === 'COM') {
        $(cIderForm).find('input[name="countryID"]').val('43');

    } else if ($("input[name='countryISO']").val() === 'COD') {
        $(cIderForm).find('input[name="countryID"]').val('44');

    } else if ($("input[name='countryISO']").val() === 'COK') {
        $(cIderForm).find('input[name="countryID"]').val('46');

    } else if ($("input[name='countryISO']").val() === 'CRI') {
        $(cIderForm).find('input[name="countryID"]').val('47');

    } else if ($("input[name='countryISO']").val() === 'CIV') {
        $(cIderForm).find('input[name="countryID"]').val('48');

    } else if ($("input[name='countryISO']").val() === 'HRV') {
        $(cIderForm).find('input[name="countryID"]').val('49');

    } else if ($("input[name='countryISO']").val() === 'CUB') {
        $(cIderForm).find('input[name="countryID"]').val('50');

    } else if ($("input[name='countryISO']").val() === 'CYP') {
        $(cIderForm).find('input[name="countryID"]').val('51');

    } else if ($("input[name='countryISO']").val() === 'CZE') {
        $(cIderForm).find('input[name="countryID"]').val('52');

    } else if ($("input[name='countryISO']").val() === 'DNK') {
        $(cIderForm).find('input[name="countryID"]').val('53');

    } else if ($("input[name='countryISO']").val() === 'DJI') {
        $(cIderForm).find('input[name="countryID"]').val('54');

    } else if ($("input[name='countryISO']").val() === 'DMA') {
        $(cIderForm).find('input[name="countryID"]').val('55');

    } else if ($("input[name='countryISO']").val() === 'DOM') {
        $(cIderForm).find('input[name="countryID"]').val('56');

    } else if ($("input[name='countryISO']").val() === 'ECU') {
        $(cIderForm).find('input[name="countryID"]').val('57');

    } else if ($("input[name='countryISO']").val() === 'EGY') {
        $(cIderForm).find('input[name="countryID"]').val('58');

    } else if ($("input[name='countryISO']").val() === 'SLV') {
        $(cIderForm).find('input[name="countryID"]').val('59');

    } else if ($("input[name='countryISO']").val() === 'GNQ') {
        $(cIderForm).find('input[name="countryID"]').val('60');

    } else if ($("input[name='countryISO']").val() === 'ERI') {
        $(cIderForm).find('input[name="countryID"]').val('61');

    } else if ($("input[name='countryISO']").val() === 'EST') {
        $(cIderForm).find('input[name="countryID"]').val('62');

    } else if ($("input[name='countryISO']").val() === 'ETH') {
        $(cIderForm).find('input[name="countryID"]').val('63');

    } else if ($("input[name='countryISO']").val() === 'FLK') {
        $(cIderForm).find('input[name="countryID"]').val('64');

    } else if ($("input[name='countryISO']").val() === 'FRO') {
        $(cIderForm).find('input[name="countryID"]').val('65');

    } else if ($("input[name='countryISO']").val() === 'FJI') {
        $(cIderForm).find('input[name="countryID"]').val('66');

    } else if ($("input[name='countryISO']").val() === 'FIN') {
        $(cIderForm).find('input[name="countryID"]').val('67');

    } else if ($("input[name='countryISO']").val() === 'FRA') {
        $(cIderForm).find('input[name="countryID"]').val('68');

    } else if ($("input[name='countryISO']").val() === 'GUF') {
        $(cIderForm).find('input[name="countryID"]').val('69');

    } else if ($("input[name='countryISO']").val() === 'PYF') {
        $(cIderForm).find('input[name="countryID"]').val('70');

    } else if ($("input[name='countryISO']").val() === 'GAB') {
        $(cIderForm).find('input[name="countryID"]').val('71');

    } else if ($("input[name='countryISO']").val() === 'GMB') {
        $(cIderForm).find('input[name="countryID"]').val('72');

    } else if ($("input[name='countryISO']").val() === 'GEO') {
        $(cIderForm).find('input[name="countryID"]').val('73');

    } else if ($("input[name='countryISO']").val() === 'DEU') {
        $(cIderForm).find('input[name="countryID"]').val('74');

    } else if ($("input[name='countryISO']").val() === 'GHA') {
        $(cIderForm).find('input[name="countryID"]').val('75');

    } else if ($("input[name='countryISO']").val() === 'GIB') {
        $(cIderForm).find('input[name="countryID"]').val('76');

    } else if ($("input[name='countryISO']").val() === 'GRC') {
        $(cIderForm).find('input[name="countryID"]').val('77');

    } else if ($("input[name='countryISO']").val() === 'GRL') {
        $(cIderForm).find('input[name="countryID"]').val('78');

    } else if ($("input[name='countryISO']").val() === 'GRD') {
        $(cIderForm).find('input[name="countryID"]').val('79');

    } else if ($("input[name='countryISO']").val() === 'GLP') {
        $(cIderForm).find('input[name="countryID"]').val('80');

    } else if ($("input[name='countryISO']").val() === 'GUM') {
        $(cIderForm).find('input[name="countryID"]').val('81');

    } else if ($("input[name='countryISO']").val() === 'GTM') {
        $(cIderForm).find('input[name="countryID"]').val('82');

    } else if ($("input[name='countryISO']").val() === 'GIN') {
        $(cIderForm).find('input[name="countryID"]').val('83');

    } else if ($("input[name='countryISO']").val() === 'GNB') {
        $(cIderForm).find('input[name="countryID"]').val('84');

    } else if ($("input[name='countryISO']").val() === 'GUY') {
        $(cIderForm).find('input[name="countryID"]').val('85');

    } else if ($("input[name='countryISO']").val() === 'HTI') {
        $(cIderForm).find('input[name="countryID"]').val('86');

    } else if ($("input[name='countryISO']").val() === 'VAT') {
        $(cIderForm).find('input[name="countryID"]').val('87');

    } else if ($("input[name='countryISO']").val() === 'HND') {
        $(cIderForm).find('input[name="countryID"]').val('88');

    } else if ($("input[name='countryISO']").val() === 'HKG') {
        $(cIderForm).find('input[name="countryID"]').val('89');

    } else if ($("input[name='countryISO']").val() === 'HUN') {
        $(cIderForm).find('input[name="countryID"]').val('90');

    } else if ($("input[name='countryISO']").val() === 'ISL') {
        $(cIderForm).find('input[name="countryID"]').val('91');

    } else if ($("input[name='countryISO']").val() === 'IND') {
        $(cIderForm).find('input[name="countryID"]').val('92');

    } else if ($("input[name='countryISO']").val() === 'IDN') {
        $(cIderForm).find('input[name="countryID"]').val('93');

    } else if ($("input[name='countryISO']").val() === 'IRN') {
        $(cIderForm).find('input[name="countryID"]').val('94');

    } else if ($("input[name='countryISO']").val() === 'GAB') {
        $(cIderForm).find('input[name="countryID"]').val('95');

    } else if ($("input[name='countryISO']").val() === 'IRL') {
        $(cIderForm).find('input[name="countryID"]').val('96');

    } else if ($("input[name='countryISO']").val() === 'ISR') {
        $(cIderForm).find('input[name="countryID"]').val('97');

    } else if ($("input[name='countryISO']").val() === 'ITA') {
        $(cIderForm).find('input[name="countryID"]').val('98');

    } else if ($("input[name='countryISO']").val() === 'JAM') {
        $(cIderForm).find('input[name="countryID"]').val('99');

    } else if ($("input[name='countryISO']").val() === 'JPN') {
        $(cIderForm).find('input[name="countryID"]').val('100');

    } else if ($("input[name='countryISO']").val() === 'JOR') {
        $(cIderForm).find('input[name="countryID"]').val('101');

    } else if ($("input[name='countryISO']").val() === 'KAZ') {
        $(cIderForm).find('input[name="countryID"]').val('102');

    } else if ($("input[name='countryISO']").val() === 'KEN') {
        $(cIderForm).find('input[name="countryID"]').val('103');

    } else if ($("input[name='countryISO']").val() === 'KIR') {
        $(cIderForm).find('input[name="countryID"]').val('104');

    } else if ($("input[name='countryISO']").val() === 'KOR') {
        $(cIderForm).find('input[name="countryID"]').val('105');

    } else if ($("input[name='countryISO']").val() === 'PRK') {
        $(cIderForm).find('input[name="countryID"]').val('106');

    } else if ($("input[name='countryISO']").val() === 'KWT') {
        $(cIderForm).find('input[name="countryID"]').val('107');

    } else if ($("input[name='countryISO']").val() === 'KGZ') {
        $(cIderForm).find('input[name="countryID"]').val('108');

    } else if ($("input[name='countryISO']").val() === 'LAO') {
        $(cIderForm).find('input[name="countryID"]').val('109');

    } else if ($("input[name='countryISO']").val() === 'LVA') {
        $(cIderForm).find('input[name="countryID"]').val('110');

    } else if ($("input[name='countryISO']").val() === 'LBN') {
        $(cIderForm).find('input[name="countryID"]').val('111');

    } else if ($("input[name='countryISO']").val() === 'LSO') {
        $(cIderForm).find('input[name="countryID"]').val('112');

    } else if ($("input[name='countryISO']").val() === 'LBR') {
        $(cIderForm).find('input[name="countryID"]').val('113');

    } else if ($("input[name='countryISO']").val() === 'LBY') {
        $(cIderForm).find('input[name="countryID"]').val('114');

    } else if ($("input[name='countryISO']").val() === 'LIE') {
        $(cIderForm).find('input[name="countryID"]').val('115');

    } else if ($("input[name='countryISO']").val() === 'LTU') {
        $(cIderForm).find('input[name="countryID"]').val('116');

    } else if ($("input[name='countryISO']").val() === 'LUX') {
        $(cIderForm).find('input[name="countryID"]').val('117');

    } else if ($("input[name='countryISO']").val() === 'MAC') {
        $(cIderForm).find('input[name="countryID"]').val('118');

    } else if ($("input[name='countryISO']").val() === 'MKD') {
        $(cIderForm).find('input[name="countryID"]').val('119');

    } else if ($("input[name='countryISO']").val() === 'MDG') {
        $(cIderForm).find('input[name="countryID"]').val('120');

    } else if ($("input[name='countryISO']").val() === 'MWI') {
        $(cIderForm).find('input[name="countryID"]').val('121');

    } else if ($("input[name='countryISO']").val() === 'MYS') {
        $(cIderForm).find('input[name="countryID"]').val('122');

    } else if ($("input[name='countryISO']").val() === 'MDV') {
        $(cIderForm).find('input[name="countryID"]').val('123');

    } else if ($("input[name='countryISO']").val() === 'MLI') {
        $(cIderForm).find('input[name="countryID"]').val('124');

    } else if ($("input[name='countryISO']").val() === 'MLT') {
        $(cIderForm).find('input[name="countryID"]').val('125');

    } else if ($("input[name='countryISO']").val() === 'MHL') {
        $(cIderForm).find('input[name="countryID"]').val('126');

    } else if ($("input[name='countryISO']").val() === 'MTQ') {
        $(cIderForm).find('input[name="countryID"]').val('127');

    } else if ($("input[name='countryISO']").val() === 'MRT') {
        $(cIderForm).find('input[name="countryID"]').val('128');

    } else if ($("input[name='countryISO']").val() === 'MUS') {
        $(cIderForm).find('input[name="countryID"]').val('129');

    } else if ($("input[name='countryISO']").val() === 'MEX') {
        $(cIderForm).find('input[name="countryID"]').val('130');

    } else if ($("input[name='countryISO']").val() === 'FSM') {
        $(cIderForm).find('input[name="countryID"]').val('131');

    } else if ($("input[name='countryISO']").val() === 'MDA') {
        $(cIderForm).find('input[name="countryID"]').val('132');

    } else if ($("input[name='countryISO']").val() === 'MCO') {
        $(cIderForm).find('input[name="countryID"]').val('133');

    } else if ($("input[name='countryISO']").val() === 'MNG') {
        $(cIderForm).find('input[name="countryID"]').val('134');

    } else if ($("input[name='countryISO']").val() === 'MSR') {
        $(cIderForm).find('input[name="countryID"]').val('135');

    } else if ($("input[name='countryISO']").val() === 'MAR') {
        $(cIderForm).find('input[name="countryID"]').val('136');

    } else if ($("input[name='countryISO']").val() === 'MOZ') {
        $(cIderForm).find('input[name="countryID"]').val('137');

    } else if ($("input[name='countryISO']").val() === 'MMR') {
        $(cIderForm).find('input[name="countryID"]').val('138');

    } else if ($("input[name='countryISO']").val() === 'NAM') {
        $(cIderForm).find('input[name="countryID"]').val('139');

    } else if ($("input[name='countryISO']").val() === 'NRU') {
        $(cIderForm).find('input[name="countryID"]').val('140');

    } else if ($("input[name='countryISO']").val() === 'NPL') {
        $(cIderForm).find('input[name="countryID"]').val('141');

    } else if ($("input[name='countryISO']").val() === 'NLD') {
        $(cIderForm).find('input[name="countryID"]').val('142');

    } else if ($("input[name='countryISO']").val() === 'ANT') {
        $(cIderForm).find('input[name="countryID"]').val('143');

    } else if ($("input[name='countryISO']").val() === 'NCL') {
        $(cIderForm).find('input[name="countryID"]').val('144');

    } else if ($("input[name='countryISO']").val() === 'NZL') {
        $(cIderForm).find('input[name="countryID"]').val('145');

    } else if ($("input[name='countryISO']").val() === 'NIC') {
        $(cIderForm).find('input[name="countryID"]').val('146');

    } else if ($("input[name='countryISO']").val() === 'NER') {
        $(cIderForm).find('input[name="countryID"]').val('147');

    } else if ($("input[name='countryISO']").val() === 'NGA') {
        $(cIderForm).find('input[name="countryID"]').val('148');

    } else if ($("input[name='countryISO']").val() === 'NIU') {
        $(cIderForm).find('input[name="countryID"]').val('149');

    } else if ($("input[name='countryISO']").val() === 'NFK') {
        $(cIderForm).find('input[name="countryID"]').val('150');

    } else if ($("input[name='countryISO']").val() === 'MNP') {
        $(cIderForm).find('input[name="countryID"]').val('151');

    } else if ($("input[name='countryISO']").val() === 'NOR') {
        $(cIderForm).find('input[name="countryID"]').val('152');

    } else if ($("input[name='countryISO']").val() === 'OMN') {
        $(cIderForm).find('input[name="countryID"]').val('153');

    } else if ($("input[name='countryISO']").val() === 'PAK') {
        $(cIderForm).find('input[name="countryID"]').val('154');

    } else if ($("input[name='countryISO']").val() === 'PLW') {
        $(cIderForm).find('input[name="countryID"]').val('155');

    } else if ($("input[name='countryISO']").val() === 'PAN') {
        $(cIderForm).find('input[name="countryID"]').val('156');

    } else if ($("input[name='countryISO']").val() === 'PNG') {
        $(cIderForm).find('input[name="countryID"]').val('157');

    } else if ($("input[name='countryISO']").val() === 'PRY') {
        $(cIderForm).find('input[name="countryID"]').val('158');

    } else if ($("input[name='countryISO']").val() === 'PER') {
        $(cIderForm).find('input[name="countryID"]').val('159');

    } else if ($("input[name='countryISO']").val() === 'PHL') {
        $(cIderForm).find('input[name="countryID"]').val('160');

    } else if ($("input[name='countryISO']").val() === 'PCN') {
        $(cIderForm).find('input[name="countryID"]').val('161');

    } else if ($("input[name='countryISO']").val() === 'POL') {
        $(cIderForm).find('input[name="countryID"]').val('162');

    } else if ($("input[name='countryISO']").val() === 'PRT') {
        $(cIderForm).find('input[name="countryID"]').val('163');

    } else if ($("input[name='countryISO']").val() === 'PRI') {
        $(cIderForm).find('input[name="countryID"]').val('164');

    } else if ($("input[name='countryISO']").val() === 'QAT') {
        $(cIderForm).find('input[name="countryID"]').val('165');

    } else if ($("input[name='countryISO']").val() === 'REU') {
        $(cIderForm).find('input[name="countryID"]').val('166');

    } else if ($("input[name='countryISO']").val() === 'ROU') {
        $(cIderForm).find('input[name="countryID"]').val('167');

    } else if ($("input[name='countryISO']").val() === 'RUS') {
        $(cIderForm).find('input[name="countryID"]').val('168');

    } else if ($("input[name='countryISO']").val() === 'RWA') {
        $(cIderForm).find('input[name="countryID"]').val('169');

    } else if ($("input[name='countryISO']").val() === 'SHN') {
        $(cIderForm).find('input[name="countryID"]').val('170');

    } else if ($("input[name='countryISO']").val() === 'KNA') {
        $(cIderForm).find('input[name="countryID"]').val('171');

    } else if ($("input[name='countryISO']").val() === 'LCA') {
        $(cIderForm).find('input[name="countryID"]').val('172');

    } else if ($("input[name='countryISO']").val() === 'SPM') {
        $(cIderForm).find('input[name="countryID"]').val('173');

    } else if ($("input[name='countryISO']").val() === 'VCT') {
        $(cIderForm).find('input[name="countryID"]').val('174');

    } else if ($("input[name='countryISO']").val() === 'WSM') {
        $(cIderForm).find('input[name="countryID"]').val('175');

    } else if ($("input[name='countryISO']").val() === 'SMR') {
        $(cIderForm).find('input[name="countryID"]').val('176');

    } else if ($("input[name='countryISO']").val() === 'STP') {
        $(cIderForm).find('input[name="countryID"]').val('177');

    } else if ($("input[name='countryISO']").val() === 'SAU') {
        $(cIderForm).find('input[name="countryID"]').val('178');

    } else if ($("input[name='countryISO']").val() === 'SEN') {
        $(cIderForm).find('input[name="countryID"]').val('179');

    } else if ($("input[name='countryISO']").val() === 'SYC') {
        $(cIderForm).find('input[name="countryID"]').val('180');

    } else if ($("input[name='countryISO']").val() === 'SLE') {
        $(cIderForm).find('input[name="countryID"]').val('181');

    } else if ($("input[name='countryISO']").val() === 'SGP') {
        $(cIderForm).find('input[name="countryID"]').val('182');

    } else if ($("input[name='countryISO']").val() === 'SVK') {
        $(cIderForm).find('input[name="countryID"]').val('183');

    } else if ($("input[name='countryISO']").val() === 'SVN') {
        $(cIderForm).find('input[name="countryID"]').val('184');

    } else if ($("input[name='countryISO']").val() === 'SLB') {
        $(cIderForm).find('input[name="countryID"]').val('185');

    } else if ($("input[name='countryISO']").val() === 'SOM') {
        $(cIderForm).find('input[name="countryID"]').val('186');

    } else if ($("input[name='countryISO']").val() === 'ZAF') {
        $(cIderForm).find('input[name="countryID"]').val('187');

    } else if ($("input[name='countryISO']").val() === 'ESP') {
        $(cIderForm).find('input[name="countryID"]').val('188');

    } else if ($("input[name='countryISO']").val() === 'LKA') {
        $(cIderForm).find('input[name="countryID"]').val('189');

    } else if ($("input[name='countryISO']").val() === 'SDN') {
        $(cIderForm).find('input[name="countryID"]').val('190');

    } else if ($("input[name='countryISO']").val() === 'SUR') {
        $(cIderForm).find('input[name="countryID"]').val('191');

    } else if ($("input[name='countryISO']").val() === 'SJM') {
        $(cIderForm).find('input[name="countryID"]').val('192');

    } else if ($("input[name='countryISO']").val() === 'SWZ') {
        $(cIderForm).find('input[name="countryID"]').val('193');

    } else if ($("input[name='countryISO']").val() === 'SWE') {
        $(cIderForm).find('input[name="countryID"]').val('194');

    } else if ($("input[name='countryISO']").val() === 'SYR') {
        $(cIderForm).find('input[name="countryID"]').val('195');

    } else if ($("input[name='countryISO']").val() === 'MEX') {
        $(cIderForm).find('input[name="countryID"]').val('196');

    } else if ($("input[name='countryISO']").val() === 'TWN') {
        $(cIderForm).find('input[name="countryID"]').val('197');

    } else if ($("input[name='countryISO']").val() === 'TJK') {
        $(cIderForm).find('input[name="countryID"]').val('198');

    } else if ($("input[name='countryISO']").val() === 'TZA') {
        $(cIderForm).find('input[name="countryID"]').val('199');

    } else if ($("input[name='countryISO']").val() === 'THA') {
        $(cIderForm).find('input[name="countryID"]').val('200');

    } else if ($("input[name='countryISO']").val() === 'TGO') {
        $(cIderForm).find('input[name="countryID"]').val('201');

    } else if ($("input[name='countryISO']").val() === 'TKL') {
        $(cIderForm).find('input[name="countryID"]').val('202');

    } else if ($("input[name='countryISO']").val() === 'TON') {
        $(cIderForm).find('input[name="countryID"]').val('203');

    } else if ($("input[name='countryISO']").val() === 'TTO') {
        $(cIderForm).find('input[name="countryID"]').val('204');

    } else if ($("input[name='countryISO']").val() === 'TUN') {
        $(cIderForm).find('input[name="countryID"]').val('205');

    } else if ($("input[name='countryISO']").val() === 'TUR') {
        $(cIderForm).find('input[name="countryID"]').val('206');

    } else if ($("input[name='countryISO']").val() === 'TKM') {
        $(cIderForm).find('input[name="countryID"]').val('207');

    } else if ($("input[name='countryISO']").val() === 'TCA') {
        $(cIderForm).find('input[name="countryID"]').val('208');

    } else if ($("input[name='countryISO']").val() === 'TUV') {
        $(cIderForm).find('input[name="countryID"]').val('209');

    } else if ($("input[name='countryISO']").val() === 'UGA') {
        $(cIderForm).find('input[name="countryID"]').val('210');

    } else if ($("input[name='countryISO']").val() === 'UKR') {
        $(cIderForm).find('input[name="countryID"]').val('211');

    } else if ($("input[name='countryISO']").val() === 'ARE') {
        $(cIderForm).find('input[name="countryID"]').val('212');

    } else if ($("input[name='countryISO']").val() === 'GBR') {
        $(cIderForm).find('input[name="countryID"]').val('213');

    } else if ($("input[name='countryISO']").val() === 'USA') {
        $(cIderForm).find('input[name="countryID"]').val('214');

    } else if ($("input[name='countryISO']").val() === 'URY') {
        $(cIderForm).find('input[name="countryID"]').val('215');

    } else if ($("input[name='countryISO']").val() === 'UZB') {
        $(cIderForm).find('input[name="countryID"]').val('216');

    } else if ($("input[name='countryISO']").val() === 'VUT') {
        $(cIderForm).find('input[name="countryID"]').val('217');

    } else if ($("input[name='countryISO']").val() === 'VEN') {
        $(cIderForm).find('input[name="countryID"]').val('218');

    } else if ($("input[name='countryISO']").val() === 'VNM') {
        $(cIderForm).find('input[name="countryID"]').val('219');

    } else if ($("input[name='countryISO']").val() === 'VGB') {
        $(cIderForm).find('input[name="countryID"]').val('220');

    } else if ($("input[name='countryISO']").val() === 'VIR') {
        $(cIderForm).find('input[name="countryID"]').val('221');

    } else if ($("input[name='countryISO']").val() === 'WLF') {
        $(cIderForm).find('input[name="countryID"]').val('222');

    } else if ($("input[name='countryISO']").val() === 'ESH') {
        $(cIderForm).find('input[name="countryID"]').val('223');

    } else if ($("input[name='countryISO']").val() === 'YEM') {
        $(cIderForm).find('input[name="countryID"]').val('224');

    } else if ($("input[name='countryISO']").val() === 'ZMB') {
        $(cIderForm).find('input[name="countryID"]').val('225');

    } else if ($("input[name='countryISO']").val() === 'ZWE') {
        $(cIderForm).find('input[name="countryID"]').val('226');

    } else { $(cIderForm).find('input[name="countryID"]').val('undefined'); }

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
$("input[name='agent']").val('false');
$("input[name='ratingID']").val('43584');
$('[agent]').on('click', function() {
if (!$('label[agent] .w-checkbox-input').is('.w--redirected-checked')) {
$("input[name='agent']").val('true');
$("input[name='ratingID']").val('43585');
$("input[agent-required]").attr('required', '1');
} else {
$("input[name='agent']").val('false');
$("input[name='ratingID']").val('43584');
$("input[agent-required]").removeAttr('required');
}
});
//

// Blocking some Attempt spam
if (url.includes('?sbroker') || url.includes('?First') || url.includes('?Last') || url.includes('?Email') || url.includes('?Phone') || url.includes('?country') || url.includes('?Message') ||
url.includes('?preference') || url.includes('?countryID') || url.includes('?lang') || url.includes('?agent') || url.includes('?ratingID') || url.includes('?timestamper') ||
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
$("input[name='form-id']").val('Residences');
} else if (url.includes('/floorplans') || url.includes('/planos') || url.includes('/plantas')) {
$("input[name='form-id']").val('Floorplans');
} else if (url.includes('/amenities') || url.includes('/amenidades') || url.includes('/comodidades')) {
$("input[name='form-id']").val('Amenities');
} else if (url.includes('/location') || url.includes('/localizacion') || url.includes('/localizacao')) {
$("input[name='form-id']").val('Location');
} else if (url.includes('/team') || url.includes('/equipo') || url.includes('/equipe')) {
$("input[name='form-id']").val('Team');
} else if (url.includes('/blog')) {
$("input[name='form-id']").val('Blog');
} else if (url.includes('/press') || url.includes('/prensa')) {
$("input[name='form-id']").val('Press');
} else if (url.includes('/customer-registration')) {
$("input[name='form-id']").val('Customer Registration');
} else if (url.includes('/sales-registration')) {
$("input[name='form-id']").val('Sales Registration');
} else { $("input[name='form-id']").val('Home'); }

// HIDDEN stuff
$('.hidden-form-fields:not(.show) input').attr('type', 'hidden');
$('.hidden-form-fields input').attr('readonly', 'readonly');

// === UTM TRACKER === //
$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
    if (results == null) { return null; } else { return results[1] || 0; }
}
let cleanUrl = url.replace('https://www.shomabay.com/?', '').replace('https://shomabay.webflow.io/?', '');
//
var inTwoMins = new Date(new Date().getTime() + 2 * 60 * 1000);
//cookie setter
//
if (!$.urlParam('utm_source') == null || !$.urlParam('utm_source') == "") {
var source = $.urlParam('utm_source').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
//
if (source == "Presentation" || source == "mls" || source == "LiveChat") {
Cookies.set('source', source, { expires: inTwoMins});
} else {
Cookies.set('source', source, { expires: 30 });
}
Cookies.set('url', cleanUrl, { expires: 30 });
}
//
if (!$.urlParam('utm_medium') == null || !$.urlParam('utm_medium') == "") {
var medium = $.urlParam('utm_medium').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
Cookies.set('medium', medium, { expires: 30 });
}
//
if (!$.urlParam('utm_campaign') == null || !$.urlParam('utm_campaign') == "") {
    var campaign = $.urlParam('utm_campaign').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
    Cookies.set('campaign', campaign, { expires: 30 });
}
//
if (!$.urlParam('utm_term') == null || !$.urlParam('utm_term') == "") {
    var term = $.urlParam('utm_term').split('&')[0].replace(/\+/g, ' ').replace(/%20/g, ' ');
    Cookies.set('term', term, { expires: 30 });
}


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