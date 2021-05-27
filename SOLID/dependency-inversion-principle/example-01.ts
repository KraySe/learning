// Wrong
class Message {
    public constructor(
        private readonly to: string,
        private readonly from: string,
        private readonly subject: string,
        private readonly body: string,
    ) { }
}

class MailChimpService {
    public send(message: Message): void {

    }
}

class OrderService {
    public constructor(
        private readonly mailchimpService: MailChimpService
    ) { }

    public create(): void {
        // ToDo: código para crear la orden

        // Enviar la notificación
        let message = new Message(
            "customer@email.com",
            "admin@kodoti.com",
            "Se le asigno un curso",
            "Estimado, su orden ... "
        )

        this.mailchimpService.send(message);
    }
}

// Correct
interface IMailService {
    send(message: Message): void;
}

class MailChimpService1 implements IMailService {
    public send(message: Message): void {
        throw new Error("Method not implemented.");
    }
}

class SendInBlueService implements IMailService {
    public send(message: Message): void {
        throw new Error("Method not implemented.");
    }
}

class SendGridService implements IMailService {
    public send(message: Message): void {
        throw new Error("Method not implemented.")
    }
}

class OrderService1 {
    public constructor(
        private readonly mailService: IMailService
    ) { }

    public create(): void {
        // ToDo: código para crear la orden

        // Enviar la notificación
        let message = new Message(
            "customer@email.com",
            "admin@kodoti.com",
            "Se le asigno un curso",
            "Estimado, su orden ... "
        )

        this.mailService.send(message);
    }
}


// testing @ToDo
let orderService = new OrderService(
    new MailChimpService1()
);