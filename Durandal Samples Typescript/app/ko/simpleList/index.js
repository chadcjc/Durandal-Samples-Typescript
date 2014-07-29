define(["require", "exports", 'knockout'], function(require, exports, ko) {
    var Index = (function () {
        function Index() {
            var _this = this;
            this.items = ko.observableArray(["Alpha", "Beta", "Gamma"]);
            this.itemToAdd = ko.observable('');
            this.addItem = function () {
                if (_this.itemToAdd() != '') {
                    _this.items.push(_this.itemToAdd());
                    _this.itemToAdd('');
                }
            };
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
