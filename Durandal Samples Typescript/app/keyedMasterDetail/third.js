define(["require", "exports", 'durandal/system', 'knockout'], function(require, exports, system, ko) {
    var Third = (function () {
        function Third() {
            var _this = this;
            this.title = 'Third Tab';
            this.thirdVm = ko.observable(null);
            this.activate = function (id) {
                system.log('Third Tab Activated');
                return _this.loadObservables(id);
            };
            this.deactivate = function () {
                system.log('Third Tab Deactivated');
            };
            this.loadObservables = function (id) {
                return _this.thirdVm({ id: id, name: 'Third Tab Content' });
            };
        }
        return Third;
    })();

    
    return Third;
});
//# sourceMappingURL=third.js.map
