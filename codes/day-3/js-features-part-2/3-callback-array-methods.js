const print = (fnRef, x, y) => {
    console.log(fnRef(x, y))
}
const add = (a, b) => a + b

print(add, 12, 13)

function filterElements(arr, logicFnRef) {
    const result = []
    for (const element of arr) {
        const isTrue = logicFnRef(element)
        if (isTrue)
            result.push(element)
    }
    return result
}
//source of data
const numbers = [1, 2, 3, 4, 5]

//logic to filter
const isEven = (num) => num % 2 === 0

//const evenNumbers = filterElements(numbers, isEven)
//Returns the elements of an array that meet the condition specified in a callback function.
const evenNumbers = numbers.filter(isEven)
// for (const element of evenNumbers) {
//     console.log(element);
// }
evenNumbers
    .forEach(
        (num) => console.log(num)
    )

//logic to filter
const isOdd = (num) => num % 2 !== 0

// const oddNumbers = filterElements(numbers, isOdd)
const oddNumbers = numbers.filter(isOdd)
// for (const element of oddNumbers) {
//     console.log(element);
// }
oddNumbers.forEach((num) => console.log(num))

const names = ['anil', 'sunil', 'joydip']
//logic to filter
const nameIncludesN = (name) => name.toLocaleLowerCase().includes('n')
// const namesWithN = filterElements(names, nameIncludesN)
const namesWithN = names.filter(nameIncludesN)
// for (const element of namesWithN) {
//     console.log(element);
// }
namesWithN.forEach(name => console.log(name))

const index = numbers.findIndex(
    (num) => num === 4
)
console.log(index);

function transform(arr, logic) {
    const res = []
    for (const element of arr) {
        //res.push("value: " + element)
        res.push(logic(element))
    }
    return res
}

const convertToString = (num) => "Value: " + num
//const result = transform(numbers, convertToString)

//Calls a defined callback function on each element of an array, and returns an array that contains the results.
const result = numbers.map(convertToString)
result.forEach(x => console.log(x))