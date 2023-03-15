// Sliders
// AMENITY SLIDER NEXT
$('[amen-next]').on('click', function() {
    $(this).closest('.amenity').find('.amen-slider-item').removeClass('prev');
    $(this).closest('.amenity').find('.amen-slider-item').removeClass('prev-prev');
    $(this).closest('.amenity').find('.amen-slider-item').removeClass('next');
    $(this).closest('.amenity').find('.amen-slider-item').removeClass('next-next');

    if ($(this).closest('.amenity').find('.amen-slider').is('[duo]')) {
        if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-of-type(2)')) {
            $(this).closest('.amenity').find('.amen-slider-item').removeClass('selected');
            $(this).closest('.amenity').find('.amen-slider-item').last().addClass('selected');
        } else {
            $(this).closest('.amenity').find('.amen-slider-item').removeClass('selected');
            $(this).closest('.amenity').find('.amen-slider-item').first().addClass('selected');
        }
    } else if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-last-of-type(2)')) {
        $(this).closest('.amenity').find('.amen-slider-item').last().removeClass('selected');
        $(this).closest('.amenity').find('.amen-slider-item').first().addClass('selected');
    } else {
        $(this).closest('.amenity').find('.amen-slider-item.selected').next().not('.amen-slider-nav, amen-deco-line').addClass('selected');
        $(this).closest('.amenity').find('.amen-slider-item.selected').first().removeClass('selected');
    }
    // LEFT AMENITY
    if ($(this).closest('.amenity').is('[left]')) {
        if ($(this).closest('.amenity').find('.amen-slider').is('[duo]')) {
            if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-of-type(2)')) {
                $(this).closest('.amenity').find('.amen-slider-item').last().addClass('prev');
            } else {
                $(this).closest('.amenity').find('.amen-slider-item').first().addClass('prev');
            }
        } else if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-of-type(3)')) {
            $(this).closest('.amenity').find('.amen-slider-item').first().addClass('prev');
            $(this).closest('.amenity').find('.amen-slider-item').last().addClass('prev-prev');

        } else if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-of-type(2)')) {
            $(this).closest('.amenity').find('.amen-slider-item').last().addClass('prev');
            $(this).closest('.amenity').find('.amen-slider-item').last().prev().addClass('prev-prev');

        } else {
            $(this).closest('.amenity').find('.selected').prev().addClass('prev');
            $(this).closest('.amenity').find('.selected').prev().prev().addClass('prev-prev');
        }
    } // END LEFT AMENITY

    // RIGHT AMENITY
    if ($(this).closest('.amenity').is('[right]')) {
        if ($(this).closest('.amenity').find('.amen-slider').is('[duo]')) {
            if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-of-type(2)')) {
                $(this).closest('.amenity').find('.amen-slider-item').last().addClass('next');
            } else {
                $(this).closest('.amenity').find('.amen-slider-item').first().addClass('next');
            }
        } else if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-last-of-type(3)')) {
            $(this).closest('.amenity').find('.amen-slider-item').last().addClass('next');
            $(this).closest('.amenity').find('.amen-slider-item').first().addClass('next-next');

        } else if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-last-of-type(2)')) {
            $(this).closest('.amenity').find('.amen-slider-item').first().addClass('next');
            $(this).closest('.amenity').find('.amen-slider-item').first().next().addClass('next-next');

        } else {
            $(this).closest('.amenity').find('.amen-slider-item.selected').next().addClass('next');
            $(this).closest('.amenity').find('.amen-slider-item.selected').next().next().addClass('next-next');
        }
    } // END RIGHT AMENITY

}); // END AMENITY SLIDER NEXT


// AMENITY SLIDER PREV
$('[amen-prev]').on('click', function() {
    $(this).closest('.amenity').find('.amen-slider-item').removeClass('prev');
    $(this).closest('.amenity').find('.amen-slider-item').removeClass('prev-prev');
    $(this).closest('.amenity').find('.amen-slider-item').removeClass('next');
    $(this).closest('.amenity').find('.amen-slider-item').removeClass('next-next');

    if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-of-type(2)')) {
        $(this).closest('.amenity').find('.amen-slider-item.selected').removeClass('selected');
        $(this).closest('.amenity').find('.amen-slider-item').last().addClass('selected');

    } else {
        $(this).closest('.amenity').find('.amen-slider-item.selected').prev().not('.amen-slider-nav, amen-deco-line').addClass('selected');
        $(this).closest('.amenity').find('.amen-slider-item.selected').last().removeClass('selected');
    }

    // LEFT AMENITY
    if ($(this).closest('.amenity').is('[left]')) {
        if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-of-type(3)')) {
            $(this).closest('.amenity').find('.amen-slider-item').first().addClass('prev');
            $(this).closest('.amenity').find('.amen-slider-item').last().addClass('prev-prev');

        } else if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-of-type(2)')) {
            $(this).closest('.amenity').find('.amen-slider-item').last().addClass('prev');
            $(this).closest('.amenity').find('.amen-slider-item').last().prev().addClass('prev-prev');

        } else {
            $(this).closest('.amenity').find('.selected').prev().addClass('prev');
            $(this).closest('.amenity').find('.selected').prev().prev().addClass('prev-prev');
        }
    } // END LEFT AMENITY

    // RIGHT AMENITY
    if ($(this).closest('.amenity').is('[right]')) {
        if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-last-of-type(3)')) {
            $(this).closest('.amenity').find('.amen-slider-item').last().addClass('next');
            $(this).closest('.amenity').find('.amen-slider-item').first().addClass('next-next');

        } else if ($(this).closest('.amenity').find('.amen-slider-item.selected').is(':nth-last-of-type(2)')) {
            $(this).closest('.amenity').find('.amen-slider-item').first().addClass('next');
            $(this).closest('.amenity').find('.amen-slider-item').first().next().addClass('next-next');

        } else {
            $(this).closest('.amenity').find('.amen-slider-item.selected').next().addClass('next');
            $(this).closest('.amenity').find('.amen-slider-item.selected').next().next().addClass('next-next');
        }
    }

});