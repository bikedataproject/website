import { FitbitIdentityApi } from "./fitbit/FitbitIdentityApi";
import type { IdentityApiOptions } from "./IdentityApiOptions";
import type { RegisterUserData } from "./RegisterUserData";

export class IdentityApi {
    private readonly url: string;

    constructor(options: IdentityApiOptions) {
        this.url = options.url;

        this.fitbit = new FitbitIdentityApi(this.url);
    }

    /**
     * Gets the fitbit part of the API.
     */
    public readonly fitbit: FitbitIdentityApi;

    /**
     * Register a new user using email and pass.
     * @param data The user data.
     * @returns True if registering the user succeeded, false otherwise.
     */
    async register(data: RegisterUserData): Promise<boolean> {
        const registerUrl = `${this.url}/register`;
        const response = await fetch(registerUrl, {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            return false;
        }
        return true;
    }

    /**
     * Confirms a users' email using a token. The user is logged in after confirmation.
     * @param email The email.
     * @param token The token.
     */
    async confirmEmail(email: string, token: string): Promise<boolean> {
        const comfirmEmailUrl = `${this.url}/confirmemail?email=${email}&token=${token}`;
        fetch(comfirmEmailUrl)
            .then(async (response) => {
                return response.ok;
            })
            .catch(() => {
                return false;
            });

        return false;
    }
}