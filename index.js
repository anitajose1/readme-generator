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
        message: "Provide a description of the project (Required)",
        validate: projectDescription => {
            if (projectDescription) {
                return true
            } else {
                console.log("Please enter a description for the project!");
                return false
            }
        }
    },
    // {
    //     type: "list",
    //     name: "contents",
    //     message: "List items for the Table of Contents (Required)",
    //     choices: ["description", "installation", "usage", "license", "contributing", "tests", "questions"],
    //     validate: contentsInput => {
    //         if (contentsInput) {
    //             return true;
    //         } else {
    //             console.log("Please enter the table of contents for the project!");
    //             return false
    //         }
    //     }
    // },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions for the project",
    },
    {
        type: "input",
        name: "usage",
        message: "What are the terms for usage? (Required)",
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
        choices: ["MIT", "Apache 2.0"],
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
        message: "Who are the contributing authors?",
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
        message: "Who are the contributing authors?",
        validate: tests => {
            if (tests) {
                return true
            } else {
                console.log("Please mention the tests!");
                return false
            }
        }
    }
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
