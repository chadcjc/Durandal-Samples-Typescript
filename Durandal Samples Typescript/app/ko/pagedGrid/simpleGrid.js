define(["require", "exports", 'knockout'], function(require, exports, ko) {
    var SimpleGrid = (function () {
        function SimpleGrid(configuration) {
            var _this = this;
            this.getColumnsForScaffolding = function (data) {
                var columns = [];
                if ((typeof data.length !== 'number') || data.length === 0) {
                    return columns;
                }

                for (var propertyName in data[0]) {
                    columns.push({ headerText: propertyName, rowText: propertyName });
                }

                return columns;
            };
            this.data = configuration.data;
            this.currentPageIndex = ko.observable(0);
            this.pageSize = configuration.pageSize || 5;

            // If you don't specify columns configuration, we'll use scaffolding
            this.columns = configuration.columns || this.getColumnsForScaffolding(ko.utils.unwrapObservable(this.data));

            this.itemsOnCurrentPage = ko.computed(function () {
                var startIndex = _this.pageSize * _this.currentPageIndex();
                return _this.data.slice(startIndex, startIndex + _this.pageSize);
            });

            this.maxPageIndex = ko.computed(function () {
                return Math.ceil(ko.utils.unwrapObservable(_this.data).length / _this.pageSize) - 1;
            });
        }
        return SimpleGrid;
    })();

    
    return SimpleGrid;
});
//# sourceMappingURL=simpleGrid.js.map
