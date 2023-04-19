$('.nearby-link').on('click', function() {
    $(this).toggleClass('active');

    if ($('.nearby-link.active').lenght) {
        $('.map-selector').addClass('hidden');
    }

    if ($('.nearby-link.active').is('[fine-dining]')) {
        $("a[selector-type='fine-dining']").removeClass('hidden');
    }
    if ($('.nearby-link.active').is('[shopping]')) {
        $("a[selector-type='shopping']").removeClass('hidden');
    }
    if ($('.nearby-link.active').is('[parks]')) {
        $("a[selector-type='parks']").removeClass('hidden');
    }
    if ($('.nearby-link.active').is('[education]')) {
        $("a[selector-type='education']").removeClass('hidden');
    }
    if (!$('.nearby-link.active').lenght) { $('a[selector-type]').removeClass('hidden'); }
});

$('.map-selector').on('click', function() {
    $('.map-selector').removeClass('active');
    $(this).addClass('active');
    $('.iframe-map iframe').attr('src', $(this).attr('map') + '&zoom=-1');
});