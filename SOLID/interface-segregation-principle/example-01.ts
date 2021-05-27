// Wrong
interface IRepository<T> {
    update(model: T): void;
    create(model: T): void;
    get(id: number): T;
    getAll(): Array<T>;
    remove(id: number): void;
}

class User {
    public constructor(
        private readonly id: string,
        private readonly name: string
    ) { }
}

class UserRespository implements IRepository<User> {
    public update(model: User): void {
        throw new Error("Method not implemented.");
    }
    public create(model: User): void {
        throw new Error("Method not implemented.");
    }
    public get(id: number): User {
        throw new Error("Method not implemented.");
    }
    public getAll(): User[] {
        throw new Error("Method not implemented.");
    }
    public remove(id: number): void {
        throw new Error("Method not implemented.");
    }
}

class UserReport {
    public constructor(
        private readonly id: string,
        private readonly type: string
    ) { }
}

class UserReportRepositorypublic implements IRepository<UserReport>
{
    public update(model: UserReport): void {
        throw new Error("Method not implemented.");
    }
    public create(model: UserReport): void {
        throw new Error("Method not implemented.");
    }
    public get(id: number): UserReport {
        throw new Error("Method not implemented.");
    }
    public getAll(): UserReport[] {
        throw new Error("Method not implemented.");
    }
    public remove(id: number): void {
        throw new Error("Method not implemented.");
    }
}

// correct
interface IReadable<T> {
    get(id: number): T;
    getAll(): Array<T>;
}

interface IWriteable<T> {
    update(model: T): void;
    create(model: T): void;
}

interface IRemovable {
    remove(id: number): void;
}

class UserRepositoryCorrect implements IReadable<UserReport>
{
    get(id: number): UserReport {
        throw new Error("Method not implemented.");
    }
    getAll(): UserReport[] {
        throw new Error("Method not implemented.");
    }
}

