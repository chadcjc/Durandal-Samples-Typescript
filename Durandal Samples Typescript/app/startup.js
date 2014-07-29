define(["require", "exports", 'durandal/system', 'durandal/app', 'durandal/viewLocator'], function(require, exports, system, app, viewLocator) {
    function start() {
        system.debug(true);

        app.title = 'Durandal Samples using Typescript';

        app.configurePlugins({
            router: true,
            dialog: true,
            widget: {
                kinds: ['expander']
            }
        });

        app.start().then(function () {
            viewLocator.useConvention();
            app.setRoot('shell');
        });
    }
    exports.start = start;
});
//# sourceMappingURL=startup.js.map
