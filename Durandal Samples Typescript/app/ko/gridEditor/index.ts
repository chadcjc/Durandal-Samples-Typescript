import app = require('durandal/app');
import ko = require('knockout');

class GiftModel {
    gifts: KnockoutObservableArray<IGift>;
    
    constructor() {
        this.gifts = ko.observableArray(<IGift[]>[
            { name: "Tall Hat", price: "39.95" }, 
            { name: "Long Cloak", price: "120.00" }
        ]);
    }

    addGift = () => {
        this.gifts.push({ name: '', price: 0 });
    };

    removeGift = (gift: IGift) => {
        this.gifts.remove(gift);
    };

    save = () => {
        //alert("Could now transmit to server: ");
        app.showMessage('You could now send this to server: ' + ko.utils.stringifyJson(this.gifts()), 'Grid Editor - Results');
        // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
    };

    activate = () => {
        console.log('activate grid');
    };

    canActivate = () => {
        console.log('canActivate grid');
        return true;
    };

    canDeactivate = () => {
        return app.showMessage('Are you sure you want to leave?', 'Leaving', ['Yes', 'No']);
    };

    deactivate = () => {
        console.log('deactivate grid');
    };
}

var instance: ISingleton = new GiftModel();
export = instance;