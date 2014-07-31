define(["require", "exports", 'knockout'], function(require, exports, ko) {
    var Person = (function () {
        function Person(name, children) {
            var _this = this;
            this.addChild = function () {
                _this.children.push('New Child');
            };
            this.name = name;
            this.children = ko.observableArray(children);
        }
        return Person;
    })();

    
    return Person;
});
//# sourceMappingURL=person.js.map
