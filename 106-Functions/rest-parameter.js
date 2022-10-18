// function 
function simpleFunc(){
    for (var i = 0; i < arguments.length; i++){
        console.log("Argument Passed: " + arguments[i])
    }
}

//simpleFunc('Bangladesh', 'India');

// When it is array function it will not work
const simpleArrayFunc = () =>{
    for (var i = 0; i < arguments.length; i++){
        console.log("Argument Passed: " + arguments[i])
    }
} 

//simpleArrayFunc("Bangladesh", "UK")


// Spread Operator
function simpleRestParam(...anyName){
    for(var i = 0; i < anyName.length; i++){
        console.log("Argument Passed:" + anyName[i])
    }
}

simpleRestParam('Bangladesh', 'UK')

let a = 20;
let b = 5;
let c = a % b;

console.log(c);

// output: 5 

