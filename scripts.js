$('#logo-showcase-gray').utilCarousel({
    showItems: 2,
    responsiveMode: 'itemWidthRange',
    itemWidthRange: [200, 220],
    interval: 10000,
    autoPlay: true,
    pagination: false
});

$(document).ready(function () {
    $('.util-wrapper').css('display', 'flex');
    $('.util-wrapper').css('align-items', 'center');
    $('.util-wrapper').css('height', '115px');

    $('.intro-join__btn').click(function () {
        $('#subscribeModal').modal({'backdrop': 'static'});
    });
});
