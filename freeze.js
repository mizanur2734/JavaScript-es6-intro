const emplayee = {
    name: "John Doe",
    position: "Software Engineer",
    department: "Development",
    startDate: "2022-01-15",
    salary: 70000,
}
Object.freeze(emplayee);
delete emplayee.startDate;
emplayee.salary = emplayee.salary + 75000;
emplayee.location = "New York";
console.log(emplayee)