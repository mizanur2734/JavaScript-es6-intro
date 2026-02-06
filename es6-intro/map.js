const numbers = [1, 2, 3, 4, 5];

// const doble = [];
// for (const num of numbers){
//     const result = num * 2;
//     doble.push(result)
// }

const doble = numbers.map(num => num * 2);
const square = numbers.map(num => num * num);
// console.log(doble);
// console.log(square);

const friends = ["johan", "michael", "sarah"];
const friendsLength = friends.map(friend => friend.length);
const fristletter = friends.map(friend => friend[0].toLowerCase());

const result = numbers.map((num, index) => {
    console.log(num * index)
})
// console.log(friendsLength)
// console.log(fristletter)