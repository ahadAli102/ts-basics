"use strict";
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
console.log(logValue(new Date()));
console.log(logValue('17th January, 2023'));
