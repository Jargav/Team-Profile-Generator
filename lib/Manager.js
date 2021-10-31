const Employee = require( "./Employee" );

class Manager extends Employee {
   constructor( name, id, email, officeNumber ) {
      // Call on the parent Employee class constructor
      super( name, id, email );
      this.officeNumber = officeNumber;
      this.role = "Manager";
   };

   getRole() {
      return this.role;
   };
};

module.exports = Manager;