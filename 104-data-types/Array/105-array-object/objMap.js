let infoData = [
    {id: 1, name: "name1", age: 29, isMarried: false},
    {id: 2, name: "name2", age: 28, isMarried: false},
    {id: 3, name: "name3", age: 38, isMarried: true},
    {id: 4, name: "name4", age: 30, isMarried: true}
]

const outPut = infoData.map((val) => {
    return {
        ...val,
        title: `Hello my name is ${val.name}`,
        message: `I am ${val.isMarried ? "married" : "not married"}`
    }
})

console.log(outPut)