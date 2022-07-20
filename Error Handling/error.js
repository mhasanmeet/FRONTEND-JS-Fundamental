
// try...catch method

try{
    console.log("Get execute without error")
} catch (err){
    console.log(err)

    // If try section executed successfully then JS engine ignore catch block section, if there is any error
    // then JS engine gives us error message and error cause
}

// try catch does not work for asynchronous code.

// we can extended "try...catch" method by ".... finally"

try{
    //Code here

} catch (err){
    // Code here
    
} finally{
    // Code here
}