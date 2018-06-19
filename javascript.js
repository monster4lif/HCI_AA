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
  var container = document.getElementById('menu');
  var links = container.getElementsByClassName('button');
  // console.log(container)
  // console.log(links)
  
  // Have the currently shown page change colour in the navigation bar
  for (let i = 0; i<links.length; i++) {
    console.log('test')
    links[i].addEventListener('click', function () {
      console.log('test 2')
      let activeButton = document.getElementsByClassName('active');
      console.log(activeButton);
      this.className += ' active';
      activeButton[0].className = activeButton[0].className.replace('active', '');

    });
  }
  // console.log(i);
  for (let i = 0; i < pages.length; i++){
    document.getElementsByClassName(pages[i])[0].style.display = 'none';
  };
  window.scrollTo(0,0);  // Scroll to the top of the page
  document.getElementsByClassName(div)[0].style.display = "inherit";
}

// Give user the idea of responding to a post, only for demonstration purposes
const displayError = function () {
  alert('As of now, you cannot send messages, but the developers are working on it!')
}



