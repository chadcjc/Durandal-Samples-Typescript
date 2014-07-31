define(["require", "exports", 'durandal/system', 'knockout'], function(require, exports, system, ko) {
    var First = (function () {
        function First() {
            var _this = this;
            this.title = 'First Tab';
            this.firstVm = ko.observable(null);
            this.activate = function (id) {
                system.log('First Tab Activated');
                return _this.loadObservables(id);
            };
            this.deactivate = function () {
                system.log('First Tab Deactivated');
            };
            this.loadObservables = function (id) {
                return _this.firstVm({ id: id, name: 'First Tab Content' });
            };
        }
        return First;
    })();

    
    return First;
});
//# sourceMappingURL=first.js.map
