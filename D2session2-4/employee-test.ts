    import {Employee} from './employee';

  //const emp1: Employee={id:1, name:"satya", salary:100000,  permanent:true, department: {id: 1, name:"payroll"}, skill: [ {id:1, name:"CSS"},{id:2, name:"Angular"}, {id:3,name:"javascript"}]};
  //const dept: Department={id: 1, name:"payroll"};
  // console.log(emp);
  // console.log(emp.department);
  // for(let i in emp.skill){
  //   console.log(emp.skill[i]);
  //}
  class EmployeeTest{
    private emp: Employee;
    constructor (emp:Employee){
          this.emp=emp;
    }
    display(){
      console.log(this.emp);
  console.log(this.emp.department);
  for(let i in this.emp.skill){
    console.log(this.emp.skill[i]);
    }
  }
}
    
  const emp1: Employee={id:1, name:"satya", salary:100000,  permanent:true, department: {id: 1, name:"payroll"}, skill: [ {id:1, name:"CSS"},{id:2, name:"Angular"}, {id:3,name:"javascript"}]};
  const empl= new EmployeeTest(emp1);
  empl.display();