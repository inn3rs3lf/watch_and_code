///////////////////////
///// Version One /////
///////////////////////

let todos = ['Item 1', 'Item 2', 'Item 3']; //Stores the todo list

todos.push('Item 4'); //Adds a todo - .push adds something to the end of an array

todos[0] = 'Item 1 updated' // Edits a todo 

todos.splice(0, 1); // Removes a todo. Splice argument 0 is the index, and 1 is the amount of items to delete
console.log(todos); // Displays the todo