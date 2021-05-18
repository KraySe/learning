import { ICommandHandler } from "../interfaces/ICommandHandler.ts";

export class CommandBus implements ICommandHandler {
    private handlers: { [key: string]: ICommandHandler } = {};

    public addHandler(commandName: string, commandHandler: ICommandHandler): void {
        this.handlers[commandName] = commandHandler;
    }

    public async handle(object: object): Promise<void> {
        const commandName = object.constructor.name;
        const handler = this.handlers[commandName];

        if (handler === undefined) {
            throw new Error(`handler for command ${commandName} not found`)
        }

        return await handler.handle(object);
    }
}