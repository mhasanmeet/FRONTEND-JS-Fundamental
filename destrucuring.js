// JavaScript Destructing

var fruitsName = ["Mango", "Lichi", "Jackfruits", "Pineapple"]

const [MangoJam, LichiJam, JackfruitJam, PineappleJam] = fruitsName;

console.log(MangoJam) // OutPut = Mango
console.log(LichiJam) // OutPut = Lichi ternary operator


//-----------------

//Let have an object
let person = {
    firstName: "Mahmudul",
    lastName: "Hasan",
    age: 28,
    sex: "Male",
    height: 5.9
}

// Without Destructuring
let first = person.firstName; // Get Person first Name
let city = person.city || "Dhaka"; //assign Person City property and value at the same time
console.log(city); // Output: "Dhaka"

// With Destructuring
let {firstName: firstN, age, cityN = "Dhaka;" } = person;
console.log(firstN); // Mahmudul

