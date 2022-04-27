'use strict';
const box = document.getElementById("box"),
    buttons = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart");

box.style.backgroundColor = "black";
box.style.width = "200px";
// box.style.cssText = `background-color: green; width: 250px`;
buttons[1].style.borderRadius = "100%";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.color = "yellow";
//     hearts[i].style.border = "1px"
//     hearts[i].style.borderColor = "black"
//
// }

hearts.forEach(item =>{
    item.style.backgroundColor = "blue";
});

// creating elements

const newDiv = document.createElement("div");
newDiv.style.backgroundColor = "green";
newDiv.style.cssText = "backgroundColor: green;width: 100px; height: 90px;";
newDiv.classList.add("green");
document.body.querySelector(".wrapper").append(newDiv);

// newDiv.innerHTML = "<h1>Hello word</h1>"
newDiv.insertAdjacentHTML("beforebegin", "<h2>hello</h2>");