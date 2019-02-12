$('#logo-showcase-gray').utilCarousel({
    showItems: 2,
    responsiveMode: 'itemWidthRange',
    itemWidthRange: [200, 220],
    interval: 10000,
    autoPlay: true,
    pagination: false
});

// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var docs = {
    videos: [
        { id: 'riLQCudri7Q', title: 'Лекция 1 - Введение', description: '10.02.2007'},
        { id: 'ZNDbcxLDCOs', title: 'Лекция 2 - Линейный классификатор', description: '10.02.2007'},
        { id: 'ZNDbcxLDCOs', title: 'Лекция 2 - Линейный классификатор', description: '10.02.2007'},
    ]
};

var container = $('#docs-container');

// function onYouTubeIframeAPIReady() {
//     docs.videos.forEach(function (v, index) {
//         var id = 'video-' + index;
//         var tmpl = '<div class="section-interactive__video"><div id="' + id + '"></div>' +
//             '<div class="video__title">Лекция 1 - Введение</div>' +
//             '</div>';
//         container.append(tmpl);
//         new YT.Player(id, {
//             height: '160',
//             width: '298',
//             videoId: v
//         });
//     });
// }

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
        var link = 'http://www.youtube.com/watch?v=' + v.id;
        var tmpl =
            '<div class="item">' +
                '<div class="meida-holder">' +
                    '<img src="https://img.youtube.com/vi/' + v.id + '/0.jpg" alt="" />' +
                    '<div class="hover-content">' +
                        '<div class="overlay"></div>' +
                        '<div class="link-container">' +
                            '<a target="_blank" href="' + link + '"><i class="icon-link"></i></a><a href="' + link + '" class="video-link" ><i class="icon-play"></i></a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="detail-container">' +
                    '<h4>' + v.title + '</h4>' +
                    '<p>' +
                        v.description +
                    '</p>' +
                '</div>' +
            '</div>';
        container1.append(tmpl);
    });

    $('#simpleImg').utilCarousel({
        responsiveMode: 'itemWidthRange',
        itemWidthRange: [280, 340],
        pagination: false,
        navigationText : ['<i class="icon-left-open-big"></i>', '<i class=" icon-right-open-big"></i>'],
        navigation: true,
        rewind: false
    });


});