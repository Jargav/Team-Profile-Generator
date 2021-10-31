const Engineer = require( "../lib/Engineer" );

test( "Set engineer's Github username.", () => {
    const testGithutUsername = "jordy";
    const engineer = new Engineer( "jordy", 13, "forme97#@gmail.com", testGithutUsername );
 
    expect( engineer.githubUsername ).toBe( testGithutUsername );
 });

 test( "Get Github account using getGithub().", () => {
    const testGithubUsername = "jordy";
    const engineer = new Engineer( "jordy", 13, "forme97#@gmail.Com", testGithubUsername );
 
    expect( engineer.getGithubUsername()).toBe( testGithubUsername );
 });

 test( "Use getRole() to return \"Engineer\" as role.", () => {
    const testRole = "Engineer";
    const engineer = new Engineer( "jordy", 13, "forme97#@gmail.Com" );
 
    expect( engineer.getRole()).toBe( testRole );
 });