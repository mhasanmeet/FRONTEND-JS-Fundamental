const persons = ["Mahmudul", "Sakib", "Tamim", "Sakib", "Tamim", "Mahmudul"]

const result = persons.reduce((acc, cur) => {
    if(acc[cur]){
        acc[cur]++
    }
    else{
       acc[cur] = 1 
    }

    return acc
}, {})

console.log(result)

//{ Mahmudul: 2, Sakib: 2, Tamim: 2 }