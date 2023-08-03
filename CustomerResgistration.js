(function() {
var cInfo = document.querySelector(".c-info");
var cursorActive = function cursorActive(event) {
cInfo.style.left = event.clientX + "px";
cInfo.style.top = event.clientY + "px";
};
window.addEventListener("mousemove", cursorActive);
})();


$('[info]').on('mouseover mouseenter', function() {
    $('.c-info').text($(this).attr('info'));
    $('.c-info').addClass('active');
});
$('[info]').on('mouseout mouseleave', function() {
    $('.c-info').removeClass('active');
});

$('.acknowledgement').on('click', function() {
    $('[broker-form]').addClass('hidden');
    if ($('.acknowledgement div.w--redirected-checked').length === 1) {
        $('[broker-form]').removeClass('hidden');
    }
});

$('input[name="dateStamer"]').attr('type', 'datetime-local');
$('.agent-registration-wrapper, .buyer-registration-wrapper').removeClass('open');
$('.cr-sect-1').removeClass('extended');
$('restart-form').removeClass('open');
$('.associate').removeClass('open');

///
$('select[name="utmHandler"]').on('change', function() {
if (!($('select[name="utmHandler"] option:selected').val() == '')) {
if (!($(this).find('option:selected').val() == 'No')) {
$('.associate').addClass('open');
$('input[name="dateStamer"]').attr('required', '1');
if (!($('select[name="salesAssociate"]')
.find('option:selected').val() == 'noSA')) {
$('select[name="salesAssociate"]').closest('form')
.find('input[name="utm_campaign"]').val($('select[name="salesAssociate"]')
.find('option:selected').text());
}

$('input[name="dateStamer"]').closest('form').find('input[name="utm_term"]')
.val($('input[name="dateStamer"]').val().replace('T', ' T '));

cleanDeny();
if ($(this).find('option:selected').val() == 'PresentationOnline') {
$(this).closest('form').find('input[name="utm_source"]').val('Presentation');
$(this).closest('form').find('input[name="utm_medium"]').val('Online');
} else if ($(this).find('option:selected').val() == 'PresentationInPerson') {
$(this).closest('form').find('input[name="utm_source"]').val('Presentation');
$(this).closest('form').find('input[name="utm_medium"]').val('In Person');
} else if ($(this).find('option:selected').val() == 'Webinar') {
$(this).closest('form').find('input[name="utm_source"]').val('Webinar');
$(this).closest('form').find('input[name="utm_medium"]').val('');
} else if ($(this).find('option:selected').val() == 'Dinner') {
$(this).closest('form').find('input[name="utm_source"]').val('Dinner');
$(this).closest('form').find('input[name="utm_medium"]').val('');
} else if ($(this).find('option:selected').val() == 'BrokerPreview') {
$(this).closest('form').find('input[name="utm_source"]').val('Broker Preview');
$(this).closest('form').find('input[name="utm_medium"]').val('');
}

} else if ($(this).find('option:selected').val() == 'No'){
cleanDeny();
$('.associate:not(:last-child)').addClass('open');
$('.associate:last-child').removeClass('open');
$('input[name="dateStamer"]').removeAttr('required');
$(this).closest('form').find('input[name="utm_source"]').val('');
$(this).closest('form').find('input[name="utm_medium"]').val('');
$(this).closest('form').find('input[name="utm_campaign"]').val('');
$(this).closest('form').find('input[name="utm_term"]').val('');
}} else {deny();}
});


$('select[name="salesAssociate"]').on('change', function() {
cleanDeny();
if (!($(this).find('option:selected').val() == 'noSA')) {
$(this).closest('form').find('input[name="utm_campaign"]').val($(this)
.find('option:selected').text());
} else {
$(this).closest('form').find('input[name="utm_campaign"]').val('');
}
});

$('input[name="dateStamer"]').on('input', function() {
cleanDeny();
$(this).closest('form').find('input[name="utm_term"]').val($(this).val()
.replace('T', ' T '));
});

var cleanDeny = function() {
$('.pleasefill').removeClass('active');
$('.cr-sect-1').removeClass('extended');
}

var deny = function() {
$('.pleasefill').addClass('active');
$('.cr-sect-1.open').addClass('extended');
};

// YES IS CLICKED
$('.cr-answer[yes]').on('click', function() {
if (!($('select[name="utmHandler"] option:selected').val() == '')) {
	if ($('select[name="utmHandler"] option:selected').val() == 'No' && 
  !($('select[name="salesAssociate"] option:selected').val() == '')) {
  //pass
  cleanDeny();
  $('.cr-sect-1').removeClass('open');
  $('.agent-registration-wrapper').addClass('open');
  $('.agent-registration-wrapper.open [agent-required]').attr('required', '1');
  $('.agent-registration-wrapper.open .acknowledgement input').attr('required', '1');
  $("input[name='isbroker']").trigger('click');
  $('.restart-form').addClass('open');
  } else if (
  !($('select[name="salesAssociate"] option:selected').val() == '') &&
  !($('input[name="dateStamer"]').val() == '')) {
  // pass
  cleanDeny();
  $('.cr-sect-1').removeClass('open');
  $('.agent-registration-wrapper').addClass('open');
  $('.agent-registration-wrapper.open [agent-required]').attr('required', '1');
  $('.agent-registration-wrapper.open .acknowledgement input').attr('required', '1');
  $("input[name='isbroker']").trigger('click');
  $('.restart-form').addClass('open');
  } else {
  //deny
  deny();
  }
} else {
//deny
deny();
}
});

// NO IS CLICKED
$('.cr-answer[no]').on('click', function() {
if (!($('select[name="utmHandler"] option:selected').val() == '')) {
	if ($('select[name="utmHandler"] option:selected').val() == 'No' && 
  !($('select[name="salesAssociate"] option:selected').val() == '')) {
  //pass
  cleanDeny();
  $('.cr-sect-1').removeClass('open');
  $('.buyer-registration-wrapper').addClass('open');
  $('.buyer-registration-wrapper.open [buyer-required]').attr('required', '1');
  $('.buyer-registration-wrapper.open .acknowledgement input').attr('required', '1');
  $('.restart-form').addClass('open');
  } else if (
  !($('select[name="salesAssociate"] option:selected').val() == '') &&
  !($('input[name="dateStamer"]').val() == '')) {
  // pass
  cleanDeny();
  $('.cr-sect-1').removeClass('open');
  $('.buyer-registration-wrapper').addClass('open');
  $('.buyer-registration-wrapper.open [buyer-required]').attr('required', '1');
  $('.buyer-registration-wrapper.open .acknowledgement input').attr('required', '1');
  $('.restart-form').addClass('open');
  } else {
  //deny
  deny();
  }
} else {
//deny
deny();
}
});

$('.restart-form').on('click', function() {
$(this).closest('form')[0].reset();
$('.cr-sect-1').addClass('open');
$('[required]').removeAttr('required');
$('.restart-form').removeClass('open');
$('.associate').removeClass('open');
$('[broker-form]').addClass('hidden');
$('.agent-registration-wrapper, .buyer-registration-wrapper')
.removeClass('open');
});


$('.client-button').on('click', function() {
    if (!$('.client-button').is('.clicked')) {
        $(this).addClass('clicked');
        $('.client-form-section').addClass('open');
        $("input[name='hasClient']").trigger('click');
        $('.client-form-section input[addClient]').attr('required', '1');
    } else if ($('.client-button').is('.clicked')) {
        $(this).removeClass('clicked');
        $('.client-form-section').removeClass('open');
        $("input[name='hasClient']").trigger('click');
        $('.client-form-section input[addClient]').removeAttr('required');
    }
});

$('.broker-button').on('click', function() {
    if (!$('.broker-button').is('.clicked')) {
        $(this).addClass('clicked');
        $('.broker-form-section').addClass('open');
        $("input[name='hasBroker']").trigger('click');
        $('.broker-form-section input[addBroker]').attr('required', '1');
    } else if ($('.broker-button').is('.clicked')) {
        $(this).removeClass('clicked');
        $('.broker-form-section').removeClass('open');
        $("input[name='hasBroker']").trigger('click');
        $('.broker-form-section input[addBroker]').removeAttr('required');
    }
});

$('form[data-name="customer-registration"] select[country] option')
.each(function() {$(this).attr('countryid', $(this).index());});

$('input[name="agentCountryID"], input[name="buyerCountryID"]').val('0');

$('select[agentCountry]').on('change', function() {
$(this).closest('form').find('input[name="agentCountryID"]').val($(this)
.find('option:selected').attr('countryid'));
});

$('select[buyerCountry]').on('change', function() {
$(this).closest('form').find('input[name="buyerCountryID"]').val($(this)
.find('option:selected').attr('countryid'));
});

$('.reload-form').on('click', function() {
location.reload();
});