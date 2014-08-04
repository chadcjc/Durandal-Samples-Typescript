import app = require('durandal/app');
import ko = require('knockout');

class Subscriber {
    received: KnockoutObservableArray<string>;
    subscription: KnockoutObservable<DurandalEventSubscription>;

    constructor() {
        this.received = ko.observableArray([]);
        this.subscription = ko.observable(null);
    }

    subscribe = () => {
        var sub = app.on('sample:event').then((message: string) => {
            this.received.push(message);
        });

        this.subscription(sub);
    };

    unsubscribe = () => {
        this.subscription().off();
        this.subscription(null);
    };
}

export = Subscriber;