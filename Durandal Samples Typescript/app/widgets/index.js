define(["require", "exports", 'knockout', './project'], function(require, exports, ko, project) {
    var Index = (function () {
        function Index() {
            var _this = this;
            this.addNewProject = function () {
                _this.count++;
                _this.projects.push(new project('Project #' + _this.count, 'Description for project #' + _this.count));
            };
            this.projects = ko.observableArray([
                new project('Durandal', 'A cross-device, cross-platform application framework written in JavaScript, Durandal is a very small amount of code built on top of three existing and established Javascript libraries: jQuery, Knockout and RequireJS.'),
                new project('UnityDatabinding', 'A general databinding framework for Unity3D. Includes bindings for UI composition and samples for the NGUI library.')
            ]);

            this.count = this.projects().length;
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
