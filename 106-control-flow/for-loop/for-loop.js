
// Print all numbers
function printNumbers(){
    let numbers = "123456789";

    for (let i = 0; i < numbers.length; i++){
        console.log(numbers[i]);
    }
}

printNumbers();

//print the output if for loop execute and true the condition
function myFunc() {
    for (let i = 0; i != 4; i += 4) {
      console.log("Still going!");
    }
  }
  
myFunc()

//without initializer into loop put the initializer outside the loop
let j = 1;

for (; j < 10; j ++){
  console.log(j);
}

//without condition into loop and put the condition outside the loop
for (let i = 0; ; i +=2){
  console.log(i)

  if ( i > 8){
    break;
  }
}

//for loop without the loop body
let sum  = 9;

for (let i = 0; i <= 9; i++, sum += i);
console.log(sum)
//output: 64