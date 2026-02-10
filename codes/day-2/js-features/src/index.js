var m = 200;
var n = 400
function test() {
  console.log(x); //undefined
  var x;
  x = 10;
  console.log(x); //10

  for (var i = 0; i < 1; i++) {
    var x;
    x = 20;
    console.log(x); //20
  }
  console.log(x); //20

  //declaration syntax
  function inner() {
    var a;
    a = 100;
    console.log(x + a + m); //100
  }
  inner();
}

test();

//expression syntax
var some;
some = function () {};
