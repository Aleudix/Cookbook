export class Authentication {

    Login(email: string, password: string): boolean {

        var result: boolean = true;

        email = email.toUpperCase();

        password = password.toUpperCase();

        return result;
    }
}