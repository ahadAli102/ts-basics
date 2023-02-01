"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let address = {
    id: 1,
    addr1: "Pune",
    addr2: "test",
    city: "Pune",
    country: "India",
    pin: 400000,
    data: 10,
};
let empList = [
    {
        id: 1,
        email: "test1@gmail.com",
        dob: new Date("11-Mar-1986"),
        department: "IT",
        name: "test1",
        salary: 10000,
        data: "",
    },
    {
        id: 2,
        email: "test2@gmail.com",
        dob: new Date("11-Mar-1980"),
        department: "IT",
        name: "test2",
        salary: 15000,
        data: "",
    },
    {
        id: 3,
        email: "test1@gmail.com",
        dob: new Date("11-Mar-1990"),
        department: "IT",
        name: "test3",
        salary: 20000,
        data: "",
    },
];
let newEmp = {
    id: 4,
    email: "test1@gmail.com",
    dob: new Date("11-Mar-1990"),
    department: "IT",
    name: "test3",
    salary: 20000,
    data: "",
};
empList = [...empList, newEmp];
let findEmp = empList.filter((emp) => emp.salary > 10000);
console.table(findEmp);
let salarysum = empList.map((emp) => emp.salary).reduce((a, b) => a + b);
console.log(salarysum);
let testUnion;
// let empType : empIntersection = {
// }
