const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    { 
        type: "input",
        name: "title",
        message: "What's the title of your project?"

    },
    {
        type: "input",
        name: "description",
        message: "Describe your project"
    },
    {
        type: "input",
        name: "installations",
        message: "What (if any) dependencies need to be installed?",
        default: "npm i"
    },
    {
      type: "input",
      name: "usage",
      message: "Describe the detailed usage of your project"  
    },
    {
        type: "input",
        name: "contributors",
        message: "who are the contributors on this project?"
    },
    {
        type: "input",
        name: "test",
        message: "what command will run a test?",
        default: "npm test"
    },
    {
        type: "list",
        name: "license",
        message: "Which license does your project have?",
        choices: [ "MIT", "The Unlicense", "ISC", "Mozilla Public License 2.0", "None" ]
    },
    {
        type: "input",
        name: "github",
        message: "what is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email address?"
    }
];

function writeFileSync(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log("Generating.... Please wait....");
        writeFileSync("./demo/README.md", generateMarkdown({ ...inquirerAnswers }));
    })
}

init();