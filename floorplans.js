// CONTROL MENU
$('.fp-control-link').on('click', function() {
    $('.fp-control-link, .fp-container [wrapper], .floorplan').removeClass('selected');
    $('.floorplan').removeClass('prev');
    $('.floorplan').removeClass('next');
    $(this).addClass('selected');

    if ($(this).is('[studio]')) { $('.studio-wrapper').addClass('selected');
        $('.fp-selector').attr('selector', 'stu'); }
    if ($(this).is('[bed-1]')) { $('.onebed-wrapper').addClass('selected');
        $('.fp-selector').attr('selector', 'bed-1'); }
    if ($(this).is('[bed-2]')) { $('.twobed-wrapper').addClass('selected');
        $('.fp-selector').attr('selector', 'bed-2'); }
    if ($(this).is('[penth]')) { $('.penth-wrapper').addClass('selected');
        $('.fp-selector').attr('selector', 'penth'); }

    $('[wrapper].selected .floorplan:first-child').addClass('selected');
    $('[wrapper].selected .floorplan').last().addClass('prev');
    $('.floorplan.selected').next().addClass('next');
});

// Floorplan Next
$('#fp-next').on('click', function() {
    $('[wrapper].selected .floorplan').removeClass('prev');
    $('[wrapper].selected .floorplan').removeClass('next');
    if ($('[wrapper].selected .floorplan.selected').is(':last-child')) {
        $('[wrapper].selected .floorplan').first().addClass('selected');
        $('[wrapper].selected .floorplan.selected').last().removeClass('selected');
    } else {
        $('[wrapper].selected .floorplan.selected').next().addClass('selected');
        $('[wrapper].selected .floorplan.selected').first().removeClass('selected');
    }
    $('[wrapper].selected .floorplan.selected').prev().addClass('prev');
    $('[wrapper].selected .floorplan.selected').next().addClass('next');
    if ($('.floorplan.selected').is(':last-child')) {
        $('[wrapper].selected .floorplan').first().addClass('next');
    }
    if ($('[wrapper].selected .floorplan.selected').is(':first-child')) {
        $('[wrapper].selected .floorplan').last().addClass('prev');
    }
});

// Floorplan prev
$('#fp-prev').on('click', function() {
    $('[wrapper].selected .floorplan').removeClass('prev');
    $('[wrapper].selected .floorplan').removeClass('next');
    if ($('[wrapper].selected .floorplan.selected').is(':first-child')) {
        $('[wrapper].selected .floorplan').last().addClass('selected');
        $('[wrapper].selected .floorplan.selected').first().removeClass('selected');
    } else {
        $('[wrapper].selected .floorplan.selected').prev().addClass('selected');
        $('[wrapper].selected .floorplan.selected').last().removeClass('selected');
    }
    $('[wrapper].selected .floorplan.selected').prev().addClass('prev');
    $('[wrapper].selected .floorplan.selected').next().addClass('next');
    if ($('[wrapper].selected .floorplan.selected').is(':first-child')) {
        $('[wrapper].selected .floorplan').last().addClass('prev');
    }
    if ($('[wrapper].selected .floorplan.selected').is(':last-child')) {
        $('[wrapper].selected .floorplan').first().addClass('next');
    }
});