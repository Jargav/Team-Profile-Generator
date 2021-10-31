const Intern = require( "../lib/Intern" );

test( "Set intern school.", () => {
    const testSchool = "wisconsin";
    const intern = new Intern( "mark", 14, "forme12#@gmail.Com", testSchool );
 
    expect( intern.school ).toBe( testSchool );
 });

 test( "Set school using getSchool().", () => {
    const testSchool = "wisconsin";
    const intern = new Intern( "mark", 14, "forme12#@gmail.Com", testSchool );
 
    expect( intern.getSchool()).toBe( testSchool );
 });

 test( "Use getRole() to return \"Intern\" as role.", () => {
    const testRole = "Intern";
    const intern = new Intern( "mark", 14, "forme12#@gmail.Com", "wisconsin" );
 
    expect( intern.getRole()).toBe( testRole );
 });