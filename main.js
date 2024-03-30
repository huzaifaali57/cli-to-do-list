#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let answers = await inquirer.prompt([
        {
            name: "whattodo",
            type: "input",
            message: "What do you want to add in your to do list?",
        },
        {
            name: "addtolist",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false",
        },
    ]);
    todos.push(answers.whattodo);
    console.log(todos);
    condition = answers.addtolist;
}
