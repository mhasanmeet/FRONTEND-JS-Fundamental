## Important Functions Concepts & Definition

Function Structure
![Structure](./Images/structure.png)

## functions Topics

### What is function?
Function is block area in JavaScript, where we do some specific calculation, or make a mechanism which can do calculation, in JavaScript program. Like we can do two sum addition, and we can use those value in others area. 

```JS 

    // Here is a addition function 
    function addition(number1, number2){

        // our prototype / algorithm is calculate 2 number 
        console.log(number1 + number2)
    }

    //here is a new function production
    addition(2, 3) // Output: 5

    //another function production
    addition(5, 7) // Output: 12
```
### What is function keyword?
### What is Parameter?
### What is Arguments? 
### What is difference between `console.log` and `return` in function?
> `return` in function use for return the value from the functional block. JS engine halt the execution and returning the value what it asked to return, when find the `return` keyword. 

Here is an example. 
```js 

    function rtn(num1, num2){
        return num1 + num2;
    }

    console.log(rtn(2,4)) //output: 6

```
another,

```js 

    function count(n){
        for (let i = 1; i < n; i++){
            return i;
        }
    }

    console.log(count(5)) //output: 1
``` 
Here is important factor is what return give us. In the for loop in count function, return returning i value, the initial i value is 1, what is return give us, therefore whatever value we console.log, is give us just 1. 

> `console.log` is use for process the value and variable in the function. 

```js 

    function rtn(num1, num2){
        console.log(num1 + num2);
    }

    rtn(4, 5);
```

```js

    function count(n){
        for (let i = 1; i < n; i++){
            console.log(i);
        }
    }

    console.log(count(3))
    
    /*
    output: 
    1
    2
    undefined
    */
```
In here it give us expected logging out value, expect last undefined. Since we never specified a return, it give us undefined in the last value. 
### What is Callback Function?
When a Function **takes a function as a parameter** and **that function called inside the function**, then it is called callback function.
### What us Function Expression? 
### Pure function  
### First Class function 
### closures 
### callback Function 

