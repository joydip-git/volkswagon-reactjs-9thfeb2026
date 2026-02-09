//function global(){
var x = 100;
var nameValue = "Joydip";
var isManager = true;

console.log(x, typeof x);
console.log(nameValue, typeof nameValue);
console.log(isManager, typeof isManager);

var a;
console.log(a, typeof a);

var res = x + a;
console.log(res, typeof res);

var fullName = nameValue + a;
console.log(fullName, typeof fullName);

var ref = null;
console.log(ref, typeof ref);

try {
  var divRes = x / 0;
  console.log(divRes, typeof divRes);
} catch (error) {
  console.log(error);
}
//}
//global()

//console.log(global);