// JavaScript Factory Function | JS Class
// This is a basic object where have a method
const productData = {
    pName: "React Developer T-shirt",
    pPrice: 350,
    pStock: true,
    pDescription(){
        return `${productData.pName}, ${productData.pPrice}`
    }
}

console.log(productData.pDescription());


// Now we gonna convert it Factory function or JS Class
function peopleData(peopleName, peopleAge, marriedYes){
    return{
        peopleName: peopleName,
        peopleAge,
        marriedYes,
        completeDetails(){
            return `${this.peopleName}`
        }
    }
}

// console.log(peopleData('Mahmudul Hasan', 30, true));
console.log(peopleData('Mahmudul Hasan', 30, "Yes"));
console.log(peopleData('Kazi Sakib', 20, true));
console.log(completeDetails('Tushar', 25, "No"))