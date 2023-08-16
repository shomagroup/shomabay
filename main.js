// WEBSITE CODE VERSION
const codeVer = '230816 0.0.0';
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
//setTimeout(() => {
//spamChecker();
//}, 800);
setTimeout(() => {
$(this).siblings('.button-contact').trigger('click');
}, 800);
});
    
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
$('form').not('[data-name="customer-registration"]').on('click touchstart', function() {
    if ($("input[name='countryISO']").val() === 'AFG') {
        $(this).find('input[name="countryID"]').val('1');

    } else if ($("input[name='countryISO']").val() === 'ALB') {
        $(this).find('input[name="countryID"]').val('2');

    } else if ($("input[name='countryISO']").val() === 'DZA') {
        $(this).find('input[name="countryID"]').val('3');

    } else if ($("input[name='countryISO']").val() === 'ASM') {
        $(this).find('input[name="countryID"]').val('4');

    } else if ($("input[name='countryISO']").val() === 'AND') {
        $(this).find('input[name="countryID"]').val('5');

    } else if ($("input[name='countryISO']").val() === 'AGO') {
        $(this).find('input[name="countryID"]').val('6');

    } else if ($("input[name='countryISO']").val() === 'AIA') {
        $(this).find('input[name="countryID"]').val('7');

    } else if ($("input[name='countryISO']").val() === 'ATG') {
        $(this).find('input[name="countryID"]').val('8');

    } else if ($("input[name='countryISO']").val() === 'ARG') {
        $(this).find('input[name="countryID"]').val('9');

    } else if ($("input[name='countryISO']").val() === 'ARM') {
        $(this).find('input[name="countryID"]').val('10');

    } else if ($("input[name='countryISO']").val() === 'ABW') {
        $(this).find('input[name="countryID"]').val('11');

    } else if ($("input[name='countryISO']").val() === 'AUS') {
        $(this).find('input[name="countryID"]').val('12');

    } else if ($("input[name='countryISO']").val() === 'AUT') {
        $(this).find('input[name="countryID"]').val('13');

    } else if ($("input[name='countryISO']").val() === 'AZE') {
        $(this).find('input[name="countryID"]').val('14');

    } else if ($("input[name='countryISO']").val() === 'BHS') {
        $(this).find('input[name="countryID"]').val('15');

    } else if ($("input[name='countryISO']").val() === 'BHR') {
        $(this).find('input[name="countryID"]').val('16');

    } else if ($("input[name='countryISO']").val() === 'BGD') {
        $(this).find('input[name="countryID"]').val('17');

    } else if ($("input[name='countryISO']").val() === 'BRB') {
        $(this).find('input[name="countryID"]').val('18');

    } else if ($("input[name='countryISO']").val() === 'BLR') {
        $(this).find('input[name="countryID"]').val('19');

    } else if ($("input[name='countryISO']").val() === 'BEL') {
        $(this).find('input[name="countryID"]').val('20');

    } else if ($("input[name='countryISO']").val() === 'BLZ') {
        $(this).find('input[name="countryID"]').val('21');

    } else if ($("input[name='countryISO']").val() === 'BEN') {
        $(this).find('input[name="countryID"]').val('22');

    } else if ($("input[name='countryISO']").val() === 'BMU') {
        $(this).find('input[name="countryID"]').val('23');

    } else if ($("input[name='countryISO']").val() === 'BTN') {
        $(this).find('input[name="countryID"]').val('24');

    } else if ($("input[name='countryISO']").val() === 'BOL') {
        $(this).find('input[name="countryID"]').val('25');

    } else if ($("input[name='countryISO']").val() === 'BIH') {
        $(this).find('input[name="countryID"]').val('26');

    } else if ($("input[name='countryISO']").val() === 'BWA') {
        $(this).find('input[name="countryID"]').val('27');

    } else if ($("input[name='countryISO']").val() === 'BRA') {
        $(this).find('input[name="countryID"]').val('28');

    } else if ($("input[name='countryISO']").val() === 'BRN') {
        $(this).find('input[name="countryID"]').val('29');

    } else if ($("input[name='countryISO']").val() === 'BGR') {
        $(this).find('input[name="countryID"]').val('30');

    } else if ($("input[name='countryISO']").val() === 'BFA') {
        $(this).find('input[name="countryID"]').val('31');

    } else if ($("input[name='countryISO']").val() === 'BDI') {
        $(this).find('input[name="countryID"]').val('32');

    } else if ($("input[name='countryISO']").val() === 'KHM') {
        $(this).find('input[name="countryID"]').val('33');

    } else if ($("input[name='countryISO']").val() === 'CMR') {
        $(this).find('input[name="countryID"]').val('34');

    } else if ($("input[name='countryISO']").val() === 'CAN') {
        $(this).find('input[name="countryID"]').val('35');

    } else if ($("input[name='countryISO']").val() === 'CPV') {
        $(this).find('input[name="countryID"]').val('36');

    } else if ($("input[name='countryISO']").val() === 'CYM') {
        $(this).find('input[name="countryID"]').val('37');

    } else if ($("input[name='countryISO']").val() === 'CAF') {
        $(this).find('input[name="countryID"]').val('38');

    } else if ($("input[name='countryISO']").val() === 'TCD') {
        $(this).find('input[name="countryID"]').val('39');

    } else if ($("input[name='countryISO']").val() === 'CHL') {
        $(this).find('input[name="countryID"]').val('40');

    } else if ($("input[name='countryISO']").val() === 'CHN') {
        $(this).find('input[name="countryID"]').val('41');

    } else if ($("input[name='countryISO']").val() === 'COL') {
        $(this).find('input[name="countryID"]').val('42');

    } else if ($("input[name='countryISO']").val() === 'COM') {
        $(this).find('input[name="countryID"]').val('43');

    } else if ($("input[name='countryISO']").val() === 'COD') {
        $(this).find('input[name="countryID"]').val('44');

    } else if ($("input[name='countryISO']").val() === 'COK') {
        $(this).find('input[name="countryID"]').val('46');

    } else if ($("input[name='countryISO']").val() === 'CRI') {
        $(this).find('input[name="countryID"]').val('47');

    } else if ($("input[name='countryISO']").val() === 'CIV') {
        $(this).find('input[name="countryID"]').val('48');

    } else if ($("input[name='countryISO']").val() === 'HRV') {
        $(this).find('input[name="countryID"]').val('49');

    } else if ($("input[name='countryISO']").val() === 'CUB') {
        $(this).find('input[name="countryID"]').val('50');

    } else if ($("input[name='countryISO']").val() === 'CYP') {
        $(this).find('input[name="countryID"]').val('51');

    } else if ($("input[name='countryISO']").val() === 'CZE') {
        $(this).find('input[name="countryID"]').val('52');

    } else if ($("input[name='countryISO']").val() === 'DNK') {
        $(this).find('input[name="countryID"]').val('53');

    } else if ($("input[name='countryISO']").val() === 'DJI') {
        $(this).find('input[name="countryID"]').val('54');

    } else if ($("input[name='countryISO']").val() === 'DMA') {
        $(this).find('input[name="countryID"]').val('55');

    } else if ($("input[name='countryISO']").val() === 'DOM') {
        $(this).find('input[name="countryID"]').val('56');

    } else if ($("input[name='countryISO']").val() === 'ECU') {
        $(this).find('input[name="countryID"]').val('57');

    } else if ($("input[name='countryISO']").val() === 'EGY') {
        $(this).find('input[name="countryID"]').val('58');

    } else if ($("input[name='countryISO']").val() === 'SLV') {
        $(this).find('input[name="countryID"]').val('59');

    } else if ($("input[name='countryISO']").val() === 'GNQ') {
        $(this).find('input[name="countryID"]').val('60');

    } else if ($("input[name='countryISO']").val() === 'ERI') {
        $(this).find('input[name="countryID"]').val('61');

    } else if ($("input[name='countryISO']").val() === 'EST') {
        $(this).find('input[name="countryID"]').val('62');

    } else if ($("input[name='countryISO']").val() === 'ETH') {
        $(this).find('input[name="countryID"]').val('63');

    } else if ($("input[name='countryISO']").val() === 'FLK') {
        $(this).find('input[name="countryID"]').val('64');

    } else if ($("input[name='countryISO']").val() === 'FRO') {
        $(this).find('input[name="countryID"]').val('65');

    } else if ($("input[name='countryISO']").val() === 'FJI') {
        $(this).find('input[name="countryID"]').val('66');

    } else if ($("input[name='countryISO']").val() === 'FIN') {
        $(this).find('input[name="countryID"]').val('67');

    } else if ($("input[name='countryISO']").val() === 'FRA') {
        $(this).find('input[name="countryID"]').val('68');

    } else if ($("input[name='countryISO']").val() === 'GUF') {
        $(this).find('input[name="countryID"]').val('69');

    } else if ($("input[name='countryISO']").val() === 'PYF') {
        $(this).find('input[name="countryID"]').val('70');

    } else if ($("input[name='countryISO']").val() === 'GAB') {
        $(this).find('input[name="countryID"]').val('71');

    } else if ($("input[name='countryISO']").val() === 'GMB') {
        $(this).find('input[name="countryID"]').val('72');

    } else if ($("input[name='countryISO']").val() === 'GEO') {
        $(this).find('input[name="countryID"]').val('73');

    } else if ($("input[name='countryISO']").val() === 'DEU') {
        $(this).find('input[name="countryID"]').val('74');

    } else if ($("input[name='countryISO']").val() === 'GHA') {
        $(this).find('input[name="countryID"]').val('75');

    } else if ($("input[name='countryISO']").val() === 'GIB') {
        $(this).find('input[name="countryID"]').val('76');

    } else if ($("input[name='countryISO']").val() === 'GRC') {
        $(this).find('input[name="countryID"]').val('77');

    } else if ($("input[name='countryISO']").val() === 'GRL') {
        $(this).find('input[name="countryID"]').val('78');

    } else if ($("input[name='countryISO']").val() === 'GRD') {
        $(this).find('input[name="countryID"]').val('79');

    } else if ($("input[name='countryISO']").val() === 'GLP') {
        $(this).find('input[name="countryID"]').val('80');

    } else if ($("input[name='countryISO']").val() === 'GUM') {
        $(this).find('input[name="countryID"]').val('81');

    } else if ($("input[name='countryISO']").val() === 'GTM') {
        $(this).find('input[name="countryID"]').val('82');

    } else if ($("input[name='countryISO']").val() === 'GIN') {
        $(this).find('input[name="countryID"]').val('83');

    } else if ($("input[name='countryISO']").val() === 'GNB') {
        $(this).find('input[name="countryID"]').val('84');

    } else if ($("input[name='countryISO']").val() === 'GUY') {
        $(this).find('input[name="countryID"]').val('85');

    } else if ($("input[name='countryISO']").val() === 'HTI') {
        $(this).find('input[name="countryID"]').val('86');

    } else if ($("input[name='countryISO']").val() === 'VAT') {
        $(this).find('input[name="countryID"]').val('87');

    } else if ($("input[name='countryISO']").val() === 'HND') {
        $(this).find('input[name="countryID"]').val('88');

    } else if ($("input[name='countryISO']").val() === 'HKG') {
        $(this).find('input[name="countryID"]').val('89');

    } else if ($("input[name='countryISO']").val() === 'HUN') {
        $(this).find('input[name="countryID"]').val('90');

    } else if ($("input[name='countryISO']").val() === 'ISL') {
        $(this).find('input[name="countryID"]').val('91');

    } else if ($("input[name='countryISO']").val() === 'IND') {
        $(this).find('input[name="countryID"]').val('92');

    } else if ($("input[name='countryISO']").val() === 'IDN') {
        $(this).find('input[name="countryID"]').val('93');

    } else if ($("input[name='countryISO']").val() === 'IRN') {
        $(this).find('input[name="countryID"]').val('94');

    } else if ($("input[name='countryISO']").val() === 'GAB') {
        $(this).find('input[name="countryID"]').val('95');

    } else if ($("input[name='countryISO']").val() === 'IRL') {
        $(this).find('input[name="countryID"]').val('96');

    } else if ($("input[name='countryISO']").val() === 'ISR') {
        $(this).find('input[name="countryID"]').val('97');

    } else if ($("input[name='countryISO']").val() === 'ITA') {
        $(this).find('input[name="countryID"]').val('98');

    } else if ($("input[name='countryISO']").val() === 'JAM') {
        $(this).find('input[name="countryID"]').val('99');

    } else if ($("input[name='countryISO']").val() === 'JPN') {
        $(this).find('input[name="countryID"]').val('100');

    } else if ($("input[name='countryISO']").val() === 'JOR') {
        $(this).find('input[name="countryID"]').val('101');

    } else if ($("input[name='countryISO']").val() === 'KAZ') {
        $(this).find('input[name="countryID"]').val('102');

    } else if ($("input[name='countryISO']").val() === 'KEN') {
        $(this).find('input[name="countryID"]').val('103');

    } else if ($("input[name='countryISO']").val() === 'KIR') {
        $(this).find('input[name="countryID"]').val('104');

    } else if ($("input[name='countryISO']").val() === 'KOR') {
        $(this).find('input[name="countryID"]').val('105');

    } else if ($("input[name='countryISO']").val() === 'PRK') {
        $(this).find('input[name="countryID"]').val('106');

    } else if ($("input[name='countryISO']").val() === 'KWT') {
        $(this).find('input[name="countryID"]').val('107');

    } else if ($("input[name='countryISO']").val() === 'KGZ') {
        $(this).find('input[name="countryID"]').val('108');

    } else if ($("input[name='countryISO']").val() === 'LAO') {
        $(this).find('input[name="countryID"]').val('109');

    } else if ($("input[name='countryISO']").val() === 'LVA') {
        $(this).find('input[name="countryID"]').val('110');

    } else if ($("input[name='countryISO']").val() === 'LBN') {
        $(this).find('input[name="countryID"]').val('111');

    } else if ($("input[name='countryISO']").val() === 'LSO') {
        $(this).find('input[name="countryID"]').val('112');

    } else if ($("input[name='countryISO']").val() === 'LBR') {
        $(this).find('input[name="countryID"]').val('113');

    } else if ($("input[name='countryISO']").val() === 'LBY') {
        $(this).find('input[name="countryID"]').val('114');

    } else if ($("input[name='countryISO']").val() === 'LIE') {
        $(this).find('input[name="countryID"]').val('115');

    } else if ($("input[name='countryISO']").val() === 'LTU') {
        $(this).find('input[name="countryID"]').val('116');

    } else if ($("input[name='countryISO']").val() === 'LUX') {
        $(this).find('input[name="countryID"]').val('117');

    } else if ($("input[name='countryISO']").val() === 'MAC') {
        $(this).find('input[name="countryID"]').val('118');

    } else if ($("input[name='countryISO']").val() === 'MKD') {
        $(this).find('input[name="countryID"]').val('119');

    } else if ($("input[name='countryISO']").val() === 'MDG') {
        $(this).find('input[name="countryID"]').val('120');

    } else if ($("input[name='countryISO']").val() === 'MWI') {
        $(this).find('input[name="countryID"]').val('121');

    } else if ($("input[name='countryISO']").val() === 'MYS') {
        $(this).find('input[name="countryID"]').val('122');

    } else if ($("input[name='countryISO']").val() === 'MDV') {
        $(this).find('input[name="countryID"]').val('123');

    } else if ($("input[name='countryISO']").val() === 'MLI') {
        $(this).find('input[name="countryID"]').val('124');

    } else if ($("input[name='countryISO']").val() === 'MLT') {
        $(this).find('input[name="countryID"]').val('125');

    } else if ($("input[name='countryISO']").val() === 'MHL') {
        $(this).find('input[name="countryID"]').val('126');

    } else if ($("input[name='countryISO']").val() === 'MTQ') {
        $(this).find('input[name="countryID"]').val('127');

    } else if ($("input[name='countryISO']").val() === 'MRT') {
        $(this).find('input[name="countryID"]').val('128');

    } else if ($("input[name='countryISO']").val() === 'MUS') {
        $(this).find('input[name="countryID"]').val('129');

    } else if ($("input[name='countryISO']").val() === 'MEX') {
        $(this).find('input[name="countryID"]').val('130');

    } else if ($("input[name='countryISO']").val() === 'FSM') {
        $(this).find('input[name="countryID"]').val('131');

    } else if ($("input[name='countryISO']").val() === 'MDA') {
        $(this).find('input[name="countryID"]').val('132');

    } else if ($("input[name='countryISO']").val() === 'MCO') {
        $(this).find('input[name="countryID"]').val('133');

    } else if ($("input[name='countryISO']").val() === 'MNG') {
        $(this).find('input[name="countryID"]').val('134');

    } else if ($("input[name='countryISO']").val() === 'MSR') {
        $(this).find('input[name="countryID"]').val('135');

    } else if ($("input[name='countryISO']").val() === 'MAR') {
        $(this).find('input[name="countryID"]').val('136');

    } else if ($("input[name='countryISO']").val() === 'MOZ') {
        $(this).find('input[name="countryID"]').val('137');

    } else if ($("input[name='countryISO']").val() === 'MMR') {
        $(this).find('input[name="countryID"]').val('138');

    } else if ($("input[name='countryISO']").val() === 'NAM') {
        $(this).find('input[name="countryID"]').val('139');

    } else if ($("input[name='countryISO']").val() === 'NRU') {
        $(this).find('input[name="countryID"]').val('140');

    } else if ($("input[name='countryISO']").val() === 'NPL') {
        $(this).find('input[name="countryID"]').val('141');

    } else if ($("input[name='countryISO']").val() === 'NLD') {
        $(this).find('input[name="countryID"]').val('142');

    } else if ($("input[name='countryISO']").val() === 'ANT') {
        $(this).find('input[name="countryID"]').val('143');

    } else if ($("input[name='countryISO']").val() === 'NCL') {
        $(this).find('input[name="countryID"]').val('144');

    } else if ($("input[name='countryISO']").val() === 'NZL') {
        $(this).find('input[name="countryID"]').val('145');

    } else if ($("input[name='countryISO']").val() === 'NIC') {
        $(this).find('input[name="countryID"]').val('146');

    } else if ($("input[name='countryISO']").val() === 'NER') {
        $(this).find('input[name="countryID"]').val('147');

    } else if ($("input[name='countryISO']").val() === 'NGA') {
        $(this).find('input[name="countryID"]').val('148');

    } else if ($("input[name='countryISO']").val() === 'NIU') {
        $(this).find('input[name="countryID"]').val('149');

    } else if ($("input[name='countryISO']").val() === 'NFK') {
        $(this).find('input[name="countryID"]').val('150');

    } else if ($("input[name='countryISO']").val() === 'MNP') {
        $(this).find('input[name="countryID"]').val('151');

    } else if ($("input[name='countryISO']").val() === 'NOR') {
        $(this).find('input[name="countryID"]').val('152');

    } else if ($("input[name='countryISO']").val() === 'OMN') {
        $(this).find('input[name="countryID"]').val('153');

    } else if ($("input[name='countryISO']").val() === 'PAK') {
        $(this).find('input[name="countryID"]').val('154');

    } else if ($("input[name='countryISO']").val() === 'PLW') {
        $(this).find('input[name="countryID"]').val('155');

    } else if ($("input[name='countryISO']").val() === 'PAN') {
        $(this).find('input[name="countryID"]').val('156');

    } else if ($("input[name='countryISO']").val() === 'PNG') {
        $(this).find('input[name="countryID"]').val('157');

    } else if ($("input[name='countryISO']").val() === 'PRY') {
        $(this).find('input[name="countryID"]').val('158');

    } else if ($("input[name='countryISO']").val() === 'PER') {
        $(this).find('input[name="countryID"]').val('159');

    } else if ($("input[name='countryISO']").val() === 'PHL') {
        $(this).find('input[name="countryID"]').val('160');

    } else if ($("input[name='countryISO']").val() === 'PCN') {
        $(this).find('input[name="countryID"]').val('161');

    } else if ($("input[name='countryISO']").val() === 'POL') {
        $(this).find('input[name="countryID"]').val('162');

    } else if ($("input[name='countryISO']").val() === 'PRT') {
        $(this).find('input[name="countryID"]').val('163');

    } else if ($("input[name='countryISO']").val() === 'PRI') {
        $(this).find('input[name="countryID"]').val('164');

    } else if ($("input[name='countryISO']").val() === 'QAT') {
        $(this).find('input[name="countryID"]').val('165');

    } else if ($("input[name='countryISO']").val() === 'REU') {
        $(this).find('input[name="countryID"]').val('166');

    } else if ($("input[name='countryISO']").val() === 'ROU') {
        $(this).find('input[name="countryID"]').val('167');

    } else if ($("input[name='countryISO']").val() === 'RUS') {
        $(this).find('input[name="countryID"]').val('168');

    } else if ($("input[name='countryISO']").val() === 'RWA') {
        $(this).find('input[name="countryID"]').val('169');

    } else if ($("input[name='countryISO']").val() === 'SHN') {
        $(this).find('input[name="countryID"]').val('170');

    } else if ($("input[name='countryISO']").val() === 'KNA') {
        $(this).find('input[name="countryID"]').val('171');

    } else if ($("input[name='countryISO']").val() === 'LCA') {
        $(this).find('input[name="countryID"]').val('172');

    } else if ($("input[name='countryISO']").val() === 'SPM') {
        $(this).find('input[name="countryID"]').val('173');

    } else if ($("input[name='countryISO']").val() === 'VCT') {
        $(this).find('input[name="countryID"]').val('174');

    } else if ($("input[name='countryISO']").val() === 'WSM') {
        $(this).find('input[name="countryID"]').val('175');

    } else if ($("input[name='countryISO']").val() === 'SMR') {
        $(this).find('input[name="countryID"]').val('176');

    } else if ($("input[name='countryISO']").val() === 'STP') {
        $(this).find('input[name="countryID"]').val('177');

    } else if ($("input[name='countryISO']").val() === 'SAU') {
        $(this).find('input[name="countryID"]').val('178');

    } else if ($("input[name='countryISO']").val() === 'SEN') {
        $(this).find('input[name="countryID"]').val('179');

    } else if ($("input[name='countryISO']").val() === 'SYC') {
        $(this).find('input[name="countryID"]').val('180');

    } else if ($("input[name='countryISO']").val() === 'SLE') {
        $(this).find('input[name="countryID"]').val('181');

    } else if ($("input[name='countryISO']").val() === 'SGP') {
        $(this).find('input[name="countryID"]').val('182');

    } else if ($("input[name='countryISO']").val() === 'SVK') {
        $(this).find('input[name="countryID"]').val('183');

    } else if ($("input[name='countryISO']").val() === 'SVN') {
        $(this).find('input[name="countryID"]').val('184');

    } else if ($("input[name='countryISO']").val() === 'SLB') {
        $(this).find('input[name="countryID"]').val('185');

    } else if ($("input[name='countryISO']").val() === 'SOM') {
        $(this).find('input[name="countryID"]').val('186');

    } else if ($("input[name='countryISO']").val() === 'ZAF') {
        $(this).find('input[name="countryID"]').val('187');

    } else if ($("input[name='countryISO']").val() === 'ESP') {
        $(this).find('input[name="countryID"]').val('188');

    } else if ($("input[name='countryISO']").val() === 'LKA') {
        $(this).find('input[name="countryID"]').val('189');

    } else if ($("input[name='countryISO']").val() === 'SDN') {
        $(this).find('input[name="countryID"]').val('190');

    } else if ($("input[name='countryISO']").val() === 'SUR') {
        $(this).find('input[name="countryID"]').val('191');

    } else if ($("input[name='countryISO']").val() === 'SJM') {
        $(this).find('input[name="countryID"]').val('192');

    } else if ($("input[name='countryISO']").val() === 'SWZ') {
        $(this).find('input[name="countryID"]').val('193');

    } else if ($("input[name='countryISO']").val() === 'SWE') {
        $(this).find('input[name="countryID"]').val('194');

    } else if ($("input[name='countryISO']").val() === 'SYR') {
        $(this).find('input[name="countryID"]').val('195');

    } else if ($("input[name='countryISO']").val() === 'MEX') {
        $(this).find('input[name="countryID"]').val('196');

    } else if ($("input[name='countryISO']").val() === 'TWN') {
        $(this).find('input[name="countryID"]').val('197');

    } else if ($("input[name='countryISO']").val() === 'TJK') {
        $(this).find('input[name="countryID"]').val('198');

    } else if ($("input[name='countryISO']").val() === 'TZA') {
        $(this).find('input[name="countryID"]').val('199');

    } else if ($("input[name='countryISO']").val() === 'THA') {
        $(this).find('input[name="countryID"]').val('200');

    } else if ($("input[name='countryISO']").val() === 'TGO') {
        $(this).find('input[name="countryID"]').val('201');

    } else if ($("input[name='countryISO']").val() === 'TKL') {
        $(this).find('input[name="countryID"]').val('202');

    } else if ($("input[name='countryISO']").val() === 'TON') {
        $(this).find('input[name="countryID"]').val('203');

    } else if ($("input[name='countryISO']").val() === 'TTO') {
        $(this).find('input[name="countryID"]').val('204');

    } else if ($("input[name='countryISO']").val() === 'TUN') {
        $(this).find('input[name="countryID"]').val('205');

    } else if ($("input[name='countryISO']").val() === 'TUR') {
        $(this).find('input[name="countryID"]').val('206');

    } else if ($("input[name='countryISO']").val() === 'TKM') {
        $(this).find('input[name="countryID"]').val('207');

    } else if ($("input[name='countryISO']").val() === 'TCA') {
        $(this).find('input[name="countryID"]').val('208');

    } else if ($("input[name='countryISO']").val() === 'TUV') {
        $(this).find('input[name="countryID"]').val('209');

    } else if ($("input[name='countryISO']").val() === 'UGA') {
        $(this).find('input[name="countryID"]').val('210');

    } else if ($("input[name='countryISO']").val() === 'UKR') {
        $(this).find('input[name="countryID"]').val('211');

    } else if ($("input[name='countryISO']").val() === 'ARE') {
        $(this).find('input[name="countryID"]').val('212');

    } else if ($("input[name='countryISO']").val() === 'GBR') {
        $(this).find('input[name="countryID"]').val('213');

    } else if ($("input[name='countryISO']").val() === 'USA') {
        $(this).find('input[name="countryID"]').val('214');

    } else if ($("input[name='countryISO']").val() === 'URY') {
        $(this).find('input[name="countryID"]').val('215');

    } else if ($("input[name='countryISO']").val() === 'UZB') {
        $(this).find('input[name="countryID"]').val('216');

    } else if ($("input[name='countryISO']").val() === 'VUT') {
        $(this).find('input[name="countryID"]').val('217');

    } else if ($("input[name='countryISO']").val() === 'VEN') {
        $(this).find('input[name="countryID"]').val('218');

    } else if ($("input[name='countryISO']").val() === 'VNM') {
        $(this).find('input[name="countryID"]').val('219');

    } else if ($("input[name='countryISO']").val() === 'VGB') {
        $(this).find('input[name="countryID"]').val('220');

    } else if ($("input[name='countryISO']").val() === 'VIR') {
        $(this).find('input[name="countryID"]').val('221');

    } else if ($("input[name='countryISO']").val() === 'WLF') {
        $(this).find('input[name="countryID"]').val('222');

    } else if ($("input[name='countryISO']").val() === 'ESH') {
        $(this).find('input[name="countryID"]').val('223');

    } else if ($("input[name='countryISO']").val() === 'YEM') {
        $(this).find('input[name="countryID"]').val('224');

    } else if ($("input[name='countryISO']").val() === 'ZMB') {
        $(this).find('input[name="countryID"]').val('225');

    } else if ($("input[name='countryISO']").val() === 'ZWE') {
        $(this).find('input[name="countryID"]').val('226');

    } else { $(this).find('input[name="countryID"]').val('undefined'); }

});
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
} else {
$("input[name='agent']").val('false');
$("input[name='ratingID']").val('43584');
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
$("input[name='form-id']").val('location');
} else if (url.includes('/team') || url.includes('/equipo') || url.includes('/equipe')) {
$("input[name='form-id']").val('team');
} else if (url.includes('/blog')) {
$("input[name='form-id']").val('blog');
} else if (url.includes('/press') || url.includes('/prensa')) {
$("input[name='form-id']").val('press');
} else if (url.includes('/customer-registration')) {
$("input[name='form-id']").val('customer registration');
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
if (source == "Presentation" || source == "mls") {
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