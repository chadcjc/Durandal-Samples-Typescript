define(["require", "exports", 'durandal/system', 'durandal/app'], function(require, exports, system, app) {
    var Project = (function () {
        function Project(name, description) {
            var _this = this;
            this.name = name;
            this.description = description;
            this.canActivate = function () {
                return app.showMessage('Do you want to view ' + _this.name + '?', 'Master Detail', ['Yes', 'No']);
            };
            this.activate = function () {
                system.log('Model Activating', _this);
            };
            this.canDeactivate = function () {
                return app.showMessage('Do you want to leave ' + _this.name + '?', 'Master Detail', ['Yes', 'No']);
            };
            this.deactivate = function () {
                system.log('Model Deactivating', _this);
            };
        }
        return Project;
    })();

    
    return Project;
});
//# sourceMappingURL=project.js.map
