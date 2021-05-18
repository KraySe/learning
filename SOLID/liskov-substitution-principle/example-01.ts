// wrong
class Animal {
    public run(): void { }
    public walk(): void { }
    public hunt(): void { }
}

class Tiger extends Animal {

}

class Turtle extends Animal {
    public run() {
        throw new Error('No puede correr ... ')
    }

    public hunt() {
        throw new Error('No puede cazar ...')
    }
}

// correct 
class AnimalLiskov {
    public walk(): void { }
}

class TigerLiskovOne extends AnimalLiskov {
    public hunt(): void {

    }
    public run(): void {

    }
}

class TurtleLiskovOne extends AnimalLiskov {

}





// correct
interface IHunt {
    hunt(): void;
}

interface IRun {
    run(): void;
}

interface IWalk {
    walk(): void;
}

class TigerLiskov implements IHunt, IRun, IWalk {
    public run(): void {
        console.log('running');
    }
    public walk(): void {
        console.log('walking');
    }
    public hunt(): void {
        console.log('hunting');
    }
}

class TurtleLiskov implements IWalk {
    public walk(): void {
        console.log('walking');
    }
}


