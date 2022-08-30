
// Example of Nested function and inner function
function personData(name, age){
    function personName(){
        console.log(name, age);
    }

    personName()
}

personData("Mahmudul", 29)