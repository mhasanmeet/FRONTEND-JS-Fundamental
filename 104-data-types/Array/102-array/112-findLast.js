//find last element of the array
let data = [1, 2, 3, 4, 5, 9]
let lastData = data.findLast((el) => el);
console.log(lastData);

//find elements
let data2 = [1, 2, 3, 4, 5]
let specificEl = data2.findLast((el) => el < 4);
console.log(specificEl);


