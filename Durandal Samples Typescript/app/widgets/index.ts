import ko = require('knockout');
import project = require('./project');
import widget = require('plugins/widget');

class Index {
    projects: KnockoutObservableArray<project>;
    count: number;

    constructor() {
        this.projects = ko.observableArray([
            new project('Durandal', 'A cross-device, cross-platform application framework written in JavaScript, Durandal is a very small amount of code built on top of three existing and established Javascript libraries: jQuery, Knockout and RequireJS.'),
            new project('UnityDatabinding', 'A general databinding framework for Unity3D. Includes bindings for UI composition and samples for the NGUI library.')
        ]);

        this.count = this.projects().length;
    }

    addNewProject = () => {
        this.count++;
        this.projects.push(new project('Project #' + this.count, 'Description for project #' + this.count));
    };
}

var instance: ISingleton = new Index();
export = instance;