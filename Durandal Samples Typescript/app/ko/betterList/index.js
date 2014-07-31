define(["require", "exports", 'knockout'], function(require, exports, ko) {
    var Index = (function () {
        function Index() {
            var _this = this;
            this.itemToAdd = ko.observable("");
            this.allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]);
            this.selectedItems = ko.observableArray(["Ham"]);
            this.addItem = function () {
                var value = _this.itemToAdd();

                if (value != "" && _this.allItems.indexOf(value) < 0) {
                    _this.allItems.push(value);
                }

                _this.itemToAdd(""); // Clear the text box
            };
            this.removeSelected = function () {
                _this.allItems.removeAll(_this.selectedItems());
                _this.selectedItems([]); // Clear selection
            };
            this.sortItems = function () {
                _this.allItems.sort();
            };
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
