abstract class User implements IUser {
    public constructor(public readonly profession: string) { }
    // private _profession: string;

    // public constructor(profession: string) {
    //     this._profession = profession;
    // }
    // public get profession(): string {
    //     return this._profession;
    // }
    public goToWork(): void {

    }
}

interface IUser {
    profession: string;

    goToWork(): void;
}

interface IUserExtraInformation {
    phoneNumber: string;
}


// class Doctor implements IUser, IUserExtraInformation {
class Doctor extends User implements IUserExtraInformation {
    // private _profession: string;
    private _phoneNumber: string;

    public constructor(phoneNumber: string) {
        super('Doctor');
        // this._profession = 'Doctor';
        this._phoneNumber = phoneNumber;
    }
    // public get profession(): string {
    //     return this._profession;
    // }

    public get phoneNumber(): string {
        return this._phoneNumber;
    }
    goToWork(): void {
        throw new Error("Method not implemented.");
    }
}

// class Police implements IUser {
class Police extends User {
    // private _profession: string;

    public constructor() {
        super('Police');
        // this._profession = 'Police';
    }

    // public get profession(): string {
    //     return this._profession;
    // }

    goToWork(): void {
        throw new Error("Method not implemented.");
    }
}

function printProfession(model: IUser): void {
    console.log(model.profession);
}

let police = new Police();
let doctor = new Doctor('99999999');

printProfession(police);
printProfession(doctor);

