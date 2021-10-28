import type { FitbitRegisterModel } from "./FitbitRegisterModel";
import type { FitbitRegisterResponseModel } from "./FitbitRegisterResponseModel";

export class FitbitIdentityApi {
    private readonly url;

    constructor(url: string) {
        this.url = url;
    }

    async register(data: FitbitRegisterModel): Promise<FitbitRegisterResponseModel> {
        const registerEndPoint = `${this.url}/fitbit/register`;
        fetch(registerEndPoint, {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(async (response) => {
                return await response.json() as FitbitRegisterResponseModel;
            })
            .catch(() => {
                return undefined;
            });

        return undefined;
    }

    async registerCallback(code: string): Promise<boolean> {
        const registerCallbackEndPoint = `${this.url}/fitbit/register/callback?code=${code}`;
        fetch(registerCallbackEndPoint)
            .then(async (response) => {
                return response.ok;
            })
            .catch(() => {
                return false;
            });

        return false;
    }
}