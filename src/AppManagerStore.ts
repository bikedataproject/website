
import { writable } from "svelte/store";

export class AppManagerStore {
    public PublicUrl: string;
}

const appManagerStore = new AppManagerStore();

export const appManager = writable(appManagerStore);