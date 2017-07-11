"use strict";
var Authentication = (function () {
    function Authentication() {
    }
    Authentication.prototype.Login = function (email, password) {
        var result = true;
        email = email.toUpperCase();
        password = password.toUpperCase();
        return result;
    };
    return Authentication;
}());
exports.Authentication = Authentication;
//# sourceMappingURL=authentication.dal.js.map