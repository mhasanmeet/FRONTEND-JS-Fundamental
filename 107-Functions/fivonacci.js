function fivonacci(n){
    if(n === 0 || n === 1){
        return n
    }
    else{
        return fivonacci(n - 1) + fivonacci (n - 2)
    }
}

console.log(fivonacci(10))