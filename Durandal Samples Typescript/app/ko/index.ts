import router = require('plugins/router');
import ko = require('knockout');

interface IKoRouteConfiguration extends DurandalRouteConfiguration {
    type: string;
}

class Index implements ISingleton {
    router: DurandalRouter;
    introSamples: KnockoutComputed<DurandalRouteConfiguration[]>;
    detailedSamples: KnockoutComputed<DurandalRouteConfiguration[]>;

    constructor() {
        var routerSettings: DurandalRelativeRouteSettings = { moduleId: 'ko', fromParent: true };

        var configs: IKoRouteConfiguration[] = [
            { route: ['', 'helloWorld'], moduleId: 'helloWorld/index', title: 'Hello World', type: 'intro', nav: true },
            { route: 'clickCounter', moduleId: 'clickCounter/index', title: 'Click Counter', type: 'intro', nav: true },
            { route: 'simpleList', moduleId: 'simpleList/index', title: 'Simple List', type: 'intro', nav: true },
            { route: 'betterList', moduleId: 'betterList/index', title: 'Better List', type: 'intro', nav: true },
            { route: 'controlTypes', moduleId: 'controlTypes/index', title: 'Control Types', type: 'intro', nav: true },
            { route: 'collections', moduleId: 'collections/index', title: 'Collection', type: 'intro', nav: true },
            { route: 'pagedGrid', moduleId: 'pagedGrid/index', title: 'Paged Grid', type: 'intro', nav: true },
            { route: 'animatedTrans', moduleId: 'animatedTrans/index', title: 'Animated Transition', type: 'intro', nav: true },
            { route: 'contactsEditor', moduleId: 'contactsEditor/index', title: 'Contacts Editor', type: 'detailed', nav: true },
            { route: 'gridEditor', moduleId: 'gridEditor/index', title: 'Grid Editor', type: 'detailed', nav: true },
            { route: 'shoppingCart', moduleId: 'shoppingCart/index', title: 'Shopping Cart', type: 'detailed', nav: true }
        ];

        this.router = router.createChildRouter()
            .makeRelative(routerSettings)
            .map(configs)
            .buildNavigationModel();

        this.introSamples = ko.computed(() => {
            return ko.utils.arrayFilter(this.router.navigationModel(), route => {
                var koRoute = <IKoRouteConfiguration>route;
                return koRoute.type == 'intro';
            });
        });

        this.detailedSamples = ko.computed(() => {
            return ko.utils.arrayFilter(this.router.navigationModel(), route => {
                var koRoute = <IKoRouteConfiguration>route;
                return koRoute.type == 'detailed';
            });
        });
    }
}

var instance: ISingleton = new Index();
export = instance;