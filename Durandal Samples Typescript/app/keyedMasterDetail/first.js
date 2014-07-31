define(["require", "exports", 'durandal/system'], function(require, exports, system) {
    var First = (function () {
        function First() {
            var _this = this;
            this.title = 'First Tab';
            this.activate = function (id) {
                system.log('First Tab Activated');
                return _this.loadObservables(id);
            };
            this.deactivate = function () {
                system.log('First Tab Deactivated');
            };
            this.loadObservables = function (id) {
                _this.firstVm({ id: id, name: 'First Tab Content' });
            };
        }
        return First;
    })();

    
    return First;
});
//# sourceMappingURL=first.js.map
