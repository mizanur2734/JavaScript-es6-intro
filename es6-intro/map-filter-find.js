const numbers = [
    {id: 1, name: "john", age: 30},
    {id: 2, name: "jane", age: 40},
    {id: 3, name: "doe", age: 35},
]

const names = numbers.map(x => x.name);
const ages = numbers.filter(x => x.age > 30);
const ages2 = numbers.find(x => x.age > 30)
// console.log(ages)
console.log(ages2)