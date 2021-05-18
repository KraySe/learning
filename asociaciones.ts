class UserAsociatonOneToOne {
    public constructor(
        public readonly address: Address,
        public readonly userId: number,
        public readonly name: string,
        public readonly profession: string
    ) { }
}

class Address {
    public constructor(
        public readonly adressId: number,
        public readonly adressLine1: string,
        public readonly adressLine2: string,
        public readonly city: string,
        public readonly postCode: string
    ) { }
}


let address = new Address(1, 'test', 'test', 'test', 'test');
let userTest = new UserAsociatonOneToOne(address, 2, 'test', 'test');

console.log(userTest);


class UserAsociatonOneToMany {
    public constructor(
        public readonly address: Address,
        public readonly phoneNumber: Array<PhoneNumber>,
        public readonly userId: number,
        public readonly name: string,
        public readonly profession: string
    ) { }
}

class PhoneNumber {
    public constructor(
        public readonly phoneNumberId: number,
        public readonly number: string
    ) { }
}

class UserAsociatonManyToMany {
    public constructor(
        public readonly address: Address,
        public readonly phoneNumber: Array<PhoneNumber>,
        public readonly jobs: Array<Job>,
        public readonly userId: number,
        public readonly name: string,
        public readonly profession: string
    ) { }
}

class Job {
    public constructor(
        public readonly users: Array<UserAsociatonManyToMany>,
        public readonly jobId: number,
        public readonly name: string
    ) { }
}
