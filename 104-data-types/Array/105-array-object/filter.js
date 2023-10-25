//filter data with condition

let infoData = [
    {id: 1, name: "name1", age: 29, isMarried: false},
    {id: 2, name: "name2", age: 28, isMarried: false},
    {id: 3, name: "name3", age: 38, isMarried: true},
    {id: 4, name: "name4", age: 30, isMarried: true}
]

const filteredData = infoData.filter((el) => el.age >= 30)
console.log(filteredData)

/*

[
  { id: 3, name: 'name3', age: 38, isMarried: true },
  { id: 4, name: 'name4', age: 30, isMarried: true }
]

*/