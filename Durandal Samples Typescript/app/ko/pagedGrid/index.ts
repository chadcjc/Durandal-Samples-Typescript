import system = require('durandal/system');
import app = require('durandal/app');
import ko = require('knockout');
import simpleGrid = require('./simpleGrid');

class Index {
    items: KnockoutObservableArray<IItem>;
    gridViewModel: simpleGrid;

    constructor() {
        this.items = ko.observableArray([
            { name: "Well-Travelled Kitten", sales: 352, price: 75.95 },
            { name: "Speedy Coyote", sales: 89, price: 190.00 },
            { name: "Furious Lizard", sales: 152, price: 25.00 },
            { name: "Indifferent Monkey", sales: 1, price: 99.95 },
            { name: "Brooding Dragon", sales: 0, price: 6350 },
            { name: "Ingenious Tadpole", sales: 39450, price: 0.35 },
            { name: "Optimistic Snail", sales: 420, price: 1.50 }
        ]);

        this.gridViewModel = new simpleGrid(<IGridConfiguration> {
            data: this.items,
            columns: [
                { headerText: "Item Name", rowText: "name" },
                { headerText: "Sales Count", rowText: "sales" },
                { headerText: "Price", rowText: item => "$" + item.price.toFixed(2) }
            ],
            pageSize: 4
        });
    }

    addItem = () => {
        this.items.push({ name: "New item", sales: 0, price: 100 });
    };

    sortByName = () => {
        this.items.sort((a, b) => a.name < b.name ? -1 : 1);
    };

    jumpToFirstPage = () => {
        this.gridViewModel.currentPageIndex(0);
    };
}

var instance: ISingleton = new Index();
export = instance;