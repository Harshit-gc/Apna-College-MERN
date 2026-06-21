class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }
}

let p1 = new Person("Adam", 25);
let p2 = new Person("Eve", 21);