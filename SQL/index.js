const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Creating Connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
});

// Function to generate a random user using Faker
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
}

// console.log(getRandomUser());

// Running a query
// try{
//     connection.query("SHOW TABLES",(err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err) {
//     console.log(err);
// }

// Insert Into table

// for single user
// let q = "INSERT INTO USER (id, username, email, password) values (?, ?, ?, ?)"; // query
// let user = ["123", "123_newUser", "newuser@gmail.com", "abc"]; // data to be inserted

// for multiple users
// let q = "INSERT INTO USER (id, username, email, password) values ?"; // query
// let users = [ 
//     ["123b", "123_newUserb", "newuser@gmail.comb", "abcb"],
//     ["123c", "123_newUserc", "newuser@gmail.comc", "abcc"]
// ]; // data to be inserted

// for fake users using Faker.
// let users = []; // data to be inserted
// for(let i=0; i<5; i++){
//     users.push(getRandomUser());
// } // generating fake data using faker
// let q = "INSERT INTO USER (id, username, email, password) values ?"; // query

// // Syntax to inser values in table
// try{
//     connection.query(q, [users],(err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err) {
//     console.log(err);
// }


app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) FROM USER`;
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let count = result[0]['COUNT(*)'];
            res.render("home.ejs", { count });
        });
    }catch(err) {
        console.log(err);
        res.send("Some error in DB...");
    };
});

app.get("/user", (req, res) => {
    let q = "SELECT * FROM USER";
    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let data = result;
            res.render("users.ejs", {data});
        });
    }catch(err){
        console.log(err);
        res.send("Some error in DB...");
    }
})

app.listen(PORT, (req, res) => {
    console.log(`app listening at port ${PORT}`);
})


// // Closing MySql Connection
// connection.end();