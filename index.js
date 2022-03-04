const  fstat  = require('fs');
const inquirer = require('inquirer');
const Employee = require ('./lib/Employee');
const Manager = require ('./lib/Manager');
const Intern = require ('./lib/Intern');
const Engineer = require ('./lib/Engineer');
const mainCard = require('./src/main-card');
const generateEngineerCard = require('./src/engineer-card')
const generateInternCard = require('./src/intern-card') 
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
        message:'What is your team manager’s email address?',
        name:'Manager_Email',
        default:'lcrgunn@gmail.com'
    },
    {
        type:'input',
        message:'What is your team manager’s employee ID?',
        name:'Manager_ID',
        default:'1'
    },

    {
        type:'input',
        message:'What is your team manager’s office number?',
        name:'Manager_Office',
        default:'123'
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
        default:'Ian'
    },
    {
        type:'input',
        message:'What is your interns’s employee ID?',
        name:'Intern_ID',
        default:'3'
    },
    {
        type:'input',
        message:'What is your interns’s email address?',
        name:'Intern_Email',
        default:'ian@fakemail.com'
    },
    {
        type:'input',
        message:'What is your interns’s school?',
        name:'Intern_School',
        default:'STEM Academy'
    },

]

const questionsEngineer = [
    {
        type:'input',
        message:'What is your engineer’s name?',
        name:'Engineer_Name',
        default:'Olivia'
    },
    {
        type:'input',
        message:'What is your engineer’s employee ID?',
        name:'Engineer_ID',
        default:'2'
    },
    {
        type:'input',
        message:'What is your engineer’s email address?',
        name:'Engineer_Email',
        default:'olivia@fakemail.com'
    },
    {
        type:'input',
        message:'What is your engineer’s GitHub?',
        name:'Engineer_Github',
        default:'Olivia123'
    },
]

employeeIndex=0
const len=team.length-1
function createEmployees(){
   
    for (const teamEmployee of team){
    {
        if (teamEmployee.teamRole=="Manager")
        {let managerTemporary = new Manager (teamEmployee.Manager_Name, teamEmployee.Manager_ID, teamEmployee.Manager_Email,teamEmployee.Manager_Office);
        console.log(managerTemporary); writeToFile("./dist/output-team.html",managerTemporary);if(employeeIndex==len){endOfHTML("./dist/output-team.html")}else{ employeeIndex++}}
    }
    {
        if (teamEmployee.teamRole=="Intern")
        {let internTemporary = new Intern (teamEmployee.Intern_Name,teamEmployee.Intern_ID, teamEmployee.Intern_Email, teamEmployee.Intern_School);
        console.log(internTemporary); appendToFileIntern("./dist/output-team.html",internTemporary);if(employeeIndex==len){endOfHTML("./dist/output-team.html")}else{ employeeIndex++}}
    }
    {
        if (teamEmployee.teamRole=="Engineer")
        {let engineerTemporary = new Engineer (teamEmployee.Engineer_Name, teamEmployee.Engineer_ID, teamEmployee.Engineer_Email, teamEmployee.Engineer_Github);
        console.log(engineerTemporary); appendToFileEngineer("./dist/output-team.html",engineerTemporary);if(employeeIndex==len){endOfHTML("./dist/output-team.html")}else{ employeeIndex++}}
    }
}

}

function writeToFile(fileName, data) {
    
    fstat.writeFile(fileName,mainCard(data),(err)=>
    err ? console.error(err) :console.log ('HTML top written'))

}

function appendToFileEngineer(fileName, data) {
    
    fstat.appendFile(fileName,generateEngineerCard(data),(err)=>
    err ? console.error(err) :console.log ('engineer written'))

}

function appendToFileIntern(fileName, data) {
    
    fstat.appendFile(fileName,generateInternCard(data),(err)=>
    err ? console.error(err) :console.log ('intern written'))

}

function endOfHTML(fileName){
    fstat.appendFile(fileName,'</main> </body>',(err)=>
    err ? console.error(err) :console.log ('html complete'))
}

var begin = "yes"
function init() {
    if (begin == "yes"){
        inquirer.prompt(questionsManager)
        .then((data) =>
        {team.push({"teamRole":"Manager", ...data});begin = "cont";return init ()})}

    else {
        console.log("Whose next");
        inquirer.prompt(questionAddPeople)
        .then((WantedMember) =>
        {if(WantedMember.Team_Building=="Intern")
        {inquirer.prompt(questionsIntern).then((internData)=>{team.push({"teamRole":"Intern", ...internData});return init ()})};
         if(WantedMember.Team_Building=="Engineer")
        {inquirer.prompt(questionsEngineer).then((engineerData)=>{team.push({"teamRole":"Engineer", ...engineerData});return init ()})};
         if(WantedMember.Team_Building=="that`s everyone"){console.log("?a?");createEmployees()}
    }
     )
    }

}
    //  console.log(data);
    //  writeToFile("output.HTML",JSON.stringify(data))

// Function call init to initialize app
init();
