/* Dynamic top menu positioning
 *
 */

var numcontact = 620; //number of pixels before modifying styles
var numnav= 560;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > numnav) {
        $('.leftcolumnnews').addClass('fixedsidebar');
    } else {
        $('.leftcolumnnews').removeClass('fixedsidebar');
    }
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > numcontact) {
        $('.rightcolumnabout').addClass('fixedcontact');
    } else {
        $('.rightcolumnabout').removeClass('fixedcontact');
    }
});


//USE SCROLL WHEEL FOR THIS FIDDLE DEMO

// http://jsfiddle.net/j6odpxsk/