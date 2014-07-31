import system = require('durandal/system');
import ko = require('knockout');

class First {
    title = 'First Tab';
    firstVm: KnockoutObservable<IContent>;

    activate= (id: string) => {
        system.log('First Tab Activated');
        return this.loadObservables(id);
    };

    deactivate = () => {
        system.log('First Tab Deactivated');
    }

    loadObservables = (id: string) => {
        this.firstVm({ id: id, name: 'First Tab Content' });
    }
}

export = First;