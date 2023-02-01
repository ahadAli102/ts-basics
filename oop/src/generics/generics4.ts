interface Mobile{
    name:string,
    camera:number,
    price:number
}

interface Laptop{
    model:string,
    price:number,
    pricessor:string,
    ram:number
}

class Sellable<T extends Mobile | Laptop >{
    public cartedProducts: T[] = [];

    public addToCart(product: T){
        this.cartedProducts.push(product);
    }
}

const iPhone = {name:'IPhone 13 pro', camera: 48, price: 1100}
const samsung = {name:'Samsung S22 Ultra', camera: 108, price: 1300}

const dell = {model:'XPS 17', price:1700, pricessor:'Intel Core i7', ram:32}
const macbook = {model:'Macbook M1 pro', price:2000, pricessor:'M1 pro', ram:32}

const mobiles =  new Sellable<Mobile>();
mobiles.addToCart(iPhone);
mobiles.addToCart(samsung);

const laptops =  new Sellable<Laptop>();
laptops.addToCart(dell);
laptops.addToCart(macbook);
const strings =  new Sellable<string>();


console.log(mobiles.cartedProducts);
console.log(laptops.cartedProducts);
console.log(string);