import system = require('durandal/system');
import ko = require('knockout');

class Second {
    title = 'Second Tab';
    secondVm: KnockoutObservable<IContent> = ko.observable(null);

    activate= (id: string) => {
        system.log('Second Tab Activated');
        return this.loadObservables(id);
    };

    deactivate = () => {
        system.log('Second Tab Deactivated');
    }

    loadObservables = (id: string) => {
        return this.secondVm({ id: id, name: 'Second Tab Content' });
    }
}

export = Second;