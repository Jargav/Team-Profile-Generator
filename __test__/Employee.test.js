const Employee = require( "../lib/Employee" );

test( "Create an employee object.", () => {
    const employee = new Employee( "jordy", 13, "forme97#@gmail.Com");
 
    expect( typeof( employee )).toBe( "object" );
    expect( employee.name ).toEqual( expect.any( String ));
    expect( employee.id ).toEqual( expect.any( Number ));
    expect( employee.email ).toEqual( expect.any( String ));
 });

 test( "Check to see if can getName() or not.", () => {
    const testName = "jordy";
    const employee = new Employee( testName );
 
    expect( employee.getName()).toBe( testName );
 });

 test( "Check to see if can getId() or not.", () => {
    const testId = 13;
    const employee = new Employee( "jordy", testId );
 
    expect( employee.getId()).toBe( testId );
 });

 test( "Check to see if can getEmail() or not.", () => {
    const testEmail = "forme97#@gmail.Com";
    const employee = new Employee( "jordy", 13, testEmail );
 
    expect( employee.getEmail()).toBe( testEmail );
 });

 test( "Use getRole() to return \"Employee\" as role.", () => {
    const testRole = "Employee";
    const employee = new Employee( "jordy", 13, "forme97#@gmail.Com" );
 
    expect( employee.getRole()).toBe( testRole );
 });