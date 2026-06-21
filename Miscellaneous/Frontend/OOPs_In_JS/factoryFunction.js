function PersonMaker (name ,age) {
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi, My name is ${name}`);
        }
    }

    return person; 
};

// Copy and run these below commands in console
// let p1 = PersonMaker("Adam", 25);
// let p2 = PersonMaker("Eve", 21);