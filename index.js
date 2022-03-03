const  fstat  = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown');

// Packages needed for this application
require('inquirer')
require('fs')
require('./src/generateMarkdown')
// class Employee {
//     constructor(name,id,email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     };
//     getName()
//     getId()
//     getEmail()
//     getRole()
// }



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
    }
]



const questionAddPeople = [
    {
        type:'list',
        message:'would you like to add an engineer or an intern or to finish building your team?',
        name:'Team_Building',
        choices: ['Intern','Engineer','that`s everyone']
    }
    
]


// create an if statement to ask how many if they say they want an intern 
// need something that asks the amount of times given the information of the interns
// create an if statement to ask how many if they say they want an employee
// need something that asks the amount of times given the information of the interns

const questionsIntern = [
    {
        type:'input',
        message:'What is your interns’s name?',
        name:'Intern_Name',
        default:'Intern Name'
    },
    {
        type:'input',
        message:'What is your interns’s employee ID?',
        name:'Intern_ID',
        default:'Intern Employee ID'
    },
    {
        type:'input',
        message:'What is your interns’s email address?',
        name:'Intern_Email',
        default:'Intern Email'
    },
    {
        type:'input',
        message:'What is your interns’s school?',
        name:'Intern_School',
        default:'Intern School'
    },

]

const questionsEmployee = [
    {
        type:'input',
        message:'What is your employee’s name?',
        name:'Employee_Name',
        default:'Employee Name'
    },
    {
        type:'input',
        message:'What is your employee’s employee ID?',
        name:'Employee_ID',
        default:'Employee Employee ID'
    },
    {
        type:'input',
        message:'What is your employee’s email address?',
        name:'Employee_Email',
        default:'Employee Email'
    },
    {
        type:'input',
        message:'What is your employee’s GitHub?',
        name:'Intern_Github',
        default:'Employee Github'
    },
]

function writeToFile(fileName, data) {
    
    fstat.writeFile(fileName,generateMarkdown(data),(err)=>
    err ? console.error(err) :console.log ('readme written'))

}
var data="";
function init() {
    inquirer.prompt(questionsManager)
    .then((data) =>
    {
     console.log(data);
     writeToFile("output.HTML",JSON.stringify(data))
    }
    );
}

// Function call init to initialize app
init();
