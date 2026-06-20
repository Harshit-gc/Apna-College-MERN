const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// Handling Requests
app.use((req,res) => {
    console.log("request recieved");
    // Sending a response
    // res.send("Hello");
    // OR
    let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li></ul>";
    res.send(code);
})

// Routing
// app.get('/', (req, res) => {
//     res.send("Root Path");
// });

// app.get('/apple', (req, res) => {
//     res.send("Apple Path");
// });

// app.get('/orange', (req, res) => {
//     res.send("Orange Path");
// });

// app.use((req, res) => {
//     res.send("Global Path");
// });

// Path Parameters
// app.get('/:username/:id', (req, res) => {
//     res.send(`Profile Page of ${req.params.username}`);
// });

// Query Strings
// app.get('/search', (req, res) => {
//     let {category, sort} = req.query;
//     if(!category || !sort) {
//         return res.send("No results found");
//     }
//     res.send(`Searched results: ${category}, ${sort}`);
// })