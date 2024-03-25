import promptSync from 'prompt-sync';
import chalk from 'chalk';
const prompt = promptSync();
function BmiCal() {
    let weight = parseInt(prompt(chalk.cyan("Enter you weight in kg : ")));
    let height = parseInt(prompt(chalk.cyan("Enter you height in meters : ")));
    console.log(chalk.yellow.bold("BMI (Body Mass Index) is :"), chalk.magentaBright(weight / (height * height)));
}
BmiCal();
