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

var FUTURE_VIDEO_ID = null;

var docs = {
    videos: [
        { id: FUTURE_VIDEO_ID, title: 'Лекция 4 - Введение', description: '10.02.2007', date: '10.02.2007'},
        { id: 'ZNDbcxLDCOs', title: 'Лекция 3 - Линейный классификатор', description: '10.02.2007', date: '10.02.2007'},
        { id: 'ZNDbcxLDCOs', title: 'Лекция 2 - Линейный классификатор', description: '10.02.2007', date: '10.02.2007'},
        { id: 'riLQCudri7Q', title: 'Лекция 1 - Введение', description: '10.02.2007', date: '10.02.2007'}
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
        var mediaTmpl;

        if (v.id === FUTURE_VIDEO_ID) {
            mediaTmpl =
                '<div class="meida-holder">' +
                    '<img src="./assets/images/img_stub.jpg" height="240" width="320" alt="" />' +
                    '<div class="hover-content">' +
                        '<div class="overlay"></div>' +
                    '</div>' +
                    '<div class="link-container" style="color: #fff">' +
                        '<div>Следующая лекция</div>' +
                        '<div>' + v.date + '</div>' +
                    '</div>' +
                '</div>';
        } else {
            var link = 'http://www.youtube.com/watch?v=' + v.id;
            mediaTmpl =
            '<div class="meida-holder">' +
                '<img src="https://img.youtube.com/vi/' + v.id + '/0.jpg" alt="" />' +
                '<div class="hover-content">' +
                    '<div class="overlay"></div>' +
                    '<div class="link-container">' +
                        '<a target="_blank" href="' + link + '"><i class="icon-link"></i></a><a href="' + link + '" class="video-link" ><i class="icon-play"></i></a>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }

        
        var tmpl =
            '<div class="item">' +
                mediaTmpl +
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

// TOGGLE SECTIONS
// querySelector, jQuery style
// var $ = function (selector) {
//     return document.querySelectorAll(selector);
//     };
    
    
    // Define tabs, write down them classes
    var tabs = [
        '.tabbed-section__selector-tab-1',
        '.tabbed-section__selector-tab-2',
        // '.tabbed-section__selector-tab-3'
    ];
    
    // Create the toggle function
    var toggleTab = function(element) {
    var parent = element.parentNode;
    
    // Do things on click
    $(element)[0].addEventListener('click', function(e){
        e.preventDefault();
    
        // Remove the active class on all tabs.
        // climbing up the DOM tree with `parentNode` and target 
        // the children ( the tabs ) with childNodes
        this.parentNode.childNodes[1].classList.remove('active');
        this.parentNode.childNodes[3].classList.remove('active');
        // this.parentNode.childNodes[5].classList.remove('active');
    
        // Then, give `this` (the clicked tab), the active class
        this.classList.add('active');
        
        // Check if the clicked tab contains the class of the 1 or 2
        if(this.classList.contains('tabbed-section__selector-tab-1')) {
        // and change the classes, show the first content panel
        $('.tabbed-section-1')[0].classList.remove('hidden');
        $('.tabbed-section-1')[0].classList.add('visible');
        
        // Hide the second
        $('.tabbed-section-2')[0].classList.remove('visible');
        $('.tabbed-section-2')[0].classList.add('hidden');
        // $('.tabbed-section-3')[0].classList.remove('visible');
        // $('.tabbed-section-3')[0].classList.add('hidden');
        }
    
        if(this.classList.contains('tabbed-section__selector-tab-2')) {
        // and change the classes, show the second content panel
        $('.tabbed-section-2')[0].classList.remove('hidden');
        $('.tabbed-section-2')[0].classList.add('visible');
        // Hide the first
        $('.tabbed-section-1')[0].classList.remove('visible');
        $('.tabbed-section-1')[0].classList.add('hidden');
        // $('.tabbed-section-3')[0].classList.remove('visible');
        // $('.tabbed-section-3')[0].classList.add('hidden');
        }
        
        // if(this.classList.contains('tabbed-section__selector-tab-3')) {
        // // and change the classes, show the second content panel
        // $('.tabbed-section-3')[0].classList.remove('hidden');
        // $('.tabbed-section-3')[0].classList.add('visible');
        // // Hide the first
        // $('.tabbed-section-1')[0].classList.remove('visible');
        // $('.tabbed-section-1')[0].classList.add('hidden');
        // $('.tabbed-section-2')[0].classList.remove('visible');
        // $('.tabbed-section-2')[0].classList.add('hidden');
        // }
    });
    };
    
    // Then finally, iterates through all tabs, to activate the 
    // tabs system.
    for (var i = tabs.length - 1; i >= 0; i--) {
    toggleTab(tabs[i])
    };
    