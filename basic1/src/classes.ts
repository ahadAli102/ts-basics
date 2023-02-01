interface Address1{
    name:string;
    city:string;
}

class Employee {
    name:string;
    salary:number;
    address:Address1;
    constructor(name:string, salary:number, address:Address1) {
        this.name = name;
        this.salary = salary;
        this.address = address;
    }
}


const employee = new Employee('ahad',1000,{name:'khilgaon',city:'dhaka'});

console.log(employee);
