const numbers = [1, 2, 3, 4, 5];
// console.log(numbers)
// console.log(...numbers)

const max1 = Math.max(1, 2, 3, 4, 5);
const max2 = Math.max(...numbers);

console.log(max1)
console.log(max2)

const age = [22, 33, 44, 55];
const price = [100, 200, 300, 400];
const allAge = [...age, 5555, ...price];
console.log(allAge)