console.log('Hello World!')

// Variable to be able to load the correct div with the html code
const pages = ['homepage', 'store', 'community', 'about', 'news']
let hasLoggedIn = false;

// Play the loading gif and then show the 'homepage' div
$(window).load(function () {
  $("#loader").delay(1000).fadeOut("slow");
  for (i = 0; i < pages.length; i++) {
    // console.log(i);
    document.getElementsByClassName(pages[i])[0].style.display = 'none';
  }
  window.scrollTo(0, 0);
  document.getElementsByClassName('homepage')[0].style.display = "initial";
});

// Ask for a Username and Password when pressing the login button
function displayLogin() {
  person = prompt('Login \n\nTo interact with the Community and get Personal Support:\n\n Username:', 'Adam');
  password = prompt('Password:', "*****");
  alert(`Welcome, ${person}`);
  hasLoggedIn = true;
}

// Open a webpage after clicking the hyperlink, and immediately scrolling to the top of the page

function ShowDiv(div) {
  var menu = document.getElementById('menu');
  var links = menu.getElementsByClassName('button');
  // console.log(container)
  // console.log(links)

  // Have the currently shown page change colour in the navigation bar
  for (let i = 0; i<links.length; i++) {
    links[i].addEventListener('click', function () {
      let activeButton = document.getElementsByClassName('active');
      this.className += ' active';
      activeButton[0].className = activeButton[0].className.replace(' active', '');
    })
        // console.log(links[i])
  };

  //console.log(i);
  for (let i = 0; i < pages.length; i++){
    document.getElementsByClassName(pages[i])[0].style.display = 'none';
  };
  window.scrollTo(0,0);  // Scroll to the top of the page
  document.getElementsByClassName(div)[0].style.display = "inherit";
}

// Give user the idea of responding to a post, only for demonstration purposes
const displayErrorMessages = function () {
  alert('As of now, you cannot send messages, but the developers are working on it!')
}

const displayErrorLogin = function () {
  if (hasLoggedIn === false){
    alert("You need to login to reply to this thread")
  }
  else {
    alert("Something went wrong, please try again later!")
  }
}

const noMessages = function () {
  alert('There are no actual reactions, it is just a prototype')
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

const scrollFunction = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.display = "block";
  } else {
    document.getElementById("topButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const goToTopPage = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Make the page responsive: hide the links in the navigation bar, exept for the 'hamburger' icon
const makePageResponsive = function () {
  let menu = document.getElementById('menu'); // Find the menu
  if (menu.className === 'menu') {
    menu.className = 'menu responsive';
  } else {
    menu.className = 'menu';
  }
}

// console.log(makePageResponsive())

/* Making the sidenav on news fixed after the banner */
var numnav= 600; //number of pixels before modifying styles

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
