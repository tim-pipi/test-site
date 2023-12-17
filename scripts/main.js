// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   }
// );

const myImage = document.querySelector("img");
const mySrc = myImage.getAttribute("src");

myImage.onclick = () => {
const currentSrc = myImage.getAttribute("src");
if (currentSrc === mySrc) {
    myImage.setAttribute("src", "images/tim-pipi-2.png");
} else {
    myImage.setAttribute("src", "images/tim-pipi.png");
}
};

let myButton = document.querySelector("button");


let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("What is your name?");
    if (!myName) {
        alert("You must enter a name!");
        setUserName();
    } else {
        // Use MDN's localStorage api to store the name
        // in the browser for later use. 
        // localStorage works similar to a dictionary (key-value pairs)
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}