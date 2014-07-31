import ko = require('knockout');

class Index {
    itemToAdd = ko.observable("");
    allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]);
    selectedItems = ko.observableArray(["Ham"]);

    addItem =  () => {
        var value = this.itemToAdd();

        if (value != "" && this.allItems.indexOf(value) < 0) { // Prevent blanks and duplicates
            this.allItems.push(value);
        }

        this.itemToAdd(""); // Clear the text box
    };

    removeSelected = () => {
        this.allItems.removeAll(this.selectedItems());
        this.selectedItems([]); // Clear selection
    };

    sortItems = () => {
        this.allItems.sort();
    };
}

var instance: ISingleton = new Index();
export = instance;