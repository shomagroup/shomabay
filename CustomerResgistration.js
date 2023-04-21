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
        $('.broker-form-section input[broker]').attr('required', '1');
    } else if (!$('.broker-button').is('.clicked')) {
        $('.broker-form-section').removeClass('open');
        $('.broker-form-section input[broker]').removeAttr('required');
    }
});