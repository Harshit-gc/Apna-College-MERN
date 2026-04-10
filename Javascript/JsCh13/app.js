// Using Axios
let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(err){
        console.log(err);
    }
}

let p = document.querySelector("p");
let btn = document.querySelector("Button");
btn.addEventListener("click", async ()=>{
    let fact = await getFacts();
    p.innerText = fact;
})

// Sending Headers with api request in Axios
let url2 = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config = { headers: {Accept: "application/json"} };
        let res = await axios.get(url2, config);
        console.log(res.data.joke);
    }catch(error){
        console.log(error);
    }
}

// Sending query strings in axios
let url3 = "http://universities.hipolabs.com/search?name=";
let country = "canada";

async function getColleges(){
    try{
        let res = await axios.get(url3 + country);
        console.log(res);
    }catch(err){
        console.log(err);
    }
}

// Activity using query strings

let inp = document.querySelector("input");
let button = document.querySelector("#search");

button.addEventListener("click", async () => {
    let value = inp.value;
    let colleges = await getcolleges(value);
    show(colleges);
})

function show(colArr){
    let list = document.querySelector("ul");
    list.innerText = "";
    for(college of colArr){
        let data = document.createElement("li");
        data.innerText = college.name;
        list.append(data);
    }
}
async function getcolleges(country){
    try{
        let res = await axios.get(url3 + country);
        return res.data;
    }catch(err){
        console.log(err);
        return [];
    }
}