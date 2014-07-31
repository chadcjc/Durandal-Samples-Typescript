import system = require('durandal/system');
import ko = require('knockout');
import person = require('./person');

class Index {
    people: KnockoutObservableArray<person>;
    showRenderTimes = ko.observable(false);

    constructor() {
        this.people = ko.observableArray([
            new person("Annabelle", ["Arnie", "Anders", "Apple"]),
            new person("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
            new person("Charles", ["Cayenne", "Cleopatra"])
        ]);
    }
}

var instance: ISingleton = new Index();
export = instance;