import router = require('plugins/router');
import ko = require('knockout');
import system = require('durandal/system');

class Master {
    router: DurandalRouter;
    masterVm: KnockoutObservable<IContent> = ko.observable(null);

    constructor() {
        var routerSettings: DurandalRelativeRouteSettings = { moduleId: 'keyedMasterDetail', fromParent: true, dynamicHash: ':id' };
        
        var configs: DurandalRouteConfiguration[] = [
            { route: ['first', ''], moduleId: 'first', title: 'First', nav: true, hash: '#first' },
            { route: 'second', moduleId: 'second', title: 'Second', nav: true },
            { route: 'third', moduleId: 'third', title: 'Third',  nav: true } 
        ];

        this.router = router.createChildRouter()
            .makeRelative(routerSettings)
            .map(configs)
            .buildNavigationModel();
    }

    activate = (id: string) => {
        system.log('Master View ' + id + ' Activated');
        return this.loadObservables(id);
    }

    deactivate = () => {
        system.log('Master View ' + this.masterVm().id + ' Deactivated');
    }

    loadObservables = (id: string) => {
        return this.masterVm({ id: id, name: 'Master' });
    }
}

var instance: ISingleton = new Master();
export = instance;