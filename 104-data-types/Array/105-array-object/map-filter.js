// we demonstrate map and filter here at the same time

let infoData = [
    {id: 1, name: "name1", age: 29, isMarried: false},
    {id: 2, name: "name2", age: 28, isMarried: false},
    {id: 3, name: "name3", age: 38, isMarried: true},
    {id: 4, name: "name4", age: 30, isMarried: true}
]

const data = infoData.filter((el) => el.age >= 30).map((el) => {return {...el, status: `I am ${el.isMarried ? "married" : "not married"}` }})

const data2 = infoData.filter((el) => el.age >= 30)
                    .map((el) => {
                        return {
                            ...el, 
                            status: `I am ${el.isMarried ? "married" : "not married"}` 
                        }
                    }
                )

console.log(data)



/*

[
  {
    id: 3,
    name: 'name3',
    age: 38,
    isMarried: true,
    status: 'I am married'
  },
  {
    id: 4,
    name: 'name4',
    age: 30,
    isMarried: true,
    status: 'I am married'
  }
]

*/