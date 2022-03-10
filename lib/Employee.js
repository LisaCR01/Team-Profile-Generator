// Class Employee creates the base class for all the team members' details.
class Employee {
    // Construction contains the parameters that are wanted for all the team members'.
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }
    // Methods that return the employees' base information to the computer.
    getName () {
        return this.name
    }
    getId () {
        return this.id
    }
    getEmail () {
        return this.email
    }
    
    getRole () {
        return this.role
    }
}

// Computer exports Employee class to be used by the other js files.
module.exports = Employee;
