// Extends Employee class with the extra parameters needed by Intern class.
const Employee = require('./Employee')

class  Intern extends Employee{
    // School is the additional parameter needed for Intern class.
    constructor(name,id,email,school){
        super(name,id,email)
        this.school = school
        this.role="Intern"
    }
    getSchool(){
        return this.school
    };
    getRole(){
        return this.role
    };   
}

module.exports = Intern