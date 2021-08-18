"use strict";
exports.__esModule = true;
//const emp1: Employee={id:1, name:"satya", salary:100000,  permanent:true, department: {id: 1, name:"payroll"}, skill: [ {id:1, name:"CSS"},{id:2, name:"Angular"}, {id:3,name:"javascript"}]};
//const dept: Department={id: 1, name:"payroll"};
// console.log(emp);
// console.log(emp.department);
// for(let i in emp.skill){
//   console.log(emp.skill[i]);
//}
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(emp) {
        this.emp = emp;
    }
    EmployeeTest.prototype.display = function () {
        console.log(this.emp);
        console.log(this.emp.department);
        for (var i in this.emp.skill) {
            console.log(this.emp.skill[i]);
        }
    };
    return EmployeeTest;
}());
var emp1 = { id: 1, name: "satya", salary: 100000, permanent: true, department: { id: 1, name: "payroll" }, skill: [{ id: 1, name: "CSS" }, { id: 2, name: "Angular" }, { id: 3, name: "javascript" }] };
var empl = new EmployeeTest(emp1);
empl.display();
