
// Find the correct length
function findLength(){
    let numbers = "123456789";
    let numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++){
        console.log(numbers[i]);
    }
}

findLength();

//--------------------------------- 
function myFunc() {
    for (let i = 0; i != 8; i += 2) {
      console.log("Still going!");
    }
  }
  
myFunc()

//without initializer ---------------------------
let j = 1;

for (; j < 10; j ++){
  console.log(j);
}

//without condition -----------------------------
for (let i = 0; ; i +=2){
  console.log(i)

  if ( i > 8){
    break;
  }
}