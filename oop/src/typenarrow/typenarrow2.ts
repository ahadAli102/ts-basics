interface User {
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function accountType(account: User | Admin){
    if ("isAdmin" in account) {
        return 'Admin';
    }else{
        return 'User';
    }
}

console.log(accountType({name: 'Ahad', email: 'a@ahad.com'}));
console.log(accountType({name: 'Ali', email: 'a@ali.com',isAdmin: true}));