class Person3 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }
}

class Student extends Person3 {
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }
}

class Teacher extends Person3 {
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
}

// Copy and run these below commands in console
// let s1 = new Student ("adam", 18, 80);
// let t1 = new Teacher("Shradhha", 28, "Web Development");