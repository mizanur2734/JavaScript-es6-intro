const student = {
    first: 'John',
    last: 'Doe',
    age: 30,
    famill:{
        title: "buhya",
        // mother: {
        //     name: "noor jahan",
        //     age: 50,
        // }
    },
    1: 50,
    'home address': '123 Main St'
};
// console.log(student.famill.title)
console.log(student.famill.mother?.name)