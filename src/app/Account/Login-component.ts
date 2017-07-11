import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenicationServices} from "../BLL/Authentication/authentication.services";
import {AuthenticationError} from "../Shared/ErrorHandeling/authenticationError.component";


@Component({
    selector: 'login',
    templateUrl: '../../Account/Login.html',
    styleUrls: ['../../Styles/AccountStyles.css'],
    providers: [AuthenicationServices, AuthenticationError]
})
export class LoginComponent implements OnInit {
    model: any = {};

    constructor(private authenicationService: AuthenicationServices,
                private errors: AuthenticationError,
                private router: Router) {
    }

    ngOnInit() {

    }

    Login() {

        try {

            this.router.navigate([this.authenicationService.Login(this.model.username, this.model.password)]);

        }
        catch (e) {

            this.errors.Log(e);
        }
    }
}