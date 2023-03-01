const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log("Generating.... Please wait....");
        writeToFile("./dist/README.md", generateMarkdown({ ...inquirerAnswers }));
    })
}

init();