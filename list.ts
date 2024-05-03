#!/user/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bgCyanBright("\n\t TO-DO LIST\n\t"));

let todos = [];
let condition = true;

while(condition){
let todo_list = await inquirer.prompt(
  {
    name: "todo",
    type: "list",
    message: "WHAT DO U WANNA DO?",
    choices: [chalk.yellow("ADD"), chalk.yellow("VIEW"),chalk.yellow("DELETE"),chalk.yellow("EDIT")]
  }
);

if(todo_list.todo ===chalk.yellow("ADD")){
  let add_task = await inquirer.prompt({
    name : "add",
    type : "input",
    message : "ADD TASK"
  })

  todos.push(add_task.add)
  
}

if(todo_list.todo ===chalk.yellow("VIEW")){
  console.log("List", todos);
}

if (todo_list.todo ===chalk.yellow("DELETE")) {
  let delete_task = await inquirer.prompt({
    name : "delete",
    type : "list",
    message :"DELETE TASK",
    choices : todos
 })

    let delete_the_task = todos.splice(delete_task.delete,1)
    console.log(`\n ${delete_the_task} THIS TASK HAS BEEN DELETED SUCCESSFULLY FROM YOUR TO-DO LIST\n`);
}

if (todo_list.todo ===chalk.yellow("EDIT")) {
  let edit_task = await inquirer.prompt({
    name : "oldTask",
    type : "list",
    message : "EDIT TASK",
    choices : todos

  })

  let todo_index = todos.indexOf(edit_task.oldTask)

  let editTask = await inquirer.prompt({
    name : "newTodo",
    type : "input",
    message : "edit task in the list"
  })
  todos[todo_index] = editTask.newTodo;
  
}


}




