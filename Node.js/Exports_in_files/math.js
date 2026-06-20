const sum = (a, b) => (a+b);
const sub = (a, b) => (a-b);
const mul = (a, b) => (a*b);
const divide = (a, b) => (a/b);
const PI = 3.14;

// Method 1
// let obj = {
//     sum : sum,
//     sub : sub,
//     mul: mul,
//     divide: divide,
//     PI: PI
// };

// module.exports = obj;

// Method 2
// module.exports = {
//     sum : sum,
//     sub : sub,
//     mul: mul,
//     divide: divide,
//     PI: PI
// };

// Method 3
// module.exports.sum = (a, b) => (a+b);
// module.exports.sub = (a, b) => (a-b);
// module.exports.mul = (a, b) => (a*b);
// module.exports.divide = (a, b) => (a/b);
// module.exports.PI = 3.14;

// Method 4 (Not preffered more)
// exports.sum = (a, b) => (a+b);
// exports.sub = (a, b) => (a-b);
// exports.mul = (a, b) => (a*b);
// exports.divide = (a, b) => (a/b);
// exports.PI = 3.14;

// If we assign anything directly to exports then it will not works.
// exports = 5;
// exports = {
//     sum : sum,
//     sub : sub,
//     mul: mul,
//     divide: divide,
//     PI: PI
// };