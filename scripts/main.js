// Switching image when clicked

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dota-2.png') {
        myImage.setAttribute('src', 'images/dota-alt.png');
    } else {
        myImage.setAttribute('src', 'images/dota-2.png');
    }
}

// Welcome message with personal name

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUsername();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Dota is cool, ' + storedName;
}

myButton.onclick = function() {
    setUsername();
}