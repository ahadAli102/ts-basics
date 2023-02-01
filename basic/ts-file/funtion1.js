"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(name + '  ' + email + '   ' + isPaid);
};
var handleError = function (errorMessage) {
    throw new Error("${errorMessage}");
};
addTwo(4);
loginUser('Ahad Ali', 'ahad.a@hsenid.com');
loginUser('Abdullah-Al', 'abdullah.a@hsenid.com', true);
