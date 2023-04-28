// Object is a reference value data type

var product = {
    productName: "T-shirt",
    Price: 20,
    "is Stock" : true
}

//we can put object value into variable
let StockStatus = "is Stock"

// output
console.log(product.productName);
console.log(product["is Stock"]);
console.log(product[StockStatus]);