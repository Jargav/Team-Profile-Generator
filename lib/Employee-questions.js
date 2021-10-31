module.exports = [
    {
       type: "list",
       name: "menuChoices",
       message: "Please choose an option!",
       choices: [ "Add an Engineer Profile", "Add an Intern Profile", "Finished Generating Profiles" ],
       validate: menuChoicesInput => {
          if ( menuChoicesInput === "Add an Engineer Profile" || menuChoicesInput === "Add an Intern Profile" ) {
             return true;        
          } else if( menuChoicesInput === "Finished Generating Profiles" ) {
             return true;       
          } else {
             console.log( "Please choose an option!" );
             return false;
          };
       }
    }];