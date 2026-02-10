const anilObj = {
  id: 1,
  name: "anil",
  salary: 1000,
};

// const anotherCopy = Object.assign({}, anilObj);
// console.log(anotherCopy);

/**
 * function assign(target, source){
 // const copyOfAnil = {};
for (const propName in source) {
  const propValue = source[propName];
  //console.log(`${propName}:${propValue}`);
  target[propName] = propValue;
}
  return target
}

console.log(copyOfAnil);
 */

const copyOfAnil = {
  ...anilObj,
};

console.log(copyOfAnil);

const numbers = [10, 20, 30];
//const numbers = new Array(10,20,30)
// { 0:10, 1:20, 2:30}

//const copyOfNumbers = [];
// for (const index in numbers) {
//   const value = numbers[index];
//   //console.log(`${index}:${value}`);
//   copyOfNumbers[index] = value;
// }
const copyOfNumbers = [...numbers, 40, 50];
console.log(copyOfNumbers);
