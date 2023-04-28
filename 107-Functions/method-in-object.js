// This is object
const productData = {
    pName: "React Developer T-shirt",
    pPrice: 350,
    pStock: true,

    // This is function, but when we use in object then it is called method
    pDescription: function(){ // we can write this shortcust as ---- pDescription(){}
        return `${productData.pName}, ${productData.pPrice}, ${productData.pStock}`
    }

}

console.log(productData.pDescription());

// Output 
// React Developer T-shirt, 350, true