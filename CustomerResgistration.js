$('.acknowledgement').on('click', function() {
    $('[broker-form]').addClass('hidden');
    if ($('.acknowledgement div.w--redirected-checked').length === 1) {
        $('[broker-form]').removeClass('hidden');
    }
});

$('.broker-button').on('click', function() {
    if (!$('.broker-button').is('.clicked')) {
        $(this).addClass('clicked');
        $('.broker-form-section').addClass('open');
        $("input[name='has-broker']").trigger('click');
        $('.broker-form-section input[agent-broker]').attr('required', '1');
    } else if ($('.broker-button').is('.clicked')) {
        $(this).removeClass('clicked');
        $('.broker-form-section').removeClass('open');
        $("input[name='has-broker']").trigger('click');
        $('.broker-form-section input[agent-broker]').removeAttr('required');
    }
});

$('[name="agent-country"]').on('click', function() {
    $(this).closest('form').find('[name="agentcountryID"]').val($(this).find('option:selected').index());
    if ($('[name="agentcountryID"]').val() === "0" || $('[name="agentcountryID"]').val() < "0") { $('[name="agentcountryID"]').val('214'); }
});
// EVENT UTM

// Cookies.set('medium', 'Event', { expires: 2 });
// Cookies.set('campaign', 'ISG Brazilian Team', { expires: 1/5 });
// Cookies.set('term', '05-1 05-2 23', { expires: 2 });

$("input[name='utm_source']").val('Customer Registration');
$("input[name='utm_medium']").val(Cookies.get('medium'));
$("input[name='utm_campaign']").val(Cookies.get('campaign'));
$("input[name='utm_term']").val(Cookies.get('term'));