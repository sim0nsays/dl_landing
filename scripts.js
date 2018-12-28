$('#logo-showcase-gray').utilCarousel({
    showItems : 2,
    responsiveMode : 'itemWidthRange',
    itemWidthRange : [200, 210],
    interval : 10000,
    autoPlay : true,
    pagination : false
});

$( document ).ready(function() {
    $('.util-wrapper').css('display', 'flex');
    $('.util-wrapper').css('align-items', 'center');
    $('.util-wrapper').css('height', '155px');
});
