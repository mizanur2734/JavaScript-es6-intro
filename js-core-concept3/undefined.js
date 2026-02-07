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