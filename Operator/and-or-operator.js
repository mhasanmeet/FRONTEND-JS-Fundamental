
// OR Operator

let name = "";

if(name.length === 0 ){
    fullName = "Mahmudul Hasan"
} else{
    fullName = name;
}

console.log(fullName);


// Short version of this code by using OR Operator, || 

let personName =  "Mahmudul";

let personFullName = personName || "Mahmudul Hasan";

console.log(personFullName)


// AND Operator

let data = true;

if (data){
    console.log("This is true")
}else{
    console.log("This is false")
}


// Making it short by suing && (And) Operator
let data2 = true;

data2 && console.log("This is true")