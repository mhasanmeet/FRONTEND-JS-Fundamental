// A basic Function
function functionName(){
    console.log("Hello World");
}

// Function Call, Invocation by calling
// When we write a function it need to be call, without calling function will not work 
functionName();





// Function with Parameter & Argument
function functionWithParameter(Name, Age){
    console.log("My name is:", Name, "and I'm", Age, "Years Old");
}

//Function Call with Argument 
functionWithParameter("Mahmudul", 28);





//Self Invocation Function, it will start/call automatically
(function selfInvocation(){
    console.log("Hello World")
})();




// Returning Value, the return statement is used to return a particular value from 
// the function to the function caller
function returnValue(x, y){
    return x+y
}

console.log(1 + 9);





// Return Value using Array
function returnValueByArray(){
    let Name = "Mahmudul Hasan";
    let Age = 28;

    return [Name, Age]
}

let [Name, Age] = returnValueByArray(); //destructuring
console.log(Name);
console.log(Age);





// Return Value using object
function returnValueByObject(){

    return {name: "Mahmudul Hasan", age: 28}
}

let {name, age} = returnValueByObject();
console.log(name);
console.log(age);