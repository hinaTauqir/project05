#!/usr/bin/env node
import inquirer from "inquirer";
import banner from "node-banner";
import chalk from "chalk";
let agan = true;
function wait() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve(1);
        }, 4000);
    });
}
async function welcome() {
    console.log(`         ${chalk.yellow(`HELLO welcome to`)} `);
    await banner('WORD COUNTER APP', '');
    await wait();
}
let question = async () => {
    let ans = await inquirer.prompt([
        {
            name: "paragraph",
            type: "input",
            message: "enter the paragraph for counting the words"
        }
    ]);
    let para = ans.paragraph.split(" ");
    console.log(`${chalk.green("words of yours paragraph are : ")} ${para.length}`);
};
async function again() {
    let response = await inquirer.prompt([
        {
            name: "Again",
            type: "input",
            message: "Do you want to do words count again y or n"
        }
    ]);
    if ((response.Again).toLowerCase() == "y" || (response.Again).toLowerCase() == "yes") {
        agan = true;
        await question();
    }
    else if (response.Again.toLowerCase() == "n" || response.Again.toLowerCase() == "no") {
        console.log(`       ${chalk.yellow('THANK YOU')} \n`);
        agan = false;
    }
}
function lastmessage() {
    console.log(`       ${chalk.green('GOOD BYE')} \n   ${chalk.blue('see you again')}`);
}
async function steps() {
    await welcome();
    await question();
    await wait();
    while (agan) {
        await again();
        await wait();
    }
    ;
    await lastmessage();
}
steps();
