"use strict";
var AuthenticationError = (function () {
    function AuthenticationError() {
    }
    AuthenticationError.prototype.Log = function (error) {
        if (error instanceof Error) {
            var errorValue = document.getElementById("errorValue");
            errorValue.style.display = "block";
            errorValue.style.visibility = "visible";
            errorValue.innerText = error.message;
        }
    };
    return AuthenticationError;
}());
exports.AuthenticationError = AuthenticationError;
//# sourceMappingURL=authenticationError.component.js.map