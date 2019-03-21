const chalk = require("chalk");
console.log(process.argv);
//argv stands for argument vector

const command = process.argv[2];

if (command === "add") {
  console.log(chalk.blue("Adding notes !!"));
} else if (command === "remove") {
  console.log(chalk.blue("Removing notes !!"));
}
