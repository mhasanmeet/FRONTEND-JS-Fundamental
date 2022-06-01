// Constructor function use new for object crearion
function ProductData( name, price){
    this.name = name,
    this.price = price
}

const cholocateProduct = new ProductData("KitKat", 100)

console.log(cholocateProduct);