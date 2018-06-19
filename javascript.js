console.log('Hello World!')
// console.log(document.activeElement)
var refresh = 0;
var pages = ['homepage', 'store', 'community', 'about', 'news']

$(window).load(function () {
    $("#loader").delay(1000).fadeOut("slow");
  for (i = 0; i < pages.length; i++) {
    // console.log(i);
    document.getElementsByClassName(pages[i])[0].style.display = 'none';
  }
  window.scrollTo(0, 0);
  document.getElementsByClassName('homepage')[0].style.display = "initial";
});

function displayLogin() {
    person = prompt('Login \n\nTo interact with the Community and get Personal Support:\n\n Username:');
    password = prompt('Password:', "*****");
    alert(`Welcome, ${person}`);
}

// Open a webpage after clicking the hyperlink, and immediately scrolling to the top of the page
function ShowDiv(div) {
  var i;
  let container = document.getElementById('menu');
  let links = container.getElementsByClassName('button');

  // Have the current page change colour in the navigation bar
  for (let i = 0; i<links.length; i++) {
    links[i].addEventListener('click', function () {
      let activeButton = document.getElementsByClassName('active');
      activeButton[0].className = activeButton[0].className.replace('active', '');
      this.className += ' active';
    });
  }
  // console.log(i);
  for (i = 0; i < pages.length; i++){
    // console.log(i);
    document.getElementsByClassName(pages[i])[0].style.display = 'none';
  };
  window.scrollTo(0,0);
  document.getElementsByClassName(div)[0].style.display = "inherit";
}
