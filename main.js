#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
let answers = await inquirer.prompt([
    {
        name: "whattodo",
        type: "input",
        message: "What do you want to add in your to do list?",
    },
]);
todos.push(answers.whattodo);
while (condition) {
    answers = await inquirer.prompt([
        {
            name: "listOptions",
            type: "list",
            message: "What changes do you like to make :",
            choices: ["Add to List", "Delete from List", "Update List", "Exit"],
        },
    ]);
    if (answers.listOptions == "Add to List") {
        let addtolist = await inquirer.prompt([
            {
                name: "whattoadd",
                type: "input",
                message: "What do you want to add in your to do list?",
            },
        ]);
        todos.push(addtolist.whattoadd);
        console.log(todos);
    }
    else if (answers.listOptions == "Delete from List") {
        let deletefromlist = await inquirer.prompt([
            {
                name: "whattodelete",
                type: "input",
                message: "Which index number do you want to delete",
            },
        ]);
        todos.splice(deletefromlist.whattodelete, 1);
        console.log(todos);
    }
    else if (answers.listOptions == "Update List") {
        let updatelist = await inquirer.prompt([
            {
                name: "indextoupdate",
                type: "input",
                message: "Which index number you want to update ?",
            },
            {
                name: "whattoupdate",
                type: "input",
                message: "What do you want to update ?",
            },
        ]);
        todos.splice(updatelist.indextoupdate, 1, updatelist.whattoupdate);
        console.log(todos);
    }
    else if (answers.listOptions == "Exit") {
        condition = false;
    }
    console.log(`Your List \n${todos}\n`);
}
