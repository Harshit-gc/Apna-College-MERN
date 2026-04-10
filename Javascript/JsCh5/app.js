// Objects Literals in JS
let student = {
    name: "Aditya",
    age: 23,
    city: "Agra"
};
console.log(student);

// Get Values
console.log(student["name"]);
console.log(student.name);

let dob = "age";
console.log(student[dob]);
console.log(student.dob); // It gives undefined.

// Add/Update Values
const stu = {
    name: "harshit",
    age: 22,
    marks: 75.7,
    city: "Agra"
};
console.log(stu);
stu.city = "Noida"; // Update
console.log(stu);
stu.gender = "male"; // Add
console.log(stu);

// Delete a property
delete stu.marks;
console.log(stu);

// Object of Objects
const classInfo = {
    aman:{
        grade: "A+",
        city: "Delhi"
    },
    dheeraj:{
        grade: "A",
        city: "Mathura"
    }
}
console.log(classInfo);

// Array Of Objects
const students = [
    {
        name: "Aman",
        age: 23
    },
    {
        name: "Dheeraj",
        age: 23
    }
];
console.log(students);

// Random number generation
let num = Math.random();
num = num*10;
num = Math.floor(num);
num = num+1;
console.log(num);

let random = Math.floor( Math.random() * 10) + 1;
console.log(random);