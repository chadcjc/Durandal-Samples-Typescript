import project = require('./project');
import activator = require('durandal/activator');
import ko = require('knockout');

class Index {
    projects: KnockoutObservableArray<project>;
    activeProject: any;

    constructor() {
        this.projects = ko.observableArray([
            new project('Durandal', 'A cross-device, cross-platform application framework written in JavaScript, Durandal is a very small amount of code built on top of three existing and established Javascript libraries: jQuery, Knockout and RequireJS.'),
            new project('UnityDatabinding', 'A general databinding framework for Unity3D. Includes bindings for UI composition and samples for the NGUI library.'),
            new project('Caliburn.Micro', 'Caliburn.Micro is a small, yet powerful framework, designed for building applications across all Xaml Platforms. With strong support for MVVM and other proven UI patterns, Caliburn.Micro will enable you to build your solution quickly, without the need to sacrifice code quality or testability.')
        ]);

        this.activeProject = activator.create().forItems(this.projects);
    }
}

var instance: ISingleton = new Index();
export = instance;