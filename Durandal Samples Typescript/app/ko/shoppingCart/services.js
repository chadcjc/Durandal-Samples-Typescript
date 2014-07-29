define(["require", "exports"], function(require, exports) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService() {
                this.getProductCategories = function () {
                    return [
                        {
                            name: "Motorcycyles", products: [
                                { name: "1948 Porsche 356-A Roadster", price: 53.9 },
                                { name: "1948 Porsche Type 356 Roadster", price: 62.16 }
                            ]
                        },
                        {
                            name: "Planes", products: [
                                { name: "1900s Vintage Bi-Plane", price: 34.25 },
                                { name: "1900s Vintage Tri-Plane", price: 36.23 },
                                { name: "1928 British Royal Navy Airplane", price: 66.74 }
                            ]
                        }
                    ];
                };
            }
            return ProductService;
        })();
        Services.ProductService = ProductService;
    })(Services || (Services = {}));

    
    return Services;
});
//# sourceMappingURL=services.js.map
