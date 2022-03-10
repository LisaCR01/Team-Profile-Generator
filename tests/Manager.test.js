// tests required for Managers.
const Manager = require ('../lib/Manager')
describe("manager",()=>{
    // Computer creates testManager from Manager class with sample data.
    const testManager = new Manager ("Lisa","123","lcrgunn@gmail.com","987")
    // test that makes sure getName method works
    test ("getName() should return name",() =>{
        const expected = "Lisa";
        const actual = testManager.getName()
        expect(actual).toEqual(expected)});
     // test that makes sure getId method works.
    test ("getId() should return ID",() =>{
        const expected = "123";
        const actual = testManager.getId()
        expect(actual).toEqual(expected)});
    // test that makes sure getEmail method works.
    test ("getEmail() should return email",() =>{
        const expected = "lcrgunn@gmail.com";
        const actual = testManager.getEmail()
        expect(actual).toEqual(expected)});
    // test that makes sure getOffice method works.
    test ("getOffice() should return office number",() =>{
        const expected = "987";
        const actual = testManager.getOffice()
        expect(actual).toEqual(expected)});
})
