var a = 5
// function outer() {
//     var x = 10
//     console.log(a + x);

//     function inner() {
//         var y = 20
//         console.log(a + x + y);//??
//     }
//     inner()
// }

function outer() {
    var x = 10
    console.log(a + x);

    function inner() {
        var y = 20
        console.log(a + x + y);//??
    }
    return inner
}

const innerRef = outer()
innerRef()

function getData() {
    //a resource has been allocated here to read data from a file asynchronously   
    function cleanUp() {
        //resource has to be cleaned up
    }
    return cleanUp
}

// setInterval(
//     function () {
//         const clean = getData()
//         clean()
//     },
//     2000
// )
