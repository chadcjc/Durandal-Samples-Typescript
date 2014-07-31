define(["require", "exports", 'knockout', './simpleGrid'], function(require, exports, ko, simpleGrid) {
    var Index = (function () {
        function Index() {
            var _this = this;
            this.addItem = function () {
                _this.items.push({ name: "New item", sales: 0, price: 100 });
            };
            this.sortByName = function () {
                _this.items.sort(function (a, b) {
                    return a.name < b.name ? -1 : 1;
                });
            };
            this.jumpToFirstPage = function () {
                _this.gridViewModel.currentPageIndex(0);
            };
            this.items = ko.observableArray([
                { name: "Well-Travelled Kitten", sales: 352, price: 75.95 },
                { name: "Speedy Coyote", sales: 89, price: 190.00 },
                { name: "Furious Lizard", sales: 152, price: 25.00 },
                { name: "Indifferent Monkey", sales: 1, price: 99.95 },
                { name: "Brooding Dragon", sales: 0, price: 6350 },
                { name: "Ingenious Tadpole", sales: 39450, price: 0.35 },
                { name: "Optimistic Snail", sales: 420, price: 1.50 }
            ]);

            this.gridViewModel = new simpleGrid({
                data: this.items,
                columns: [
                    { headerText: "Item Name", rowText: "name" },
                    { headerText: "Sales Count", rowText: "sales" },
                    { headerText: "Price", rowText: function (item) {
                            return "$" + item.price.toFixed(2);
                        } }
                ],
                pageSize: 4
            });
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
