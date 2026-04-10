// // DOM Events

// // 1. onclick 
// // for single button
// let btn = document.querySelector("button");
// btn.onclick = function() {
//     btn.innerText = "clicked";
// }

// // for multiple buttons
// // let btns = document.querySelectorAll("button");
// // for(bt of btns){
// //     bt.onclick = sayHello;
// // }

// function sayHello(){
//     alert("Hello");
// }

// function sayName(){
//     console.log("Jai Shree Ram");
// }

// // 2. onmouseenter
// let btns = document.querySelectorAll("button");
// for(bt of btns){
//     bt.onmouseenter = function(){
//         console.log("Mouse encountered on element");
//     };
// }

// // Event Listeners

// // addEventListener
// for(bt of btns){
//     bt.addEventListener("click", sayHello);
//     bt.addEventListener("dblclick", sayName);
// }

// // this in event Listener
// // for(bt of btns){
// //     bt.addEventListener("click", clickfn);
// // }
// // function clickfn(){
// //     this.innerText = "clicked"; In this scenario "this" refers to bt, because bt calls the callback of eventListener.
// // }

// // Keyboard events
// let ipt = document.querySelector("input");
// ipt.addEventListener("keydown", function(event){
//     console.log(event.code);
//     console.log(event.key);
// })

// Form Events
// 1. submit
// event.preventDefault 
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form Submitted");
})

// extracting form data
form.addEventListener("submit", function(event){
    event.preventDefault();
    let user = document.querySelector("#user"); // Or this.elemets[0];
    let pass = this.elements[1]; // or document.querySelector("#pass");
    console.log("Form Submitted");
    console.log(user.value);
    console.log(pass.value);
    alert("Login Successful");
})

// change event
let para = document.querySelector("#para");
// para.addEventListener("change", function(event){
//     event.preventDefault();
//     console.log("Input changed");
//     console.log(this.value)
// })

// input event
para.addEventListener("input", function(event){
    event.preventDefault();
    console.log("Input changed");
    console.log(this.value)
})

// Event Bubbling
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("div was clicked");
})

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("ul was clicked");
})

for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("li was clicked");
    })
}