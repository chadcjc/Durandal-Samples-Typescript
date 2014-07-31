define(["require", "exports", 'plugins/router', 'durandal/system'], function(require, exports, router, system) {
    var Master = (function () {
        function Master() {
            var _this = this;
            this.activate = function (id) {
                system.log('Master View ' + id + ' Activated');
                return _this.loadObservables(id);
            };
            this.deactivate = function () {
                system.log('Master View ' + _this.masterVm().id + ' Deactivated');
            };
            this.loadObservables = function (id) {
                _this.masterVm({ id: id, name: 'Master' });
            };
            var routerSettings = { moduleId: 'keyedMasterDetail', fromParent: true, dynamicHash: ':id' };

            var configs = [
                { route: ['first', ''], moduleId: 'first', title: 'First', nav: true, hash: '#first' },
                { route: 'second', moduleId: 'second', title: 'Second', nav: true },
                { route: 'third', moduleId: 'third', title: 'Third', nav: true }
            ];

            this.router = router.createChildRouter().makeRelative(routerSettings).map(configs).buildNavigationModel();
        }
        return Master;
    })();

    var instance = new Master();
    
    return instance;
});
//# sourceMappingURL=master.js.map
