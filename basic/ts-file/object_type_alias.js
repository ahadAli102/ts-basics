function createUser(user) {
    return user;
}
var cn1 = { cardnumber: '123456' };
var cdt1 = { cardDate: '12-03-2021' };
var cd1 = { cn1: cn1, cdt1: cdt1, cvv: 12345 };
console.log(createUser({ _id: '090912', name: 'Ahad Ali', email: 'ahad.a@hsenid.com', isActive: false }));
console.log(createUser({ _id: '090912', name: 'Ahad Ali', email: 'ahad.a@hsenid.com', isActive: false, married: false }));
console.log(cd1);
