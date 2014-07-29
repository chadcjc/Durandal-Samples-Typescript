import app = require('durandal/app');
import ko = require('knockout');

class Publisher {
    message: KnockoutObservable<string>;
    canPublish: KnockoutComputed<boolean>;

    constructor() {
        this.message = ko.observable('');
        this.canPublish = ko.computed(() => this.message() ? true : false);
    }

    publish = () => {
        app.trigger('sample:event', this.message());
    };
}

export = Publisher;