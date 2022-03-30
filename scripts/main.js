var myImage = document.querySelector('img');

myImage.onclick = function() 
{
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Ukraine.jpeg') {
      myImage.setAttribute ('src','images/Gerb.jpg');
    } else {
      myImage.setAttribute ('src','images/Ukraine.jpeg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Ukraine with you  - ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ukraine with you  - ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }