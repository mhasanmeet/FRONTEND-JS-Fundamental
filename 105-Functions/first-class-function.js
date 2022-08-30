/*

    - First Class Function rules

    1. Function can stored in a variable
    2. Function can be stored in an array
    3. Function can be stored in an object
    4. we can create function as need
    5. We can pass function as an arguments
    6. we can return function(s) from another function

*/

//-----------------------------------
//Function can stored in a variable
// A function
function sumData(a, b){
    return a + b
}

// Can store as variable
let data = sumData
console.log(data(4, 9))

//-----------------------------------
//Function can be stored in an array
// Declare an Array
let arrayData = []
//push SumData into array
arrayData.push(sumData)
//calculate the sumData in array 0 index's
console.log(arrayData[0](9, 19))

//-----------------------------------
// Function can be stored in an object
let objData = {
    sum: sumData
}

console.log(objData.sum(9, 10))