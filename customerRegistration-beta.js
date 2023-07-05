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