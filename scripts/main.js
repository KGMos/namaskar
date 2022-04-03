var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if(mySrc ==='images/om.jpg'){
        myImage.setAttribute ("src","images/om1.jpg");
    } else {
        myImage.setAttribute ('src', 'images/om.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter uou name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Namascar, " + myName;
}
if(!localStorage.getItem("name")) {
    setUserName();
    } else {
        var storedName = localStorage.getItem("name");
        myHeading.textContent = "Namascar, " + storedName;
    }
    myButton.onclick = function() {
        setUserName();
    }
