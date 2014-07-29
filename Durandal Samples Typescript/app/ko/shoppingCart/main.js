define(["require", "exports", './Cart', './ProductService'], function(require, exports, Cart, productService) {
    var Index = (function () {
        function Index() {
            this.formatCurrency = function (value) {
                return "$" + value.toFixed(2);
            };
            this.Cart = new Cart();
            this.sampleProductCategories = new productService().getProductCategories();
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=main.js.map
