"use strict";
class User {
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Dhaka";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    get getUserId() {
        return this.userId;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class PremiumUser extends User {
    constructor(price, name, email, userId) {
        super(name !== null && name !== void 0 ? name : 'no', email !== null && email !== void 0 ? email : 'no@no.com', userId !== null && userId !== void 0 ? userId : '000');
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    get courseCount() {
        return this._courseCount;
    }
}
const ahad = new User("ahad", "a@a.com", '123');
console.log(ahad);
const premiumUser1 = new PremiumUser(123);
const premiumUser2 = new PremiumUser(123, "ahad", "a@a.com", '123');
console.log(premiumUser1);
console.log(premiumUser2);
