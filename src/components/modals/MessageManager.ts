import type { IMessageHook } from "./IMessageHook";

export class MessageManager implements IMessageHook {
    private readonly eventHandlers: {
        show: ((d?: any) => void)[],
        hide: ((d?: any) => void)[]
    } = {
        show: [],
        hide: []
    };


    on(event: "show" | "hide", handler: (d?: any) => void) {
        if (event === "show") {
            this.eventHandlers.show.push(handler);
        }
        if (event === "hide") {
            this.eventHandlers.hide.push(handler);
        }
    }

    private trigger(event: "show" | "hide", data?: any) {
        if (event === "show") {
            this.eventHandlers.show.forEach(h => h(data));
        }
        if (event === "hide") {
            this.eventHandlers.hide.forEach(h => h(data));
        }
    }

    show(message: string): void {
        this.trigger("show", message);
    }
    hide(): void {
        this.trigger("hide");
    }
}