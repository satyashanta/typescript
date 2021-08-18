    import {Employee} from './employee';

  const emp: Employee={id:1, name:"satya", salary:100000,  permanent:true, department: {id: 1, name:"payroll"}, skill: [ {id:1, name:"CSS"},{id:2, name:"Angular"}, {id:3,name:"javascript"}]};
  //const dept: Department={id: 1, name:"payroll"};
  console.log(emp);
  console.log(emp.department);
  for(let i in emp.skill){
    console.log(emp.skill[i]);
  }