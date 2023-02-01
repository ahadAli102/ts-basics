"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    constructor(name, price, category) {
        this._id = 0;
        this.name = name;
        this.price = price;
        this.categoty = category;
        this.address = { id: 0, data: { postCode: 0 } };
    }
    add(num1, num2) {
        return num1 + num2;
    }
    getproductWithPrice() {
        return `${this.name} costs ${this.price}`;
    }
}
let mobilePhone = new Product("One Plus 9", 50000, "Mobile Phones");
mobilePhone.id = 10;
console.log(mobilePhone);
console.log(mobilePhone.getproductWithPrice());
class Mobile extends Product {
    //   constructor(name: string, price: number, category: string) {
    //     super(name, price, category);
    //   }
    getproductWithPrice() {
        return super.getproductWithPrice();
    }
}
let applePhones = new Mobile("Apple 11", 10000, "Mobile Phones");
console.log(applePhones.getproductWithPrice());
console.log(applePhones);
class Base {
    constructor() {
        this.data = [];
    }
}
class Department extends Base {
    constructor() {
        super();
        this.data = [];
    }
}
