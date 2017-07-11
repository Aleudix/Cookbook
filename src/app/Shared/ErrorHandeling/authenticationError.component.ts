export class AuthenticationError {
    Log(error: any) {
        if (error instanceof Error) {
            let errorValue = document.getElementById("errorValue");

            errorValue.style.display = "block";

            errorValue.style.visibility = "visible";

            errorValue.innerText = error.message;
        }
    }
}
