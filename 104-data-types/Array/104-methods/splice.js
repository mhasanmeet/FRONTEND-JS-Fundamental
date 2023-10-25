//remove or replace elements in the array
let data11 = [10, 30, 40, 50, 60, 90]
let removeAll = data11.splice(0, 99) //delete 0 to 99
console.log(data11)


let removeNAdd =data11.splice(0, 1, 10, 20, 40, 60) //replace
console.log(data11)