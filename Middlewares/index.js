const express = require("express");
const app = express();

const PORT = 8080;

// app.use(() => {
//     console.log("Hi, I am a Middleware");
// });

// app.use() eith req, res
// app.use((req, res) => {
//     console.log("Hi, I am a Midlleware");
//     res.send("Middleware Working");
// });

// Using next()
app.use((req, res, next) => {
    console.log("Hi, I am 1st middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Hi, I am 2nd middleware");
    next();
});

// Creating Utility middleware
// logger function
app.use((req, res, next) => {
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method, req.path, req.responseTime, req.hostname);
    next();
});

// Middleware for api token as query string.
app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if( token === "giveaccess"){
        next();
    }else{
        res.send("ACCESS DENIED...");
    }
    
})

app.get("/", (req, res) => {
    res.send("Hi, I am a root");
});

app.get("/random", (req, res) => {
    res.send("Random Page");
});

// API token as query string
app.get("/api", (req, res) => {
    res.send("ACCESS GRANTED...");
});

app.listen(PORT, () => {
    console.log(`app listening at port ${PORT}`);
});