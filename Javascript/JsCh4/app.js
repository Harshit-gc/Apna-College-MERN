// for loops
for(let i=1; i<=5; i++){
    console.log(i);
}

// nested for loop
for(let i=1; i<=5; i++){
    for(let j=1; j<3; j++){
       console.log(j);
    }
}

// while loop
let i = 1;
while(i<5){
    console.log(i);
    i++;
}

// for of loop

// 1. On Arrays
let fruits = ["mango", "apple", "banana", "orange"];
for(i of fruits){
    console.log(i);
}

// 2. On Strings.
for(ch of "apna"){
    console.log(ch);
}

// 3. On nested Arrays.
let heros = [["ironaman", "batman"],["spiderman", "thor"]];
for(list of heros){
    for(hero of list){
        console.log(hero);
    }
}

// Todo App
