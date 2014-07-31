import ko = require('knockout');

class Index {
    numberOfClicks = ko.observable(0);
    hasClickedTooManyTimes = ko.computed(() => this.numberOfClicks() >= 3);

    registerClick = () => {
        this.numberOfClicks(this.numberOfClicks() + 1);
    };

    resetClicks=  () => {
        this.numberOfClicks(0);
    };
}

var instance: ISingleton = new Index();
export = instance;