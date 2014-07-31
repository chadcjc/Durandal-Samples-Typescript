import system = require('durandal/system');
import ko = require('knockout');

class Second {
    title = 'Second Tab';
    secondVm: KnockoutObservable<IContent>;

    activate= (id: string) => {
        system.log('Second Tab Activated');
        return this.loadObservables(id);
    };

    deactivate = () => {
        system.log('Second Tab Deactivated');
    }

    loadObservables = (id: string) => {
        this.secondVm({ id: id, name: 'Second Tab Content' });
    }
}

export = Second;