// a simple function with for loop
function simpleFunc(){
    for (var i = 0; i < arguments.length; i++){
        console.log("Argument Passed: " + arguments[i])
    }
}

//simpleFunc('Bangladesh', 'India');




// When it is arrow function it will not work
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

