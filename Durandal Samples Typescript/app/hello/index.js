define(["require", "exports", 'durandal/app', 'durandal/system', 'knockout'], function(require, exports, app, system, ko) {
    var Index = (function () {
        function Index() {
            var _this = this;
            this.displayName = 'What is your name?';
            this.sayHello = function () {
                app.showMessage('Hello ' + _this.name() + '!', 'Greetings');
            };
            this.activate = function () {
                system.log('Lifecycle: activate : hello');
            };
            this.binding = function () {
                system.log('Lifecycle: binding : hello');
                return { cacheViews: false };
            };
            this.bindingComplete = function () {
                system.log('Lifecycle : bindingComplete : hello');
            };
            this.attached = function () {
                system.log('Lifecycle : attached : hello');
            };
            this.compositionComplete = function () {
                system.log('Lifecycle : compositionComplete : hello');
            };
            this.detached = function () {
                system.log('Lifecycle : detached : hello');
            };
            this.name = ko.observable('');
            this.canSayHello = ko.computed(function () {
                return _this.name() ? true : false;
            });
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
