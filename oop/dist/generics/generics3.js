"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const mySqlDatabase = {
    url: 'mysql:3306',
    userName: 'root',
    password: 'root'
};
console.log(getProperty(mySqlDatabase, 'url'));
console.log(getProperty(mySqlDatabase, 'uri'));
