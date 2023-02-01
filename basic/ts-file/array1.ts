
type ArrUser = {
    readonly _id:string
    name : string
    email : string
    isActive : boolean
    married?: boolean
}



const names: string[] = []
const nums: Array<number> = []
const users: Array<ArrUser> = []


const user1 = {_id:'090912',name:'Ahad Ali', email:'ahad.a@hsenid.com',isActive: false}

names.push('Ahad')
nums.push(2)
users.push(user1);

console.log(names);
console.log(nums);
console.log(users);