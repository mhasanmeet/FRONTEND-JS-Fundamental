function test(time){

    if (time < 10){
        return "Good Morning"
    }else if (time < 20){
        return "Good Day"
    }else {
        return "Good Evening"
    }
}

console.log(test(23));