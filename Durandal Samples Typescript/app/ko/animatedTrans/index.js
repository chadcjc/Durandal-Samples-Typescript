define(["require", "exports", 'jquery', 'knockout', 'durandal/composition'], function(require, exports, $, ko, composition) {
    var Index = (function () {
        function Index() {
            var _this = this;
            this.planets = ko.observableArray([
                { name: "Mercury", type: "rock" },
                { name: "Venus", type: "rock" },
                { name: "Earth", type: "rock" },
                { name: "Mars", type: "rock" },
                { name: "Jupiter", type: "gasgiant" },
                { name: "Saturn", type: "gasgiant" },
                { name: "Uranus", type: "gasgiant" },
                { name: "Neptune", type: "gasgiant" },
                { name: "Pluto", type: "rock" }
            ]);
            this.typeToShow = ko.observable('all');
            this.displayAdvancedOptions = ko.observable(false);
            this.planetsToShow = ko.computed(function () {
                // Represents a filtered list of planets
                // i.e., only those matching the "typeToShow" condition
                var desiredType = _this.typeToShow();
                if (desiredType == "all") {
                    return _this.planets();
                }

                return ko.utils.arrayFilter(_this.planets(), function (planet) {
                    return planet.type == desiredType;
                });
            });
            this.addPlanet = function (type) {
                _this.planets.push({
                    name: "New planet",
                    type: type
                });
            };
            this.showPlanetElement = function (elem) {
                if (elem.nodeType === 1) {
                    $(elem).hide().slideDown();
                }
            };
            this.hidePlanetElement = function (elem) {
                if (elem.nodeType === 1) {
                    $(elem).slideUp(function () {
                        $(elem).remove();
                    });
                }
            };
            // Here's a custom Knockout binding that makes elements shown/hidden via jQuery's fadeIn()/fadeOut() methods
            // Could be stored in a separate utility library
            composition.addBindingHandler('fadeVisible', {
                init: function (element, valueAccessor) {
                    var value = valueAccessor();
                    $(element).toggle(ko.utils.unwrapObservable(value));
                },
                update: function (element, valueAccessor) {
                    var value = valueAccessor();
                    ko.utils.unwrapObservable(value) ? $(element).fadeIn() : $(element).fadeOut();
                }
            });
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
