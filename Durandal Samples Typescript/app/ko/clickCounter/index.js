define(["require", "exports", 'knockout'], function(require, exports, ko) {
    var Index = (function () {
        function Index() {
            var _this = this;
            this.numberOfClicks = ko.observable(0);
            this.hasClickedTooManyTimes = ko.computed(function () {
                return _this.numberOfClicks() >= 3;
            });
            this.registerClick = function () {
                _this.numberOfClicks(_this.numberOfClicks() + 1);
            };
            this.resetClicks = function () {
                _this.numberOfClicks(0);
            };
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
