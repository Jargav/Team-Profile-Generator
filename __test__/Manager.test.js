const Manager = require( "../lib/Manager" );

test( "Setting manager's office number.", () => {
    const testOfficeNumber = 2;
    const manager = new Manager( "joe", 12, "forme343!@gmail.Com", testOfficeNumber );
 
    expect( manager.officeNumber ).toBe( testOfficeNumber );
 });

 test( "Use getRole() to return \"Manager\" as role.", () => {
    const testRole = "Manager";
    const manager = new Manager( "joe", 12, "forme343!@gmail.Com", 2 );
 
    expect( manager.getRole()).toBe( testRole );
 });
 