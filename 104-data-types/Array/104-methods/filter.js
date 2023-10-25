//filter data with condition
let data12 = [10, 30, 40, 50, 60, 90]
let filterData = data12.filter(element => {
    if (element > 50){
        return element
    }
})
console.log(filterData) //[ 60, 90 ]