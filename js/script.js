"use strict";

const buttons = document.querySelectorAll("button"),
    overlay = document.querySelector(".overlay");
// deprecated method
// button.onclick = function () {
//     alert('bulba')
// }

const deleter = (event) => {
        console.log(event.currentTarget);
        console.log(event.type);
}

// button.addEventListener("click", (event) =>{
//     event.target.remove();
// });
// button.addEventListener("click",deleter);
// overlay.addEventListener("click", deleter);

buttons.forEach(button =>{
    button.addEventListener("click", deleter);
});
const link = document.querySelector('a');
link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hi");
});