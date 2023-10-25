//Array Flatten
const newArr = [10, 20, [30, 40], [[50, 60], [70, 80]]];

const flatArray = newArr.flat(2) //flat(2) means how much depth you want to flatten the array
const flatAllArray = newArr.flat() //flat all nested array 
console.log(flatArray) // [10, 20, 30, 40, 50, 60, 70, 80]

//