$('.acknowledgement').on('click', function() {
    $('[broker-form]').addClass('hidden');
    if ($('.acknowledgement div.w--redirected-checked').length === 1) {
        $('[broker-form]').removeClass('hidden');
    }
});

$('.broker-button').on('click', function() {
    $(this).toggleClass('clicked');
    if ($('.broker-button').is('.clicked')) {
        $('.broker-form-section').addClass('open');
        $("input[name='is-broker']").closest('label').trigger('click');
        $('.broker-form-section input[broker]').attr('required', '1');
    } else if (!$('.broker-button').is('.clicked')) {
        $('.broker-form-section').removeClass('open');
        $('.broker-form-section input[broker]').removeAttr('required');
    }
});

// EVENT UTM

Cookies.set('source', 'Customer Registration');
Cookies.set('medium', 'Event', { expires: 2 });
Cookies.set('campaign', 'ISG Brazilian Team', { expires: 2 });
Cookies.set('term', '05-1 05-2 23', { expires: 2 });
$("input[name='utm_source']").val(Cookies.get('source'));
$("input[name='utm_medium']").val(Cookies.get('medium'));
$("input[name='utm_campaign']").val(Cookies.get('campaign'));
$("input[name='utm_term']").val(Cookies.get('term'));