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





$('.restart-form').on('click', function() {
$(this).closest('form')[0].reset();
$('.cr-sect-1').addClass('open');
$('[required]').removeAttr('required');
$('.restart-form').removeClass('open');
$('.associate').removeClass('open');
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