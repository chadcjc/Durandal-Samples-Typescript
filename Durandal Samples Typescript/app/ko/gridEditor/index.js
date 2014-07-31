define(["require", "exports", 'durandal/app', 'knockout'], function(require, exports, app, ko) {
    var GiftModel = (function () {
        function GiftModel() {
            var _this = this;
            this.addGift = function () {
                _this.gifts.push({ name: '', price: 0 });
            };
            this.removeGift = function (gift) {
                _this.gifts.remove(gift);
            };
            this.save = function () {
                //alert("Could now transmit to server: ");
                app.showMessage('You could now send this to server: ' + ko.utils.stringifyJson(_this.gifts()), 'Grid Editor - Results');
                // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);
            };
            this.activate = function () {
                console.log('activate grid');
            };
            this.canActivate = function () {
                console.log('canActivate grid');
                return true;
            };
            this.canDeactivate = function () {
                return app.showMessage('Are you sure you want to leave?', 'Leaving', ['Yes', 'No']);
            };
            this.deactivate = function () {
                console.log('deactivate grid');
            };
            this.gifts = ko.observableArray([
                { name: "Tall Hat", price: "39.95" },
                { name: "Long Cloak", price: "120.00" }
            ]);
        }
        return GiftModel;
    })();

    var instance = new GiftModel();
    
    return instance;
});
//# sourceMappingURL=index.js.map
