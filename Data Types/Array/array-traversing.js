let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let doubleNumber = number.map(n => n * 2); // output [0,  2,  4,  6,  8, 10, 12, 14, 16, 18]

let evenNumber = number.filter(n => n % 2 === 0); // output [0, 2, 4, 6, 8]

let oddNumber = number.filter(n => n % 2); // output [ 1, 3, 5, 7, 9 ]

let sum = number.reduce((next, prev) => prev + next, 0) // Output: 45

let greaterThan = number.find((n) => n > 4); // Output: 5