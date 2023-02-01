"use strict";
function accountType(account) {
    if ("isAdmin" in account) {
        return 'Admin';
    }
    else {
        return 'User';
    }
}
console.log(accountType({ name: 'Ahad', email: 'a@ahad.com' }));
console.log(accountType({ name: 'Ali', email: 'a@ali.com', isAdmin: true }));
