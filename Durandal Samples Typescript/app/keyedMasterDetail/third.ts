import system = require('durandal/system');
import ko = require('knockout');

class Third {
    title = 'Third Tab';
    thirdVm: KnockoutObservable<IContent> = ko.observable(null);

    activate= (id: string) => {
        system.log('Third Tab Activated');
        return this.loadObservables(id);
    };

    deactivate = () => {
        system.log('Third Tab Deactivated');
    }

    loadObservables = (id: string) => {
        return this.thirdVm({ id: id, name: 'Third Tab Content' });
    }
}

export = Third;