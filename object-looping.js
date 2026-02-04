const numbers = [10, 20, 30, 40, 50];

for (const num of numbers){
    console.log(num);
}

const emplayee = {
    name: "John Doe",
    position: "Software Engineer",
    department: "Development",
    startDate: "2022-01-15",
    salary: 70000,
}

for(const key in emplayee){
    const value = emplayee[key]; 
    console.log(key, value)
}
const keys = Object.keys(emplayee);
console.log(keys);
for(const key of keys){
    const value = emplayee[key];
    console.log(key, value)
}