
// const a = [1,2,3]
// const b = [...a]

// a.push(4)
// console.log("a: " + a)
// console.log("b: " + b)


const obj = {
    // a: 1,
    b: 2,
    // c: 3,
    d: 4
}
const {a, c, ...rest} = obj
console.log(rest)