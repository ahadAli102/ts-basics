class User {

    protected _courseCount = 1
    
    readonly city: string = "Dhaka"
    constructor(
        public name: string,
        public email: string, 
        private userId: string
        ){
    }
    private deleteToken(){
        console.log("Token deleted");
        
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    get getUserId() : string{ 
        return this.userId;
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class PremiumUser extends User {
    
    constructor(private price: number, name?: string, email?: string,userId?: string){
        super(name ?? 'no',email?? 'no@no.com',userId?? '000');
    }
    getPrice():number{
        return this.price;
    }

    get courseCount():number{
        return this._courseCount;
    }

}

const ahad = new User("ahad","a@a.com",'123');
console.log(ahad);

const premiumUser1 = new PremiumUser(123);
const premiumUser2 = new PremiumUser(123,"ahad","a@a.com",'123');
console.log(premiumUser1);
console.log(premiumUser2);