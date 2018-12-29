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

    $('.intro-join__btn').click(function() {
        window.dojoRequire(["mojo/signup-forms/Loader"], function(L) {
            // var creds = {"baseUrl":"mc.us7.list-manage.com","uuid":"a320e1b7c8bb271f1153b18f3","lid":"418af07ec4","uniqueMethods":true};
            var creds = {"baseUrl":"mc.us7.list-manage.com","uuid":"583de279935b6df8bac8fa2cf","lid":"f93d72837f","uniqueMethods":true};
            L.start(creds);
            document.cookie = 'MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        });
    });
});



