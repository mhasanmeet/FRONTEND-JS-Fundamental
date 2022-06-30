
let data = [2, 9, 10, 12];
let data2 = [10, 31]

// insert Array elements in the end
data.push(10, 20)
console.log(data);

// Old Style method
Array.prototype.push.apply(data, data2);

console.log(data);

// ES6 spread operator Method
let data3 = [3, 10, 11, 13];
let data4 = [12, 33]

data3.push(...data4);
console.log(data3);

// insert Array elements in the beghining
let = data5 = [1, 2, 3]
data5.unshift(10, 20)
console.log(data5);

// By Spread operator
let = data5 = [1, 2, 3]
let data6 = [ 10, 20]
data5.unshift(... data6);
console.log(data5);


// slice
// Split