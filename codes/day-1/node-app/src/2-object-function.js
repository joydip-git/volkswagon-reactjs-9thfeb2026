"use strict";
//object-literal syntax
// var anilObjectRef = {
//   //value properties
//   id: 1,
//   name: "anil",
//   salary: 1000,

//   //functional property
//   print: function () {
//     return this.id + " " + this.name + " " + this.salary;
//   },
// };

//constructor function
function person(idVal, nameVal, salaryVal) {
  //local variables (Stack -> variable object)
  var data = 100;

  //this data (heap -> another object [this])
  //strict mode will NOT allow to set the refernce of window/global to 'this' property of the FEC of this function, if you do not call this function with new keyword
  this.id = idVal;
  this.name = nameVal;
  this.salary = salaryVal;
  this.print = function () {
    return this.id + " " + this.name + " " + this.salary;
  };
}
// person(1, "anil", 1000);
// person(2, "sunil", 2000);
// console.log(global);

var anilObjectRef = new person(1, "anil", 1000);

//accessing the properties of the object
console.log(anilObjectRef.name);
console.log(anilObjectRef["salary"]);
console.log(anilObjectRef.print());
//console.log(anilObjectRef['print']());

var sunilObjectRef = new person(2, "sunil", 2000);

//accessing the properties of the object
console.log(sunilObjectRef.name);
console.log(sunilObjectRef["salary"]);
console.log(sunilObjectRef.print());
//console.log(sunilObjectRef['print']());

// function add(a, b) {
//   var res = a + b;
//   return res;
// }

// new add(12, 13);

//window.setTimeout()
//*/
