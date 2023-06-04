//📑 Object.entries()
//📑 Object,entries() gives full list of key value pairs of object and arrays data
const objData = {
    name : "Mahmudul Hasan",
    age : 28,
    isMarried : false
}

//📑 const entries = Object.entries(objData)
console.log(entries) // or
console.log(Object.entries(objData))
// [ [ 'name', 'Mahmudul Hasan' ], [ 'age', 28 ], [ 'isMarried', false ] ]


const arrData = [13, 25, 30]
console.log(Object.entries(arrData))
// [ [ '0', 13 ], [ '1', 25 ], [ '2', 30 ] ]


//📑 iterate through list
for (let i = 0; i < entries.length; i ++){
    console.log(`${entries[i][0]}: ${entries[i][1]}`)
}
/* 
name: Mahmudul Hasan
age: 28
isMarried: false
*/

const mapData = new Map(Object.entries(objData))
console.log(mapData.size) //total object quantity
console.log(mapData.get("age")) //get specific object data





//📑 Object.assign()
const obj = {
    a : 0,
    b : 1,
    c : 2
}

const obj2 = {
    d : 3,
    e : 4,
    f : 5
}

Object.assign(obj, obj2)
console.log(Object.entries(obj))
// [["a", 0], ["b", 1], ["c", 2], ["d", 3], ["e", 4], ["f", 5]]





//📑 Object.freeze()
//📑 In arrays and object const still can be altered, to solve this issue we can use Object.freeze()
//📑 It is also works for Arrays
const frz = {
    a : 1,
    b : 2,
    c : 3
}

Object.freeze(frz)

//📑 Now we can not change internal value of objects
frz.a = 4

console.log(frz)
// { a: 1, b: 2, c: 3 }
console.log(Object.entries(frz))
//[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//📑 We can check object is frozen or not 
console.log(Object.isFrozen(frz)) //true






//📑 Object.keys() 
// We can get keys of Object from this method
const keys = {
    a: 0,
    b: 1,
    c: 2
}

console.log(Object.keys(keys))
// [ 'a', 'b', 'c' ]





//📑 Object.values()
//📑 Same as Object.keys()
const val = {
    a: 0,
    b: 1,
    c: 2
} 

console.log(Object.values(val))
//[ 0, 1, 2 ]



//Others
//📑 Object.seal()



