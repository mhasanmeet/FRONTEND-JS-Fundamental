
// Object
var product = {
    productName: "T-shirt",
    Price: 20,
    "is Stock" : true
}

//Dynamic data
let StockStatus = "is Stock"

// output
console.log(product.productName);
console.log(product["is Stock"]);
console.log(product[StockStatus]);

// Find the correct lenght

function findLenght(){
    let numbers = "123456789";
    let numbersLenght = numbers.length;

    for (let i = 0; i < numbersLenght; i++){
        console.log(numbers[i]);
    }
}

findLenght();