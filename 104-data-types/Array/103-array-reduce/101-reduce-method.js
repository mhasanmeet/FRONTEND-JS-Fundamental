//A reduce method details

//an array
let data = [1, 2, 3, 4, 5, 6];

// Reduce function
function sumFunc(previousValue, currentValue){
    return previousValue + currentValue
}

//Reduce method
let sum = data.reduce(sumFunc, 0);
console.log(sum);





let rightToLeft = data13.reduceRight((prev, prev) => {
    return prev + prev
})
console.log(rightToLeft) //50





//find out average value of the total values
let data2 = [1, 2, 3, 4, 5];

let avg = data2.reduce((preVal, curVal, index, arr) => {
    preVal += curVal;
    if(index === arr.length - 1){
        return preVal / arr.length
    }
    return preVal;
})

console.log(avg);

