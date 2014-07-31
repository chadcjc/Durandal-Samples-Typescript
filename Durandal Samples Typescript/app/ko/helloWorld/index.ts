import ko = require('knockout');

class Index {
    firstName = ko.observable("Planet");
    lastName = ko.observable("Earth");
    fullName = ko.computed(() => this.firstName() + " " + this.lastName()); // It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
}

var instance: ISingleton = new Index();
export = instance;