// Observable
class Subject {
    private observers: Array<Observer> = [];
    private state: number = 1;

    public getState(): number {
        return this.state;
    }

    public setState(state: number): void {
        this.state = state;
        this.notify();
    }

    public add(observer: Observer) {
        this.observers.push(observer);
    }

    public notify(): void {
        this.observers.map((observer) => observer.update());
    }
}

interface Observer {
    // Observable
    subject: Subject;
    /**
     * update
     */
    update(): void;
}

class SolObserver implements Observer {
    private valueChange: number = 3.25;
    public subject: Subject;

    constructor(s: Subject) {
        this.subject = s;
        this.subject.add(this);
    }

    public update(): void {
        console.log(`PEN: ${this.subject.getState() * this.valueChange}`);

    }
}

class PesoMXObserver implements Observer {
    private valueChange: number = 19.07;
    public subject: Subject;

    constructor(s: Subject) {
        this.subject = s;
        this.subject.add(this);
    }

    update(): void {
        console.log(`PEN: ${this.subject.getState() * this.valueChange}`);
    }
}

// observable
const observable = new Subject();

// observers - subscribers
new SolObserver(observable);
new PesoMXObserver(observable);

// change state --> notify observers/subscribers
observable.setState(10);
console.log('.........');
observable.setState(50);



// interface Observable {
//     attach(o: Observer): void;

//     detach(o: Observer): void;

//     notify(): void;
// }

// interface Observer {
//     update(): void;
// }


// class YoutubeChannel implements Observable {
//     private channelSubscribers: Observer[] = []
//     private lastVideoPosted: string = '';

//     attach(o: Observer): void {
//         this.channelSubscribers.push(o);
//     }
//     detach(o: Observer): void {
//         this.channelSubscribers.filter(channel => channel !== o);
//     }

//     addNewVideo(title: string) {
//         this.lastVideoPosted = title;
//         this.notify();
//         console.log('New Youtube video added to channel');
//     }

//     lastVideoTitle(): string {
//         return this.lastVideoPosted;
//     }

//     subscribers(): Observer[] {
//         return this.channelSubscribers;
//     }


//     notify(): void {
//         for (let subscriptor of this.channelSubscribers) {
//             subscriptor.update();
//         }
//     }

// }

// class Subscriber implements Observer {

//     private observable: YoutubeChannel;

//     constructor(observable: YoutubeChannel) {
//         this.observable = observable;
//     }

//     update(): void {
//         console.log('New video posted');
//         console.log(this.observable.lastVideoTitle());
//     }
// }

// let channel = new YoutubeChannel();
// let s1 = new Subscriber(channel);
// let s2 = new Subscriber(channel);

// channel.attach(s1);
// channel.attach(s2);

// //console.log(channel.subscribers());

// channel.addNewVideo('Video Patrón Observer')

