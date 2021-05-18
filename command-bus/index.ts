import { CommandBus } from "./implementations/CommandBus.ts";
import { RandomLogCommandHandler } from "./implementations/commands-handlers/RandomLogCommandHandler.ts";
import { RandomLogCommand } from "./implementations/commands/RandomLogCommand.ts";

const bus = new CommandBus();

bus.addHandler(RandomLogCommand.name, new RandomLogCommandHandler());

bus.handle(new RandomLogCommand('terminal_life')).catch(console.error);