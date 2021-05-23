let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/detroit-house.jpg') {
        myImage.setAttribute('src','images/ford.jpg');
    } else {
        myImage.setAttribute('src','images/detroit-house.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Behold Detroit Techno, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Behold Detroit techno, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}