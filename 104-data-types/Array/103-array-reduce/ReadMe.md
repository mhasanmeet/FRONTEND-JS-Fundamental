## Reduce Function

Reduce Function Have four arguments and a initial value 

* previous value / accumulator
* current value
* index
* array
* initial value

## How array reducer works

```js 

let arr = [10, 20, 30, 40]

arr.reducer((previousValue + currentValue) =>{
    return previousValue + currentValue
}, 0)