//require method/import statement will look for the module 'utility' in application directory
//if found it will be loaded and subsequently a Module object will be created for it (utility)
//and the require method/import statement will return the object assigned to the 'exports' property of that module object for 'utility'

//const utilityModExportables = require("./utility");

// console.log(utilityModExportables.addFn(12, 3));
// console.log(utilityModExportables.subFn(12, 3));
//console.log(module);
//console.log(utilityModExportables);

// const { addFn, subFn } = require("./utility");
// console.log(addFn(12, 3));
// console.log(subFn(12, 3));

//const { add, subtract } = require("./utility");
import { add, subtract } from "./utility";

console.log(add(12, 3));
console.log(subtract(12, 3));

//IIFE (Immediately Invocable Function Expression - pronunced as iify)
// (function () {
//   const multiply = function (a, b) {
//     return a * b;
//   };
//   exports.multiply = multiply;
// })();
