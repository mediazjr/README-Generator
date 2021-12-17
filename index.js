// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        question: 'What is the title of your project?',
        name: 'title',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        question: 'Please enter a description of your project.',
        name: 'description',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        question: 'Please enter the installation instructions.',
        name: 'installation',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the installation instructions of your project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        question: 'Please enter the usage information of your project.',
        name: 'usage',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the usage information of your project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        question: 'Please enter the contribution guidelines of your project.',
        name: 'contribution',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the contribution guidelines of your project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        question: 'Please enter the test instructions of your project.',
        name: 'test',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the test instruction of your project!');
                return false;
            }
        }
    },

    {
        type: 'list',
        question: 'Which license did you use?',
        name: 'license',
        choices: ['Apache_2.0', 'BSD_2--Clause', 'CC0_1.0', 'MIT', 'MPL_2.0'],
    },

    {
        type: 'input',
        question: 'Please enter any additional questions.',
        name: 'additional',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter any additional questions for your project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        question: 'What is your GitHub username?',
        name: 'username',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },

    {
        type: 'input',
        question: 'What is your email address?',
        name: 'email',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((responses) => {
            const doneReadMe = generateMarkdown(responses);
            console.log('Generating README');
            console.log(doneReadMe);
            fs.writeFileSync('README.md', doneReadMe)
        })
        .catch((err) => {
            console.log(err)
        })
}

// Function call to initialize app
init();