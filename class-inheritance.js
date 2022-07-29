// Let's have a constructor function
class productData{
    constructor(pName, pPrice){
        this.pName = pName;
        this.pPrice = pPrice;
        this.pStock = () =>{
            console.log(`The Product ${this.pName} & the Price is ${this.pPrice} is Stocked`)
        }
    }
}

// Initiate Class inheritance here now
// Inheritance means include a class content into another, so that we don't need to add every info in the next class
class productData2 extends productData {
    constructor (pName, pPrice, pStock, pColor){
        super(pName, pPrice, pStock);
        this.pColor = pColor
    }
}

// Initiate A New Object
const ReactTShirt = new productData2("React Developer T Shirt", "350 Taka", "Yes", "Black");

// Check result
//console.log(ReactTShirt);

// Output
/*
productData2 {
    pName: 'React Developer T Shirt',
    pPrice: '350 Taka',
    pStock: [Function (anonymous)],
    pColor: 'Black'
  }
*/

// Let's have a method in class

// Class
class carData{
    constructor(cName, cPrice){
        this.cName = cName;
        this.cPrice = cPrice;
        }

        // Method (Usually a function)
        cStocked (){
            console.log(`The Product ${this.cName} & the Price is ${this.cPrice}. This Product is Stocked.`)
        }
    }

class carColor extends carData{
    constructor(cName, cPrice, cColor){
        super(cName, cPrice);
        this.cColor = cColor;
    }
}

const car1 = new carColor("BMWi8", "12000000", "Black");

console.log(car1.cStocked());