export interface IMessageHook {
    show(message: string): void;
    hide(): void;
}