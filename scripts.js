$('#logo-showcase-gray').utilCarousel({
    showItems: 2,
    responsiveMode: 'itemWidthRange',
    itemWidthRange: [200, 220],
    interval: 10000,
    autoPlay: true,
    pagination: false
});

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var docs = {
    videos: ['riLQCudri7Q', 'ZNDbcxLDCOs']
};

var container = $('#docs-container');

function onYouTubeIframeAPIReady() {
    docs.videos.forEach(function (v, index) {
        var id = 'video-' + index;
        var tmpl = '<div class="section-interactive__video"><div id="' + id + '"></div>' +
            '<div class="video__title">Лекция 1 - Введение</div>' +
            '</div>';
        container.append(tmpl);
        new YT.Player(id, {
            height: '160',
            width: '298',
            videoId: v
        });
    });
}

$(document).ready(function () {
    $('.util-wrapper').css('display', 'flex');
    $('.util-wrapper').css('align-items', 'center');
    $('.util-wrapper').css('height', '115px');

    $('.intro-join__btn').click(function () {
        $('#subscribeModal').modal({
            'backdrop': 'static'
        });
    });


    var container1 = $('#simpleImg');

    docs.videos.forEach(function (v) {
        var link = 'http://www.youtube.com/watch?v=' + v;
        var tmpl = '<div class="item">' +
            '<div class="meida-holder">' +
            '<img src="https://img.youtube.com/vi/' + v + '/0.jpg" alt="" />' +
            '</div>' +
            '<div class="hover-content">' +
            '<div class="overlay"></div>' +
            '<div class="link-container">' +
            '<a target="_blank" href="' + link + '"><i class="icon-link"></i></a><a href="' + link + '" class="video-link" ><i class="icon-play"></i></a>' +
            '</div>' +
            '</div>' +
            '</div>;';
        container1.append(tmpl);
    });

    $('#simpleImg').utilCarousel({
        responsiveMode: 'itemWidthRange',
        itemWidthRange: [260, 320]
    });


});