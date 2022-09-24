//Protoype

function Employee() {
    this.name = '';
    this.dept = 'None';
    this.salary = 0.00;
   }

   function Manager () {
    Employee.call(this)
    this.reports = []
   }
   Manager.prototype = Object.create(Employee.prototype)

   function IndividualContributor () {
    Employee.call(this)
    this.acticve_proyects = []
   }
   IndividualContributor.prototype = Object.create(Employee.prototype)

   function TeamLead () {
    Manager.call(this)
    this.dept = 'Sofware'
    this.salary = 100000
   }
   TeamLead.prototype = Object.create(Manager.prototype)

   function Engineer () {
    TeamLead.call(this)
    this.dept = 'Javascript'
    this.desktop_id = '8822'
    this.salary = 80000
   }
   Engineer.prototype = Object.create(TeamLead.prototype)

   var genericEmployee = new Employee()
   console.log(genericEmployee );

   var karen = new Manager()
   karen.name = 'Karen'
   karen.reports = [1,2,3]
   console.log(karen);

   var jason = new TeamLead()
   jason.name = 'Json'
   console.log(jason);

   console.log(Array.__proto__);
   let ar = new Array()
   console.log(ar.__proto__);