const mongoose = require("mongoose");

main().then((res) => {
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,    
});

const User = mongoose.model("User", userSchema);

// Inserting One
// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48,
// });

// Saving User after creating only runs when inserting one. 
// user1.save();

// Inserting Many
// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
//     {name: "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then((res) => {
//     console.log(res);
// })

// Find in Mongoose
// User.find().then((res) => {
//     console.log(res);
// });

// User.find({age: {$gte: 48}}).then((res) => { // Find in Mongoose based on some condition.
//     console.log(res[0].name);
// });

// Model.findById("id");
// User.findById("6a39efb5158d98ef926cbc56")
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Update In Mongoose
// User.updateOne({name: "Bruce"}, {age: 49})
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// User.updateMany({age: {$gt: 47}}, {age: 55})
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })

// It returns the updated document
// User.findOneAndUpdate({name:"Bruce"}, {age:42}, {returnDocument: "after"})
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })

// Delete in Mongoose
// User.deleteOne({name: "Bruce"})
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// User.deleteMany({age: 48})
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })

User.findByIdAndDelete("6a39efb5158d98ef926cbc54") // It return deleted document
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })