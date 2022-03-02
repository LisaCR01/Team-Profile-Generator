const  fstat  = require('fs');
const inquirer = require('inquirer');

// Packages needed for this application
require('inquirer')
require('fs')

const questionsManager = [
    {
        type:'input',
        message:'What is your team manager’s name?',
        name:'Manager_Name',
        default:'Lisa'
    },
    {
        type:'input',
        message:'What is your team manager’s employee ID?',
        name:'Manager_ID',
        default:'123'
    },
    {
        type:'input',
        message:'What is your team manager’s email address?',
        name:'Manager_Email',
        default:'lcrgunn@gmail.com'
    },
    {
        type:'input',
        message:'What is your team manager’s office number?',
        name:'Manager_Office',
        default:'987'
    },
    {
        type:'list',
        message:'would you like to add an engineer or an intern or to finish building your team?',
        name:'Team_Building',
        choices: ['Intern','Engineer','Just the manager']
    }
]

// create an if statement to ask how many if they say they want an intern 
// need something that asks the amount of times given the information of the interns
// create an if statement to ask how many if they say they want an employee
// need something that asks the amount of times given the information of the interns


function init() {
    inquirer.prompt(questionsManager)
   if()
    .then((data) =>
    {
        writeToFile('README-generated.md',data)
    }
    );
}

// Function call init to initialize app
init();
