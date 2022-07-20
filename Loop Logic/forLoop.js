// Find the correct length
function findLength(){
    let numbers = "123456789";
    let numbersLength = numbers.length;

    for (let i = 0; i < numbersLength; i++){
        console.log(numbers[i]);
    }
}

findLength();

//
function myFunc() {
    for (let i = 0; i != 4; i += 2) {
      console.log("Still going!");
    }
  }
  
  myFunc()