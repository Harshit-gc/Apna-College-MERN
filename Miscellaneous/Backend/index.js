// To run this file setup a express project in this directory.
// npm init
// npm i express

const express = require("express");
const app = express();

const PORT = 8080;

// Middleware to parse incoming request body
app.use(express.urlencoded({extended: true})); // for form data
app.use(express.json()); // for json format data

app.get("/register", (req, res) => {
    let { username, password } = req.query;  // extracting data from query params
    res.send(`Standard GET response. Welcome ${username}`);
})

app.post("/register", (req, res) => {
    let { username, password } = req.body  // extracting data from request body
    res.send(`Standard POST response. Welcome ${username}`);
})

app.listen(PORT, () => {
    console.log(`backend started at port ${PORT}`);
});