'use strict';

+function(){
  var Employee = class Employee {
    constructor(name) {
      this.name = name;
    }

    shoutName() {
      return this.name.toUpperCase();
    }

    work() {
      console.log(this.name, 'is working');
    }

    static reverseName(employee) {
      return employee.name.split('').reverse().join('');
    }
  }

  var emp = new Employee('Joe');

  // console.log(emp.shoutName());
  // console.log(Employee.reverseName(emp));

  let Boss = class Boss extends Employee {
    constructor(name) {
      super(name);
      this.boss = true;
    }

    shoutName() {
      return 'asd';
    }

    work() {
      console.log(super.shoutName(), 'is working LIKE A BOSS');
    }
  }

  let emp2 = new Boss('Joe the BOSS');
  emp.work()
  emp2.work()
  console.log(emp2);
}();
