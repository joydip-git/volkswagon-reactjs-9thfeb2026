const divide = async (a, b) => {
    const result = a / b
    if (result === Infinity) {
        const ex = new Error('divisor should not be zero')
        throw ex
    }
    return result
}

const add = (a, b) => a + b

/*
const promiseObject = divide(12, 3)
promiseObject
    .then(
        (data) => {
            console.log(data)
        }
    )
    .catch(
        (err) => console.log(err)
    )
*/
async function callDivide() {
    try {
        const p = divide(12, 3)
        const data = await p
        console.log(data);
    } catch (err) {
        console.log(err)
    }
}
callDivide()

const addRes = add(12, 3)
console.log(addRes);