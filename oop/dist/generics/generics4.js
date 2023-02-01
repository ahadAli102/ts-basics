"use strict";
class Sellable {
    constructor() {
        this.cartedProducts = [];
    }
    addToCart(product) {
        this.cartedProducts.push(product);
    }
}
const iPhone = { name: 'IPhone 13 pro', camera: 48, price: 1100 };
const samsung = { name: 'Samsung S22 Ultra', camera: 108, price: 1300 };
const dell = { model: 'XPS 17', price: 1700, pricessor: 'Intel Core i7', ram: 32 };
const macbook = { model: 'Macbook M1 pro', price: 2000, pricessor: 'M1 pro', ram: 32 };
const mobiles = new Sellable();
mobiles.addToCart(iPhone);
mobiles.addToCart(samsung);
const laptops = new Sellable();
laptops.addToCart(dell);
laptops.addToCart(macbook);
const strings = new Sellable();
console.log(mobiles.cartedProducts);
console.log(laptops.cartedProducts);
console.log(string);
