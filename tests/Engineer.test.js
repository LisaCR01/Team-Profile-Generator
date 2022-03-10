// tests required for Engineers.
const Engineer = require ('../lib/Engineer')
describe("engineer",()=>{
    // Computer creates testEngineer from Engineer class with sample data.
    const testEngineer = new Engineer ("Lisa","123","lcrgunn@gmail.com","LCR01")
    // test that makes sure getName method works.
    test ("getName() should return name",() =>{
        const expected = "Lisa";
        const actual = testEngineer.getName()
        expect(actual).toEqual(expected)});
    // test that makes sure getId method works.
    test ("getId() should return ID",() =>{
        const expected = "123";
        const actual = testEngineer.getId()
        expect(actual).toEqual(expected)});
    // test that makes sure getEmail method works.
    test ("getEmail() should return email",() =>{
        const expected = "lcrgunn@gmail.com";
        const actual = testEngineer.getEmail()
        expect(actual).toEqual(expected)});
    // test that makes sure getGithub method works.
    test ("getGithub() should return GitHub",() =>{
        const expected = "LCR01";
        const actual = testEngineer.getGithub()
        expect(actual).toEqual(expected)});
})