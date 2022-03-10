// tests required for all employees.
const Employee = require ('../lib/Employee')
describe("employee",()=>{
    // Computer creates testEmployee from Employee class with sample data.
    const testEmployee = new Employee ("Lisa","123","lcrgunn@gmail.com")
    // test that makes sure getName method works.
    test ("getName() should return name",() =>{
        const expected = "Lisa";
        const actual = testEmployee.getName()
        expect(actual).toEqual(expected)});
    // test that makes sure getId method works.
    test ("getId() should return ID",() =>{
        const expected = "123";
        const actual = testEmployee.getId()
        expect(actual).toEqual(expected)});
    // test that makes sure getEmail method works.
    test ("getEmail() should return email",() =>{
        const expected = "lcrgunn@gmail.com";
        const actual = testEmployee.getEmail()
        expect(actual).toEqual(expected)});
})

