define(["require", "exports", 'durandal/app', 'knockout'], function(require, exports, app, ko) {
    var Models;
    (function (Models) {
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
        Models.CartLine = CartLine;

        var Cart = (function () {
            function Cart() {
                var _this = this;
                this.lines = ko.observableArray([new CartLine()]);
                this.grandTotal = ko.computed(function () {
                    var total = 0;
                    ko.utils.arrayForEach(_this.lines(), function (line) {
                        return total += line.subtotal();
                    });
                    return total;
                });
                this.addLine = function () {
                    _this.lines.push(new CartLine());
                };
                this.removeLine = function (line) {
                    _this.lines.remove(line);
                };
                this.save = function () {
                    var dataToSave = ko.utils.arrayMap(_this.lines(), function (line) {
                        return line.product() ? {
                            productName: line.product().name,
                            quantity: line.quantity()
                        } : undefined;
                    });

                    app.showMessage('You could now send this to server: ' + JSON.stringify(dataToSave), 'Your Shopping Cart');
                };
            }
            return Cart;
        })();
        Models.Cart = Cart;
    })(Models || (Models = {}));

    
    return Models;
});
//# sourceMappingURL=models.js.map
