define(["require", "exports", 'plugins/router', 'knockout'], function(require, exports, router, ko) {
    var Index = (function () {
        function Index() {
            var _this = this;
            var routerSettings = { moduleId: 'ko', fromParent: true };

            var configs = [
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

            this.router = router.createChildRouter().makeRelative(routerSettings).map(configs).buildNavigationModel();

            this.introSamples = ko.computed(function () {
                return ko.utils.arrayFilter(_this.router.navigationModel(), function (route) {
                    var koRoute = route;
                    return koRoute.type == 'intro';
                });
            });

            this.detailedSamples = ko.computed(function () {
                return ko.utils.arrayFilter(_this.router.navigationModel(), function (route) {
                    var koRoute = route;
                    return koRoute.type == 'detailed';
                });
            });
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
