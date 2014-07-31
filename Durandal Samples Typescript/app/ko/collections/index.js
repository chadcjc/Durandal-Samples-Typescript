define(["require", "exports", 'knockout', './person'], function(require, exports, ko, person) {
    var Index = (function () {
        function Index() {
            this.showRenderTimes = ko.observable(false);
            this.people = ko.observableArray([
                new person("Annabelle", ["Arnie", "Anders", "Apple"]),
                new person("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
                new person("Charles", ["Cayenne", "Cleopatra"])
            ]);
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
