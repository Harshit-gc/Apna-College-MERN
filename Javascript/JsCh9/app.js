let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
para1.classList.add('red');
document.querySelector('body').append(para1);

let h3 = document.createElement('h3');
h3.innerText = "Hey I'm blue!";
h3.classList.add('blue');
document.querySelector('body').append(h3);

let div = document.createElement('div');
div.classList.add('box');
let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
let para2 = document.createElement('p');
para2.innerText = "ME TOO!";
div.append(h1);
div.append(para2);
document.querySelector('body').append(div);
