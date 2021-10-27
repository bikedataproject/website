export class FitbitManager {
    private readonly url: string = "http://localhost:5001";

    constructor() {

    }

    async getAuthorizeUrl(): Promise<string> {
        const authorizeUrlEndPoint = `${this.url}/fitbit/authorizeurl`;
        const response = await fetch(authorizeUrlEndPoint);
        
        const json = await response.json();

        return json.url as string;
    }
}