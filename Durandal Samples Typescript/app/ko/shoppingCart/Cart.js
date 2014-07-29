define(["require", "exports", 'knockout', 'durandal/app', './cartLine'], function(require, exports, ko, app, cartLine) {
    var Cart = (function () {
        function Cart() {
            var _this = this;
            this.lines = ko.observableArray([new cartLine()]);
            this.grandTotal = ko.computed(function () {
                var total = 0;
                ko.utils.arrayForEach(_this.lines(), function (line) {
                    return total += line.subtotal();
                });
                return total;
            });
            this.addLine = function () {
                _this.lines.push(new cartLine());
            };
            this.removeLine = function (line) {
                _this.lines.remove(line);
            };
            this.save = function () {
                //var dataToSave = ko.utils.arrayMap(this.lines(), (line: cartLine) => {
                //    return line.product() ? {
                //        productName: line.product().name,
                //        quantity: line.quantity()
                //    } : undefined;
                //});
                var dataToSave = ko.utils.arrayMap(_this.lines(), function (line) {
                    return line.product() ? {
                        productName: line.product().name
                    } : {};
                });

                //var dataToSave = $.map(this.lines(), function (line) {
                //    return line.product() ? {
                //        productName: line.product().name,
                //        quantity: line.quantity()
                //    } : undefined;
                //});
                app.showMessage('You could now send this to server: ' + JSON.stringify(dataToSave), 'Your Shopping Cart');
            };
        }
        return Cart;
    })();

    
    return Cart;
});
//# sourceMappingURL=cart.js.map
