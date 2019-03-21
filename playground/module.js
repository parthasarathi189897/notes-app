const fs = require("fs");
const valiadator = require("validator");
const chalk = require("chalk");

// fs.writeFileSync("notes.txt", "My name is Partha !!");
// fs.appendFileSync("notes.txt", "\nStarted nodejs study!!");

// console.log(valiadator.isEmail("abc.com@ .co"));
console.log(chalk.italic(chalk.green("Success !")));
console.log(chalk.green.inverse.bold("Success !"));
console.log(chalk`{bold {green Success!}}`);
