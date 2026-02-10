// console.log(x); //undefined
// var x;
// x = 10;
// console.log(x); //10

// for (var i = 0; i < 1; i++) {
//   var x;
//   x = 20;
//   console.log(x); //20
// }
// console.log(x); //20 or 10


//console.log(x); //error (any variable declared with let can't be accessed before declaration)
let x;
x = 10;
console.log(x); //10

for (let i = 0; i < 1; i++) {
  let x; //var _x
  x = 20; //_x=20
  console.log(x); //20 
}
console.log(x); //10
