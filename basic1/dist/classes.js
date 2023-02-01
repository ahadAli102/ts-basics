"use strict";
class Employee {
    constructor(name, salary, address) {
        this.name = name;
        this.salary = salary;
        this.address = address;
    }
}
const employee = new Employee('ahad', 1000, { name: 'khilgaon', city: 'dhaka' });
console.log(employee);
