/**
 * Undefine -> Not defined
 */

let money; // undefined
console.log(money);

function total (a, b){
    console.log('value of parameters', a, b)
    const sum = a + b;
    console.log('total is', sum)
}
// total(2)
const result = total(2, 3);
console.log(result)

const phone = {
    name: 'iPhone 12',
    price: 999,
    color: 'black'
}
console.log(phone.brand)

const banks = ['Bank of America', 'Chase', 'Wells Fargo'];
delete banks[1]
console.log(banks[1]) // undefined because the element at index 1 was deleted
console.log(banks[2]) // "Wells Fargo" because it shifted down to index 2


// let fruits = ["apple", "banana"];
// fruits.push("orange");
// console.log(fruits)


// let x = 100;
// let y = "Hello";
// let z = [1,2,3];
// console.log(typeof x) // number
// console.log(typeof y) // string
// console.log(typeof z) // object (arrays are a type of object in JavaScript) 


// let a = 5;
// let b = 10;
// let c; // c is declared but not assigned a value, so it's undefined

// console.log(a + b + c); // NaN because c is undefined


// const person = [
//     {
//   name: "Mizan",
//   age: 25,
//   city: "Dhaka"
// }
// ];
// person.forEach(element => {
//     console.log(element.name, element.age, element.city);
// });  