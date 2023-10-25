//sorting array element
let data7 = [9, 4, 1, 3, 5, 7, 0, 2, 1]
let sortEl = data7.sort() //sorting just 1 to 10
console.log(data7) // [0, 1, 1, 2, 3, 4, 5, 7, 9]

let data8 = [4, 5, 3, 7, 9, 10, 2, 20, 4, 40, 200, 300, 100, 990, 2000, 1000]
let sortEl2 = data8.sort((a, b) => a - b) //sorting any digit
console.log(sortEl2) //[ 2, 3, 4, 4, 5, 7, 9, 10, 20, 40, 100, 200, 300, 990, 1000, 2000]