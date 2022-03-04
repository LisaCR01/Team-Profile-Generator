const  fstat  = require('fs');
const inquirer = require('inquirer');
const Employee = require ('./lib/Employee');
const Manager = require ('./lib/Manager');
const Intern = require ('./lib/Intern');
const Engineer = require ('./lib/Engineer');
const generateMarkdown = require('./src/generateMarkdown');
var team = [];

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

const questionsEngineer = [
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

var begin = "yes"
function init() {
    if (begin == "yes"){
        inquirer.prompt(questionsManager)
        .then((data) =>
        {team.push(data);begin = "cont";return init ()})}

    else {
        console.log("Whose next");
        inquirer.prompt(questionAddPeople)
        .then((WantedMember) =>
        {if(WantedMember.Team_Building=="Intern")
        {inquirer.prompt(questionsIntern).then((internData)=>{team.push({"teamRole":"Intern", ...internData});return init ()})};
         if(WantedMember.Team_Building=="Engineer")
        {inquirer.prompt(questionsEngineer).then((engineerData)=>{team.push({"teamRole":"Engineer", ...engineerData});return init ()})};
         if(WantedMember.Team_Building=="that`s everyone"){console.log (team)}
    }
     )
    }

}
    //  console.log(data);
    //  writeToFile("output.HTML",JSON.stringify(data))

// Function call init to initialize app
init();
