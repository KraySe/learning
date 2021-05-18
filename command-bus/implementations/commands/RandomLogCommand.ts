export class RandomLogCommand {
    public constructor(private readonly _begin: string) { }

    public get begin(): string {
        return this._begin;
    }
}