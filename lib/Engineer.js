// Extends Employee class with the extra parameters needed by Engineer class.
const Employee = require('./Employee')

class  Engineer extends Employee{
    // GitHub is the additional parameter needed for Engineer class.
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github
        this.role="Engineer"
    }
    getGithub(){
        return this.github
    };
    getRole(){
        return this.role
    };   
}

module.exports = Engineer