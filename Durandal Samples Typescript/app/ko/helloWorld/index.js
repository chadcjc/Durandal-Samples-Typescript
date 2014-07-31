define(["require", "exports", 'knockout'], function(require, exports, ko) {
    var Index = (function () {
        function Index() {
            var _this = this;
            this.firstName = ko.observable("Planet");
            this.lastName = ko.observable("Earth");
            this.fullName = ko.computed(function () {
                return _this.firstName() + " " + _this.lastName();
            });
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
