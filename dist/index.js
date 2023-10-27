#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const todoList = [];
async function main() {
    while (true) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Choose an action:',
                choices: [
                    'Add a task',
                    'List tasks',
                    'Quit',
                ],
            },
        ]);
        if (action === 'Quit') {
            console.log(chalk.green('Goodbye!'));
            break;
        }
        if (action === 'Add a task') {
            const { task } = await inquirer.prompt({
                type: 'input',
                name: 'task',
                message: 'Enter the task:',
            });
            todoList.push(task);
        }
        if (action === 'List tasks') {
            console.log(chalk.cyan('Your to-do list:'));
            for (const task of todoList) {
                console.log(chalk.yellow(`- ${task}`));
            }
        }
    }
}
main();
