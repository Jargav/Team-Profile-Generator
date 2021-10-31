const Employee = require( "./Employee" );

class Intern extends Employee {
   constructor( name, id, email, school ) {
      // Call on the parent Employee class constructor
      super( name, id, email );
      this.school = school;
      this.role = "Intern";
   };

   getSchool() {
      return this.school;
   };

   getRole() {
      return this.role;
   };
};

module.exports = Intern;