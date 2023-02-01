class User1 {
    public email: string
    private name: string
    readonly city: string = "Dhaka"
    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }
}

const user1 = new User1('Ahad Ali','a@a.com');

console.log(user1);