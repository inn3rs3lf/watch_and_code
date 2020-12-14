///////////////////////
///// Version One /////
///////////////////////

let todos = ["Item 1", "Item 2", "Item 3"]; // Stores the todo list

//todos.push("Item 4"); // Adds a todo - .push adds something to the end of an array

console.log(todos);

// function to add a todo 
function add(newData) {
  todos.push(newData);
  console.log(todos);
}

//function to edit the todo
function edit(index, newValue) {
  todos[index] = newValue
  todos[index] = newValue
  console.log(todos);
}

//function to remove a todo
function remove(position) {
  todos.splice(position, 1);
  console.log(todos);
}


console.log(todos); // Displays the todo

//// Functions ////
// Functions groupe multiple lines of code together under a single name
// When you run a function, you can provide the function with data

// function demoFunction(myData) { // myData acts as a variable (parameter)
//   console.log(myData);
// }

// demoFunction('Darryl'); // myData = 'Darryl' (argument)

/////////////////////
///// Version 2 /////
/////////////////////


