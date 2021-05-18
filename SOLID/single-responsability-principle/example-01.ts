// Single Responsability Principe
/************************************* ***************************************/
// Generic
class SmtpClient {
    public send(message: Message): void {
        console.log(`${message.body} - ${message.order.title}`);
    }
}
class Order {
    public constructor(
        private readonly _title: string
    ) { }

    public get title(): string {
        return this._title;
    }
}
class Message {
    public constructor(
        private readonly to: string,
        private readonly from: string,
        private readonly _body: string,
        private readonly _order: Order
    ) { }

    public get order(): Order {
        return this._order;
    }

    public get body(): string {
        return this._body;
    }
}
/************************************* ***************************************/
// WRONG
class OrderService {
    public constructor(
        private readonly _client: SmtpClient
    ) { }

    public add(order: Order): void {
        let message = new Message(
            "customer@email.com",
            "admin@kodoti.com",
            "Se le asignó un curso",
            order
        );

        this.sendCustomerNotification(message);
    }


    public sendCustomerNotification(message: Message) {
        this._client.send(message);
    }
}

/************************************* ***************************************/
// CORRECT
class OrderServiceSingleResponsability {
    public constructor(
        private readonly _mailService: MailService
    ) { }

    public add(order: Order): void {
        let message = new Message(
            "customer@email.com",
            "admin@kodoti.com",
            "Se le asignó un curso",
            order
        );

        this._mailService.send(message);
    }
}

class MailService {
    public constructor(
        private readonly _smptClient: SmtpClient
    ) { }

    public send(message: Message): void {
        this._smptClient.send(message);
    }
}

// testing
let smtp = new SmtpClient(),
    mailService = new MailService(smtp),
    mail = new OrderServiceSingleResponsability(mailService);

let order = new Order('curso TypeScript');

mail.add(order);
