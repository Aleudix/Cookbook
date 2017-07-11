"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var authentication_dal_1 = require("../../DAL/Authenication/authentication.dal");
var AuthenicationServices = (function () {
    function AuthenicationServices() {
        this.authenticator = new authentication_dal_1.Authentication();
    }
    AuthenicationServices.prototype.Login = function (email, password) {
        var result = this.authenticator.Login(email, password);
        if (result) {
            return '/home';
        }
        throw new Error("Incorrect Email address or password");
    };
    return AuthenicationServices;
}());
AuthenicationServices = __decorate([
    core_1.Injectable()
], AuthenicationServices);
exports.AuthenicationServices = AuthenicationServices;
//# sourceMappingURL=authentication.services.js.map