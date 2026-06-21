const express = require("express");
const app = express();
const path = require("path");

const PORT = 8080;

// Using Static Files
// app.use(express.static(path.join(__dirname,"public"))); // this enables ejs to read the static files when the server runs outside from the directory.
// Or
app.use(express.static("public/js"));
app.use(express.static("public/css"));

// Using EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/dice", (req, res) => {
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("dice.ejs", {diceVal});
});

// Rendering EJS

// app.get("/ig/:username", (req, res) => {
//     let followers = ["amit", "harsh", "sonu", "gillu", "ansh", "aditya"];
//     let { username } = req.params;
//     res.render("instagram.ejs", {username, followers});
// });

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data) {
        res.render("insta.ejs", {data});
    } else{
        res.render("error.ejs", {username});
    }
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});


app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});