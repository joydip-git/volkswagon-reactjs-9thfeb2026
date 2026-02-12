const divide = (a, b) => {
    const p = new Promise(
        //executor function
        //resolveFn: (value: any) => void
        //rejectFn: (reason?: any) => void
        (resolveFn, rejectFn) => {
            const result = a / b
            if (result === Infinity) {
                const ex = new Error('divisor should not be zero')
                //throw ex
                rejectFn(ex)
            }
            resolveFn(result)
            //return result
        }
    )
    return p
}

const add = async (a, b) => a + b

const promiseObject = divide(12, 3)
promiseObject
    .then(
        (data) => {
            console.log(data)
            //perform other async operations which depends on the succes of the divide operation
            const addPromise = add(data, 3)
            addPromise
                .then(
                    (addRes) => console.log(addRes)
                )
                .catch(
                    (er) => console.log(er)
                )
        }
    )
    .catch(
        (err) => console.log(err)
    )

// const addRes = add(12, 3)
// console.log(addRes);