$('.nearby-link').on('click', function() {
    $(this).toggleClass('active');

    if ($('.nearby-link.active').length) {
        $('.map-selector').addClass('hidden');
    }

    if ($('.nearby-link.active').is('[fine-dining]')) {
        $("a[selector-type='fine-dining']").removeClass('hidden');
    }
    if ($('.nearby-link.active').is('[shopping]')) {
        $("a[selector-type='shopping']").removeClass('hidden');
    }
    if ($('.nearby-link.active').is('[attractions]')) {
        $("a[selector-type='attractions']").removeClass('hidden');
    }
    if ($('.nearby-link.active').is('[education]')) {
        $("a[selector-type='education']").removeClass('hidden');
    }
    if (!$('.nearby-link.active').length) { $('.map-selector').removeClass('hidden'); }
});

$('.map-selector').on('click', function() {
    $(this).siblings('.map-selector').removeClass('active');
    if ($(this).is('.active')) {
        $(this).removeClass('active');
        $('.iframe-map iframe').attr('src', '');
    } else {
        $(this).addClass('active');
        $('.iframe-map iframe').attr('src', $(this).attr('map') + '&zoom=-1');
    }
});