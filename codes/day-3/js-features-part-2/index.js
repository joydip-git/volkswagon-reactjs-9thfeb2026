const divide = (a, b) => {
    /**
     * Creates a new Promise.
executor function: 
A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
     */
    const p = new Promise(
        //executor function
        (resolveFnRef, rejectFnRef) => {
            const res = a / b
            if (res === Infinity) {
                const exception = new Error('b can not be zero')
                //throw exception
                rejectFnRef(exception)
            }
            //return res
            resolveFnRef(res)

        }
    )
    return p
}

const add = (a, b) => a + b

const promiseObject = divide(12, 3)
promiseObject
    .then(
        (data) => { console.log(data); }
    )
    .catch(
        (err) => { console.log(err); }
    )
console.log(add(12, 3))