console.log('Hello World!')
console.log(document.activeElement)
var refresh = 0;
console.log(refresh)

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
    console.log(div)
    // document.getElementById(document.activeElement).style.display = "none"
    console.log(document.activeElement)
    document.getElementById(div).style.display = "inherit";
}
