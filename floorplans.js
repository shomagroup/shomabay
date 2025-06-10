$('.floorplan').attr('oncontextmenu', 'return false;');

$('.fp-control-link').on('click', function() {

    $('.floorplan').removeClass('active');

    if ($(this).is('.active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }

    if ($('.fp-control-link[studio]').is('.active')) {
        $('.floorplan[fp="studio"]').addClass('active');
    }
    if ($('.fp-control-link[bed-1]').is('.active')) {
        $('.floorplan[fp="bed-1"]').addClass('active');
    }
    if ($('.fp-control-link[bed-2]').is('.active')) {
        $('.floorplan[fp="bed-2"]').addClass('active');
    }
    if ($('.fp-control-link[bed-3]').is('.active')) {
        $('.floorplan[fp="bed-3"]').addClass('active');
    }
    if ($('.fp-control-link[penth]').is('.active')) {
        $('.floorplan[fp="penth"]').addClass('active');
    }
    if ($('.fp-control-link[low-penth]').is('.active')) {
        $('.floorplan[fp="low-penth"]').addClass('active');
    }

    if (!$('.floorplan.active').length) {
        $('.floorplan').addClass('active');
    }
});