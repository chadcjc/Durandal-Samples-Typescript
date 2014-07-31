define(["require", "exports", 'knockout'], function(require, exports, ko) {
    var Counter = (function () {
        function Counter() {
            var _this = this;
            this.counter = ko.observable(0);
            this.limiter = ko.computed(function () {
                return _this.counter() >= 3;
            });
        }
        return Counter;
    })();
});
//# sourceMappingURL=counter.js.map
