console.log('Hello World!')
console.log(document.activeElement)
var refresh = 0;
var pages = ['homepage', 'store', 'community', 'about', 'news']

$(window).load(function () {
    $("#loader").delay(1000).fadeOut("slow");
});

function displayLogin() {
    person = prompt('Login \n\nTo interact with the Community and get Personal Support:\n\n Username:');
    password = prompt('Password:', "*****")
    alert(`Welcome, ${person}`)
}

// Open a webpage after clicking the hyperlink
function ShowDiv(div) {
  var i;
  console.log(i);
  for (i = 0; i < pages.length; i++){
    console.log(i);
    document.getElementsByClassName(pages[i])[0].style.display = 'none';
  }
  document.getElementsByClassName(div)[0].style.display = "inherit";
}
