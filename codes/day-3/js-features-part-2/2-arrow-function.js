// function outer() {
//     this.x = 10
//     console.log(this);

//     const ref = this
//     function inner() {

//         this.y = 20
//         console.log(this);
//         //console.log(this.x + this.y);
//         console.log(ref.x + this.y);
//     }
//     inner()
// }

// function outer() {
//     this.x = 10
//     console.log(this);

//     let inner = function () {
//         this.y = 20
//         console.log(this);
//         console.log(this.x + this.y);
//     }

//     //For a given function, bind() method creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.
//     inner = inner.bind(this)
//     //inner()
//     return inner
// }

function outer() {
    this.x = 10
    console.log(this);

    //arrow function
    //For a given function, arrow function syntax, behind the scene, creates a bound function that has the same body as the original function. The this object of the bound function is associated with object, to which the immediate outer function is bound to, and has the specified initial parameters.
    const inner = () => {
        this.y = 20
        console.log(this);
        console.log(this.x + this.y);
    }
    //inner.Bind(this)
    //inner()
    return inner
}

//new outer()
const innerRef = new outer()
innerRef()

// function Wrapper() {
//     this.x = 10
//     class Wrapped {
//         y = 20
//         print = () => {
//             console.log(this.x + this.y);
//         }
//     }
// }

//HOC => Higher Order Component

//function declaration
function add(a, b) {
    return a + b
}

//function expression
const subtract = function (a, b) {
    return a - b
}

//function expression using arrow function style with function body
const multiply = (a, b) => {
    return a * b
}

//function expression using arrow function style with expression body
const divide = (a, b) => a / b