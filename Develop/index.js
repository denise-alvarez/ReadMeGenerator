// TODO: Include packages needed for this application
const inq = require ('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const questions = [

];

function createReadme () {
    fs.writeFileSync('./README.md', 'testing')
}

createReadme()