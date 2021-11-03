import type { FitbitAuthorizeModel } from "./FitbitAuthorizeModel";
import type { FitbitAuthorizeResponseModel } from "./FitbitAuthorizeResponseModel";
import type { FitbitRegisterModel } from "./FitbitRegisterModel";

export class FitbitIdentityApi {
    private readonly url;

    constructor(url: string) {
        this.url = url;
    }

    async register(data: FitbitRegisterModel): Promise<boolean> {
        const registerEndPoint = `${this.url}/fitbit/register`;
        try {
            const response = await fetch(registerEndPoint, {
                body: JSON.stringify(data),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) return true;
        } catch (error) {
            console.error(error);
        }

        return false;
    }
    
    async authorize(data: FitbitAuthorizeModel): Promise<FitbitAuthorizeResponseModel> {
        const registerEndPoint = `${this.url}/fitbit/authorize`;
        try {
            const response = await fetch(registerEndPoint, {
                body: JSON.stringify(data),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) return await response.json() as FitbitAuthorizeResponseModel;
        } catch (error) {
            console.error(error);
        }
        
        return undefined;
    }

    async callback(code: string, redirectUrl: string): Promise<boolean> {
        const registerCallbackEndPoint = `${this.url}/fitbit/register/callback?code=${code}&redirectUrl=${redirectUrl}`;
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