//multiplication array by map method
var arr = [10, 20, 30, 40]

const map = arr.map((x) => [x * 2])
console.log(map) //[ [ 20 ], [ 40 ], [ 60 ], [ 80 ] ]





//array multiplication and then flat the array
var arr = [10, 20, 30, 40]

const flatArr = arr.map((x) => [x * 2]).flat()
console.log(flatArr) //[ 20, 40, 60, 80 ]

//same as map method
const flatMap = arr.flatMap((x) => [x * 2])
console.log(flatMap) //[ 20, 40, 60, 80 ]





//multiplication by reduce method
var arr = [10, 20, 30, 40]

const reduceArr = arr.reduce((preVal, curVal) =>{
    return preVal.concat(curVal * 2)
}, [])

console.log(reduceArr) //[ 20, 40, 60, 80 ]