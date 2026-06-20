const math = require("./math");

console.log(math);
// If we run node script.js in command line then it will the object which is exported from math.js
// and imported in script.js using reqiure.

// If nothing is exported from the file which is imported using require, then on command line it will 
// print empty object {}.