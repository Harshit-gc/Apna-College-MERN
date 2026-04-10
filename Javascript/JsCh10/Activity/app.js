let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let color = randomColor();
    h3.innerText = color;
    let div = document.querySelector("div");
    div.style.backgroundColor = color;
    div.innerText = "This is Your New Color";
})

function randomColor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}