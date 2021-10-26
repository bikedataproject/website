import type { IdentityApiOptions } from "./IdentityApiOptions";
import type { RegisterUserData } from "./RegisterUserData";

export class IdentityApi {
    private url: string;

    constructor(options: IdentityApiOptions) {
        this.url = options.url;
    }

    async register(data: RegisterUserData) {
        const registerUrl = `${this.url}/register`;
        const response = await fetch(registerUrl, {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw Error("failed to register");
        }
    }
}