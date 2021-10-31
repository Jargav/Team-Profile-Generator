module.exports = [{
    type: "input",
    name: "managerName",
    message: "Input of your manager's name:",
    validate: managerNameInput => {
       if ( managerNameInput && managerNameInput.trim().length > 0 ) {
          return true;     
       } else {
          console.log( "Input of your manager's name:" );
          return false;
       };
    }
 },
 {
    type: "input",
    name: "managerId",
    message: "Input of your manager's employee ID:",
    validate: managerIdInput => {
       if ( managerIdInput && managerIdInput.trim().length > 0 ) {
          return true;     
       } else {
          console.log( "Input of your manager's employee ID:" );
          return false;
       };
    }
 },
 {
    type: "input",
    name: "managerEmail",
    message: "Input of your manager's email address:",
    validate: managerEmailInput => {
       if ( managerEmailInput && managerEmailInput.trim().length > 0 ) {
          // validation of email format
          if ( /^.+@.+\..+$/gi.test( managerEmailInput )) {
             return true;
          };     
         } else {
          console.log( "Input of your manager's email address:" );
          return false;
       };
    }
 },
 {
    type: "input",
    name: "managerOfficeNum",
    message: "Input of your manager's office number:",
    validate: managerOfficeNumInput => {
       if ( managerOfficeNumInput && managerOfficeNumInput.trim().length > 0 ) {
          return true;     
       } else {
          console.log( "Input of your manager's office number:" );
          return false;
       };
    }
 }];