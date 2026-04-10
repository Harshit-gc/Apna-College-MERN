// Async Functions
// async keyword
async function greet(){
    // throw("404 not fonud");  // Throwing error using throw keyword. It rejects the promise.
    return "Hello";
}

greet().then((result) => {
    console.log("Promise Resolved");
    console.log(result);
})
.catch((error) => {
    console.log("Promise Rejected: ", error);
})

let demo = async () => {
    return 5;
}

// await keyword
function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo1(){
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

// JSON DATA HANDLING
let jsonRes = '{"fact":"Approximately 1/3rd of the cat owners thinks theor pets are able to read their minds.", "length":78}';
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
    "name": "Harsh",
    "age": 23
};
let jsonData = JSON.stringify(student);
console.log(jsonData);

//Fetch function for api calls

let url = "https://catfact.ninja/fact";

fetch(url)
.then((response) => {
    return response.json();
})
.then((data1) => {
    console.log(data1.fact);
    return fetch(url);
})
.then((response) => {
    return response.json();
})
.then((data2) => {
    console.log(data2.fact);
})
.catch((error)=>{
    console.log(error);
})

// async and await with fetch
async function getfacts() {
    try{
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact);
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }catch(err){
        console.log(error);
    }
}