// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter the title of the project!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project. (Required)",
        validate: projectDescription => {
            if (projectDescription) {
                return true
            } else {
                console.log("Please enter a description for the project!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)",
        validate: installation => {
            if (installation) {
                return true
            } else {
                console.log("Please enter the steps required to install your project!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples, if any, for use (Required).",
        validate: usageInput => {
            if (usageInput) {
                return true
            } else {
                console.log("Please provide the terms of usage!");
                return false
            }
        },
    },
    {
        type: "list",
        name: "license",
        message: "How is the project licensed? (Required)",
        choices: ["MIT", "Apache-2.0", "MPL-2.0", "GPL-3.0-or-later", "GPL-3.0-only", "Unlicense"],
        validate: projectLicense => {
            if (projectLicense) {
                return true
            } else {
                console.log("Please mention how the project is licensed");
                return false
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "List your collaborators, if any, with links to their GitHub profiles. (Required)",
        validate: contributingAuthors => {
            if (contributingAuthors) {
                return true
            } else {
                console.log("Please list the contributing authors!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Write tests for your application and provide examples on how to run them. (Required)",
        validate: tests => {
            if (tests) {
                return true
            } else {
                console.log("Please mention the tests!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "questions",
        message: "Enter your GitHub username. (Required)",
        validate: username => {
            if (username) {
                return true
            } else {
                console.log("Please enter your GitHub username!");
                return false
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your contact email. (Required)",
        validate: email => {
            if (email) {
                return true
            } else {
                console.log("Please enter your contact email!");
                return false
            }
        }
    },
];

// imports the generateMarkdown function from the generateMarkdown.js file
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeHTML = generateMarkdown(data)
    fs.writeFile(fileName, readmeHTML, err => {
        if (err) throw new Error(err);
    
        console.log("Readme created!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then(data => {
        writeToFile("./README.md", data)
    })
}

// Function call to initialize app
init();
