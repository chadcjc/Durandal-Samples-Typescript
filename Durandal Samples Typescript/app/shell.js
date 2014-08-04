define(["require", "exports", 'plugins/router'], function(require, exports, router) {
    var Shell = (function () {
        function Shell() {
            this.router = router;
            this.activate = function () {
                var configs = [
                    { route: ['', 'home'], moduleId: 'hello/index', title: 'Hello World', nav: 1 },
                    { route: 'view-composition', moduleId: 'viewComposition/index', title: 'View Composition', nav: true },
                    { route: 'modal', moduleId: 'modal/index', title: 'Modal Dialogs', nav: 3 },
                    { route: 'event-aggregator', moduleId: 'eventAggregator/index', title: 'Events', nav: 2 },
                    { route: 'anotherSubscriber', moduleId: 'anotherSubscriber/index', title: 'Subscriber', nav: true },
                    { route: 'widgets', moduleId: 'widgets/index', title: 'Widgets', nav: true },
                    { route: 'master-detail', moduleId: 'masterDetail/index', title: 'Master Detail', nav: true },
                    { route: 'knockout-samples*details', moduleId: 'ko/index', title: 'Knockout Samples', nav: true },
                    { route: 'keyed-master-details/:id*details', moduleId: 'keyedMasterDetail/master', title: 'Keyed Master Detail', hash: '#keyed-master-details/:id' }
                ];

                return router.map(configs).buildNavigationModel().activate();
            };
        }
        return Shell;
    })();

    
    return Shell;
});
//# sourceMappingURL=shell.js.map
