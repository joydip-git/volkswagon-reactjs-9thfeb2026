//(...) -> rest operator
//use to declare any array (as part of the function's argument list) which will be able to store any number of arguments (after the fixed number of arguments)
//this type of array to accept unknown of arguments can be declared ONLY once on the function's argument list
//that array should be the last one in the function's argument list
//this operator can be used to declare such array ONLY as part of the function's argument list, NOT to declare just any local array
function calculateAverage(name, ...marks) {
  if (marks.length > 0) {
    let sum = 0;
    let avg = 0;
    for (const mark of marks) {
      sum += mark;
    }
    avg = sum / marks.length;
    console.log(`average of marks of ${name} is ${avg}`);
  } else {
    console.log(`average of marks of ${name} is 0`);
  }
}

calculateAverage("anil", 10, 20);
calculateAverage("sunil", 25, 23, 34);
calculateAverage("joydip");
