// Example of Call Back Hell
let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextChangeColor){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextChangeColor) nextChangeColor();
//     }, delay);
// }
// // Nesting of callBack function is callback hell... 
// changeColor("red", 1000, () => {
//     changeColor("blue", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("orange", 1000,);            
//         });
//     });
// });

// Another example of callback hell before promise

function saveToDB(msg, success, faliure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed >= 4){
        success();
    }else{
        faliure();
    }
}

saveToDB("Hello", () => {
    console.log("Data Saved Successfully!!");
    saveToDB("Hello" , () => {
        console.log("Data Saved Successfully!!");
        saveToDB("Hello" , () => {
            console.log("Data Saved Successfully!!");
        }, () => {
            console.log("Data Not Saved..");
        });
    }, () => {
        console.log("Data Not Saved..");
    });
}, () => {
    console.log("Data Not Saved..");
});

// Promise object

function savetodb(msg){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed >= 4){
        resolve("Success");
    }else{
        reject("Error");
    }
    });
}

// Using then() and catch() methods
savetodb("Hello").then(() => {
    console.log("Data saved Successfully!!");
})
.catch(() => {
    console.log("Data not saved..");
});

// Promise Chaining
savetodb("Hello").then((result) => {
    console.log("Data1 saved Successfully!!");
    console.log("Result: ", result);
    return savetodb("Jai Ho");
})
.then((result) => {
    console.log("Data2 saved Successfully!!");
    console.log("Result: ", result);
    return savetodb("Jai Shree Ram");
})
.then((result) => {
    console.log("Data3 Saved Successfully!!");
    console.log("Result: ", result);
})
.catch((error) => {
    console.log("Result: ", error);
    console.log("Data not saved..");
});

// Refactoring Old Code
function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, delay);
    });
}

changeColor("red", 1000)
.then(() => {
    console.log("red color")
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color")
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color")
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color")
})