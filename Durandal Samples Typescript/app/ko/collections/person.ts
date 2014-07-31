import ko = require('knockout');

class Person {
    name: string;
    children: KnockoutObservableArray<string>;

    constructor(name: string, children: string[]) {
        this.name = name;
        this.children = ko.observableArray(children);
    }

    addChild = () => {
        this.children.push('New Child');
    };
}

export = Person;