type User = {
    readonly _id:string
    name : string
    email : string
    isActive : boolean
    married?: boolean
}

function createUser(user : User) : User{
    return user;
}


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

const cn1 = {cardnumber:'123456'}

const cdt1 = {cardDate:'12-03-2021'}

const cd1 = {cn1,cdt1,cvv:12345}

console.log(createUser({_id:'090912',name:'Ahad Ali', email:'ahad.a@hsenid.com',isActive: false}))
console.log(createUser({_id:'090912',name:'Ahad Ali', email:'ahad.a@hsenid.com',isActive: false, married: false}))
console.log(cd1)