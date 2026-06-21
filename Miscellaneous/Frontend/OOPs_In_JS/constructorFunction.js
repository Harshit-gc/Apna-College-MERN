// Constructor = doesn't return anything and start with capital letter

function Person (name ,age) {
    this.name = name;
    this.age = age; 
};

Person.prototype.talk = function(){
    console.log(`Hi, My name is ${this.name}`);
}

// Copy and run these below commands in console
// let p1 = new Person("Adam", 25);
// let p2 = new Person("Eve", 21);