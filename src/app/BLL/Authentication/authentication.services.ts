import {Injectable} from "@angular/core";
import {Authentication} from "../../DAL/Authenication/authentication.dal";

@Injectable()
export class AuthenicationServices {

    private authenticator = new Authentication();

    Login(email: string, password: string): string {

        let result: boolean = this.authenticator.Login(email, password);

        if (result) {
            return '/home';
        }

        throw new Error("Incorrect Email address or password");
    }
}
