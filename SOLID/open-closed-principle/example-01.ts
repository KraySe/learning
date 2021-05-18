/* generic */
interface Notification {
    type: string;
    PhoneNumber: string;
    Subject: string;
    Email: string;
}

// wrong 
class NotificationService {
    public send(notifications: Array<Notification>): void {
        notifications.forEach(notification => {
            if (notification.type === 'sms') {
                this.sendBySMS(notification.PhoneNumber, notification.Subject);
            }

            if (notification.type === 'email') {
                this.sendByEmail(notification.Email, notification.Subject);
            }
        })
    }

    public sendBySMS(phoneNumber: string, subject: string): void {
        console.log('sending sms ... ');
    }

    public sendByEmail(to: string, subject: string): void {
        console.log('sending email ... ');
    }
}

// CORRECT
interface INotification {
    notify(): void;
}

class NotificationEmailService implements INotification {
    public constructor(
        private readonly to: string,
        private readonly subject: string
    ) { }

    public notify(): void {
        console.log('sending email ... ');
    }
}

class NotificationSMSService implements INotification {
    public constructor(
        private readonly phoneNumber: string,
        private readonly subject: string
    ) { }

    public notify(): void {
        console.log('sending SMS ... ');
    }
}

class NotificationServiceOpenClosed {
    private notifications: Array<INotification>;

    public constructor() {
        this.notifications = []
    }

    public add(notification: INotification): void {
        this.notifications.push(notification);
    }

    public send(): void {
        this.notifications.forEach(notification => {
            notification.notify();
        })
    }
}


// testing
let emailTest = new NotificationEmailService('test@test.com', 'test'),
    smsTest = new NotificationSMSService('666666666', 'test'),
    notificationService = new NotificationServiceOpenClosed();

notificationService.add(emailTest);
notificationService.add(smsTest);

notificationService.send();

