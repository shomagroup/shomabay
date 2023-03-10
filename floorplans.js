// CONTROL MENU
$('.fp-control-link').on('click', function() {
    $('.fp-control-link, .fp-container [wrapper], .floorplan').removeClass('selected');
    $('.floorplan').removeClass('prev');
    $('.floorplan').removeClass('next');
    $(this).addClass('selected');

    if ($(this).is('[studio]')) { $('.studio-wrapper').addClass('selected'); }
    if ($(this).is('[bed-1]')) { $('.onebed-wrapper').addClass('selected'); }
    if ($(this).is('[bed-2]')) { $('.twobed-wrapper').addClass('selected'); }
    if ($(this).is('[penth]')) { $('.penth-wrapper').addClass('selected'); }

    $('[wrapper].selected .floorplan:first-child').addClass('selected');
    $('[wrapper].selected .floorplan').last().addClass('prev');
    $('.floorplan.selected').next().addClass('next');
});