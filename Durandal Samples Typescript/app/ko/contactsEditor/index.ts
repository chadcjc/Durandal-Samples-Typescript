import system = require('durandal/system');
import $ = require('jquery');
import ko = require('knockout');

class Index {
    contacts: KnockoutObservableArray<IContact>;
    lastSavedJson = ko.observable('');

    constructor() {
        this.contacts = ko.observableArray(<IContact[]>[
            {
                firstName: "Danny",
                lastName: "LaRusso",
                phones: ko.observableArray(<IPhone[]>[
                    { type: "Mobile", number: "(555) 121-2121" },
                    { type: "Home", number: "(555) 123-4567" }
                ])
            },
            {
                firstName: "Sensei",
                lastName: "Miyagi",
                phones: ko.observableArray(<IPhone[]>[
                    { type: "Mobile", number: "(555) 444-2222" },
                    { type: "Home", number: "(555) 999-1212" }
                ])
            }
        ]);
    }

    addContact = () => {
        this.contacts.push({
            firstName: "",
            lastName: "",
            phones: ko.observableArray([])
        });
    };

    removeContact = (contact: IContact) => {
        this.contacts.remove(contact);
    };

    addPhone = (contact: IContact) => {
        contact.phones.push(<IPhone>{ type: '', number: ''});
    };

    removePhone = (phone: IPhone) => {
        $.each(this.contacts(), function () { this.phones.remove(phone); });
    };

    save = () => {
        this.lastSavedJson(JSON.stringify(ko.toJS(this.contacts), null, 2));
    };
}

var instance: ISingleton = new Index();
export = instance;