//a sum function using JavaScript recursion that calculate total sum of the give value

function sum(arr){
    if (arr.length === 0){
        return 0
    }
    else{
       return arr[0] + sum(arr.slice(1))
    }
}

console.log(sum([1, 2, 3, 30]))