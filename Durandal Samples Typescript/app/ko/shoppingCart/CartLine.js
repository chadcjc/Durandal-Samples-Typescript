define(["require", "exports"], function(require, exports) {
    (function (ShoppingCart) {
        var CartLine = (function () {
            function CartLine() {
                var _this = this;
                this.category = ko.observable('');
                this.product = ko.observable(null);
                this.quantity = ko.observable(1);
                this.subtotal = ko.computed(function () {
                    return _this.product() ? _this.product().price * parseInt("0" + _this.quantity(), 10) : 0;
                });
            }
            return CartLine;
        })();
    })(exports.ShoppingCart || (exports.ShoppingCart = {}));
    var ShoppingCart = exports.ShoppingCart;
});
//# sourceMappingURL=cartLine.js.map
