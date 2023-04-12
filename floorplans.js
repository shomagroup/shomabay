$('.floorplan').attr('oncontextmenu', 'return false;');

$('.fp-control-link').on('click', function() {

    $('.floorplan').removeClass('active');

    if ($(this).is('.active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }

    if ($('.fp-control-link[studio]').is('.active')) {
        $('.floorplan[studio]').addClass('active');
    }
    if ($('.fp-control-link[bed-1]').is('.active')) {
        $('.floorplan[bed-1]').addClass('active');
    }
    if ($('.fp-control-link[bed-2]').is('.active')) {
        $('.floorplan[bed-2]').addClass('active');
    }
    if ($('.fp-control-link[bed-3]').is('.active')) {
        $('.floorplan[bed-3]').addClass('active');
    }
    if ($('.fp-control-link[penth]').is('.active')) {
        $('.floorplan[penth]').addClass('active');
    }

    if (!$('.floorplan.active').length) {
        $('.floorplan').addClass('active');
    }
});