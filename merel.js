/* Dynamic top menu positioning
 *
 */



/* Making the sidenav on news fixed after the banner */
var numnav= 560; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > numnav) {
        $('.leftcolumnnews').addClass('fixedsidebar');
    } else {
        $('.leftcolumnnews').removeClass('fixedsidebar');
    }
});
//Inspired by http://jsfiddle.net/j6odpxsk/

/* Making Contact on About fixed after the banner */
var numcontact = 600; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > numcontact) {
        $('.rightcolumnabout').addClass('fixedcontact');
    } else {
        $('.rightcolumnabout').removeClass('fixedcontact');
    }
});

//Inspired by http://jsfiddle.net/j6odpxsk/