define(["require", "exports", './models', './services'], function(require, exports, models, services) {
    var Index = (function () {
        function Index() {
            this.formatCurrency = function (value) {
                return "$" + value.toFixed(2);
            };
            this.cart = new models.Cart();
            this.sampleProductCategories = new services.ProductService().getProductCategories();
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
