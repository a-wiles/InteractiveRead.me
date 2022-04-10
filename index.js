// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Username');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'title',
            message: 'Enter the projects Title (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a valid project title');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a short description for the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a short description!');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'install',
            message: 'Please describe any installation requirements (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter install instructions!');
                    return false;
                }
            }
        }, 

        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the usage for your project (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage descriptions!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter any Contributions on the project? (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter N/A for no contributions!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'test',
            message: 'Please enter any tests for the project? (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter N/A for no test instructions!');
                    return false;
                }
            }
        },

        {
            type: 'list',
            name: 'license',
            message: 'Please select the License Type (Required)',
            choices: ['MIT', 'GPL', 'AGPL']
            
        },

    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("READMe has been completed, please view the preview!")
        }
    })
}; 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('./ReadMe_Generated.md', generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
