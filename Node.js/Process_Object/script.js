// console.log(process.argv);
// If i run "node script.js" in Command line then it will print and array consisting of path.
// If i run "node script.js hello bye" in Command line it will print these hello bye after path.

let args = process.argv;

for (let i=2; i<args.length; i++){
    console.log("hello to "+ args[i]);
}
// This i=2 means it will leaves first two path elements and then prints the remaining elements which
// is written after node script.js.
// Example:- node script.js Ram Lakshman Bharat Shatrughana