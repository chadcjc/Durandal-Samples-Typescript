define(["require", "exports", 'durandal/system', 'knockout'], function(require, exports, system, ko) {
    var Second = (function () {
        function Second() {
            var _this = this;
            this.title = 'Second Tab';
            this.secondVm = ko.observable(null);
            this.activate = function (id) {
                system.log('Second Tab Activated');
                return _this.loadObservables(id);
            };
            this.deactivate = function () {
                system.log('Second Tab Deactivated');
            };
            this.loadObservables = function (id) {
                return _this.secondVm({ id: id, name: 'Second Tab Content' });
            };
        }
        return Second;
    })();

    
    return Second;
});
//# sourceMappingURL=second.js.map
