let todo = [];
let req = prompt("Please Enter Your Request:");

while(true) {
    if(req === "Quit"){
        console.log("Thank You");
        break;
    }

    if(req === "List"){
        for(task of todo){
            console.log(task);
        }
    }else if(req === "Add"){
        let task = prompt("Enter the task you want to add:");
        todo.push(task);
        console.log("task Added");
    }

    req = prompt("Please Enter Your Request:");
}