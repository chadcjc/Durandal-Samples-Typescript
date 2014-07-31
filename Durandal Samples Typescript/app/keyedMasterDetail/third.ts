import system = require('durandal/system');
import ko = require('knockout');

class Third {
    title = 'Third Tab';
    thirdVm: KnockoutObservable<IContent>;

    activate= (id: string) => {
        system.log('Third Tab Activated');
        return this.loadObservables(id);
    };

    deactivate = () => {
        system.log('Third Tab Deactivated');
    }

    loadObservables = (id: string) => {
        this.thirdVm({ id: id, name: 'Third Tab Content' });
    }
}

export = Third;