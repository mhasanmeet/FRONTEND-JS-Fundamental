// Constructor function use new for object creation
function ProductData( name, price){
    this.name = name,
    this.price = price
}

const colocateProduct = new ProductData("KitKat", 100)

console.log(colocateProduct);