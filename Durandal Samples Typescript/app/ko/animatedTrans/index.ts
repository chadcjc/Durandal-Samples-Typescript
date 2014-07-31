import $ = require('jquery');
import ko = require('knockout');
import composition = require('durandal/composition');

class Index {
    planets = ko.observableArray(<IPlanet[]>[
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

    typeToShow = ko.observable('all');

    displayAdvancedOptions = ko.observable(false);

    planetsToShow = ko.computed(() => {
        // Represents a filtered list of planets
        // i.e., only those matching the "typeToShow" condition
        var desiredType = this.typeToShow();
        if (desiredType == "all") {
            return this.planets();
        }

        return ko.utils.arrayFilter(this.planets(), planet => planet.type == desiredType);
    });

    constructor() {
        // Here's a custom Knockout binding that makes elements shown/hidden via jQuery's fadeIn()/fadeOut() methods
        // Could be stored in a separate utility library
        composition.addBindingHandler('fadeVisible', {
            init: (element, valueAccessor) => {
                var value = valueAccessor();
                $(element).toggle(ko.utils.unwrapObservable(value));
            },
            update: (element, valueAccessor) => {
                var value = valueAccessor();
                ko.utils.unwrapObservable(value) ? $(element).fadeIn() : $(element).fadeOut();
            }
        });
    }

    addPlanet = (type: string) => {
        this.planets.push({
            name: "New planet",
            type: type
        });
    };
    
    showPlanetElement = (elem: HTMLElement) => {
        if (elem.nodeType === 1) {
            $(elem).hide().slideDown();
        }
    };

    hidePlanetElement = (elem: HTMLElement) => {
        if (elem.nodeType === 1) {
            $(elem).slideUp(() => { $(elem).remove(); });
        }
    };
}

var instance: ISingleton = new Index();
export = instance;