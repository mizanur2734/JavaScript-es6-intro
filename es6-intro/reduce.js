const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (const num of numbers){
    sum = sum + num;
}

const total = numbers.reduce((acc, curr) => acc + curr)

console.log(sum)
console.log(total)