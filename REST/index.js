const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

const PORT = 8080;

// override with POST having ?_method=
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Sample Data
let posts = [
    {   
        id: uuidv4(),
        username: "Aditya Singh",
        content: "I am Engineer"
    },
    {
        id: uuidv4(),
        username: "Raja Pandit",
        content: "I am Yuva Neta."
    },
    {
        id: uuidv4(),
        username: "Harsh Bhadauriya",
        content: "I am Admin in Logic Pay."
    }
];

// Index Route
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

// Create and New Route
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts"); // Bye default, GET request hi bhejega ye res.redirect("/posts") par.
})

// Show Route
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
})

// Update Route
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
})

// Edit Route
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
})

// Delete Route
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});