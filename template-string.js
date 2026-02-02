// const jatiasongit = "amr sonar bangla \n" + "amit tomai valo basi" + "tumi jano na \n" + "koto valobashi tomay";
const jatiasongit = `amr sonar bangla
amit tomai valo basi
tumi jano na
koto valobashi tomay`;
// console.log(jatiasongit);

function sum(num1, num2){
    const result = num1 + num2;
    // const output = 'sum of ' + num1 + ' and ' + num2 + ' is ' + result;
    const output = `sum of ${num1 * 2} and ${num2} is ${result}`;
    console.log(output);
}
sum(20, 30);

const price = 50;
const discountPrice = `discountPrice of ${price} after 20% discount: ${(price * 0.8)}`;
console.log(discountPrice)