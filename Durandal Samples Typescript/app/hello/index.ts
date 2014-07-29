import app = require('durandal/app');
import system = require('durandal/system');
import ko = require('knockout');

class Index {
    name: KnockoutObservable<string>;
    canSayHello: KnockoutComputed<boolean>;

    displayName = 'What is your name?';

    constructor() {
        this.name = ko.observable('');
        this.canSayHello = ko.computed(() => this.name() ? true : false);
    }

    sayHello = () => {
        app.showMessage('Hello ' + this.name() + '!', 'Greetings');
    };

    activate = () => {
        system.log('Lifecycle: activate : hello');
    };

    binding = () => {
        system.log('Lifecycle: binding : hello');
        return { cacheViews: false };
    }

    bindingComplete = () => {
        system.log('Lifecycle : bindingComplete : hello');
    };

    attached = () => {
        system.log('Lifecycle : attached : hello');
    };

    compositionComplete = () => {
        system.log('Lifecycle : compositionComplete : hello');
    };

    detached = () => {
        system.log('Lifecycle : detached : hello');
    };
}

var instance: ISingleton = new Index();
export = instance;