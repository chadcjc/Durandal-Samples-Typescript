define(["require", "exports", 'durandal/system'], function(require, exports, system) {
    var Second = (function () {
        function Second() {
            var _this = this;
            this.title = 'Second Tab';
            this.activate = function (id) {
                system.log('Second Tab Activated');
                return _this.loadObservables(id);
            };
            this.deactivate = function () {
                system.log('Second Tab Deactivated');
            };
            this.loadObservables = function (id) {
                _this.secondVm({ id: id, name: 'Second Tab Content' });
            };
        }
        return Second;
    })();

    
    return Second;
});
//# sourceMappingURL=second.js.map
