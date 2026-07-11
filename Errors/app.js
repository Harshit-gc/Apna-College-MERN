const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const PORT = 8080;

const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }else{
        throw new ExpressError(401, "Access Denied");
    };
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

// Error Handling Middleware
// app.use((err, req, res, next) => {
//     console.log("------ERROR------");
//     res.send(err);
// });

// Error Handling Middleware for Custom Error Class.
app.use((err, req, res, next) => {
    let { status = 500, message = "Some Error Occurred"} = err;
    res.status(status).send(message);
});

app.listen(PORT, () => {
    console.log(`app listening at port ${PORT}`);
});