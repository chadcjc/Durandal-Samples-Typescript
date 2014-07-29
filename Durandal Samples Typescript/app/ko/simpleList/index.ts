import ko = require('knockout');

class Index {
    items = ko.observableArray(["Alpha", "Beta", "Gamma"]);
    itemToAdd = ko.observable('');
    
    addItem = () => {
        if (this.itemToAdd() != '') {
            this.items.push(this.itemToAdd());
            this.itemToAdd('');
        }
    };
}

var instance: ISingleton = new Index();
export = instance;