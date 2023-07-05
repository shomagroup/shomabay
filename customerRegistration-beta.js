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

$('form[data-name="customer-registration"] select[name="country"] option').each(function() {
    $(this).attr('countryid', $(this).index());
});
$('select[name="agent-country"] option').each(function() {
    $(this).attr('countryid', $(this).index());
});

$('form[data-name="customer-registration"]').on('click touchstart', function() {
    $(this).find('[name="countryID"]').val($(this).find('select[name="country"] option:selected').attr('countryid'));
    $(this).find('[name="agentcountryID"]').val($(this).find('select[name="agent-country"] option:selected').attr('countryid'));
});

// EVENT UTM

//term

// Cookies.set('medium', 'Event', { expires: 2 });
// Cookies.set('campaign', 'ISG Brazilian Team', { expires: 1/5 });
// Cookies.set('term', '05-1 05-2 23', { expires: 1/5 });

//$("input[name='utm_source']").val('Customer Registration');
//$("input[name='utm_medium']").val(Cookies.get('medium'));
//$("input[name='utm_campaign']").val(Cookies.get('campaign'));
//$("input[name='utm_term']").val(Cookies.get('term'));



