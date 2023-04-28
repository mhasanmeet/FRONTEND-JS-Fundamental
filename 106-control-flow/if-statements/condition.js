//function test with parameter myCondition
function test(myCondition){

    // if myCondition is true then print/return it is true
    if(myCondition){
        return "It is true";
    }
    // else not true then print/return it is false
    return "It is false";
}

console.log(test(true));
console.log(test(false));