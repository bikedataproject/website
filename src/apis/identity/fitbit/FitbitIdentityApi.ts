import type { FitbitRegisterModel } from "./FitbitRegisterModel";
import type { FitbitRegisterResponseModel } from "./FitbitRegisterResponseModel";

export class FitbitIdentityApi {
    private readonly url;

    constructor(url: string) {
        this.url = url;
    }

    async register(data: FitbitRegisterModel): Promise<FitbitRegisterResponseModel> {
        const registerEndPoint = `${this.url}/fitbit/register`;
        try {
            const response = await fetch(registerEndPoint, {
                body: JSON.stringify(data),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return await response.json() as FitbitRegisterResponseModel;
        } catch (error) {
            console.error(error);
        }
        return undefined;
    }

    async registerCallback(code: string): Promise<boolean> {
        const registerCallbackEndPoint = `${this.url}/fitbit/register/callback?code=${code}`;
        try {
            const response = await fetch(registerCallbackEndPoint);

            if (!response.ok) {
                return false;
            }
            return true;
        } catch (error) {
            console.error(error);
        }

        return false;
    }
}