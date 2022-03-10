// Extends Employee class with the extra parameters needed by Manager class.
const Employee = require('./Employee')

class  Manager extends Employee{
    // Office (office number) is the additional parameter needed for Manager class.
    constructor(name,id,email,office){
        super(name,id,email)
        this.office = office
    }
    getOffice(){
        return this.office
    };
    getRole(){
        return "Manager"
    };   
}

module.exports = Manager