// Principle of abstraction
class Smartphone {
    /**
     * encapsulation principle
     * 
     * - public
     * - protected
     * - private
     */
    private color: string;
    private brand: string;
    private _battery: number;

    public constructor(color: string, brand: string) {
        this.color = color;
        this.brand = brand;
        this._battery = 100;
    }


    public makeAphoneCall(): void {
        if (this._battery === 0) {
            throw "El celular no cuenta con la batería necesaria.";
        }

        this._battery -= 10;
    }

    public get battery(): number {
        return this._battery;
    }

    public recharge() {
        this._battery = 100;
    }
}

// Inheritance principle
class Android extends Smartphone {
    public constructor(color: string) {
        super(color, 'Android');
    }
}

class Iphone extends Smartphone {
    public constructor(color: string) {
        super(color, 'Iphone');
    }
}

let smartphone1 = new Smartphone('White', 'Iphone');
smartphone1.makeAphoneCall();
smartphone1.makeAphoneCall();

let android = new Android('Red');
let iphone = new Iphone('White');

android.makeAphoneCall();
console.log(android.battery);

iphone.makeAphoneCall();
iphone.makeAphoneCall();
iphone.makeAphoneCall();
console.log(iphone.battery, 'iphone');














