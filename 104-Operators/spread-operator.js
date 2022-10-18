// JavaScript Spread Operator

// Array of Sum
var products = [1, 2, 3, 4, 5];

// Take a function
function calculateTotal(a, b, c, d){
    console.log("Total: " + (a + b+ c+ d))
}

// Calculate total using spread operator
//calculateTotal(...products)

// JS Push using spread operator
var fruitsName = ["Apple", "Mango", "Jackfruits"];

const addLichi = [...fruitsName, "Lichi"]

console.log(addLichi)

// Add two array 
var array1 = [1, 2, 3, 4]
var array2 = [5, 6, 7, 8]

var addOfArray1and2 = [...array1,...array2];

console.log(addOfArray1and2);
