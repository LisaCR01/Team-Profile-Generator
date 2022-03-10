// tests required for Interns.
const Intern = require ('../lib/Intern')
describe("intern",()=>{
    // Computer creates testIntern from Intern class with sample data.
    const testIntern = new Intern ("Lisa","123","lcrgunn@gmail.com","STEM Academy")
    // test that makes sure getName method works
    test ("getName() should return name",() =>{
        const expected = "Lisa";
        const actual = testIntern.getName()
        expect(actual).toEqual(expected)});
    // test that makes sure getId method works.
    test ("getId() should return ID",() =>{
        const expected = "123";
        const actual = testIntern.getId()
        expect(actual).toEqual(expected)});
    // test that makes sure getEmail method works.
    test ("getEmail() should return email",() =>{
        const expected = "lcrgunn@gmail.com";
        const actual = testIntern.getEmail()
        expect(actual).toEqual(expected)});
    // test that makes sure getSchool method works.
    test ("getSchool() should return school",() =>{
        const expected = "STEM Academy";
        const actual = testIntern.getSchool()
        expect(actual).toEqual(expected)});
})