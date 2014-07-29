import app = require('durandal/app');
import ko = require('knockout');

module Models {
    export class CartLine {
        category = ko.observable('');
        product = ko.observable(<IProduct>null);
        quantity = ko.observable(1);
        subtotal = ko.computed(() => {
            return this.product() ? this.product().price * parseInt("0" + this.quantity(), 10) : 0;
        });
    }    

    export class Cart {
        lines = ko.observableArray([new CartLine()]);

        grandTotal = ko.computed(() => {
            var total = 0;
            ko.utils.arrayForEach(this.lines(), (line: CartLine) => total += line.subtotal());
            return total;
        });

        addLine = () => {
            this.lines.push(new CartLine());
        };

        removeLine = (line: CartLine) => {
            this.lines.remove(line);
        };

        save = () => {
            var dataToSave = ko.utils.arrayMap(this.lines(), (line: CartLine) => {
                return line.product() ? {
                    productName: line.product().name,
                    quantity: line.quantity()
                } : undefined;
            });

            app.showMessage('You could now send this to server: ' + JSON.stringify(dataToSave), 'Your Shopping Cart');
        };
    }
}

export = Models;