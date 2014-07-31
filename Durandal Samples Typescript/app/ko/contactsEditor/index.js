define(["require", "exports", 'jquery', 'knockout'], function(require, exports, $, ko) {
    var Index = (function () {
        function Index() {
            var _this = this;
            this.lastSavedJson = ko.observable('');
            this.addContact = function () {
                _this.contacts.push({
                    firstName: "",
                    lastName: "",
                    phones: ko.observableArray([])
                });
            };
            this.removeContact = function (contact) {
                _this.contacts.remove(contact);
            };
            this.addPhone = function (contact) {
                contact.phones.push({ type: '', number: '' });
            };
            this.removePhone = function (phone) {
                $.each(_this.contacts(), function () {
                    this.phones.remove(phone);
                });
            };
            this.save = function () {
                _this.lastSavedJson(JSON.stringify(ko.toJS(_this.contacts), null, 2));
            };
            this.contacts = ko.observableArray([
                {
                    firstName: "Danny",
                    lastName: "LaRusso",
                    phones: ko.observableArray([
                        { type: "Mobile", number: "(555) 121-2121" },
                        { type: "Home", number: "(555) 123-4567" }
                    ])
                },
                {
                    firstName: "Sensei",
                    lastName: "Miyagi",
                    phones: ko.observableArray([
                        { type: "Mobile", number: "(555) 444-2222" },
                        { type: "Home", number: "(555) 999-1212" }
                    ])
                }
            ]);
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
