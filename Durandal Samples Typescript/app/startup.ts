import system = require('durandal/system');
import app = require('durandal/app');
import viewLocator = require('durandal/viewLocator');

export function start() {
    system.debug(true);

    app.title = 'Durandal Samples using Typescript';

    app.configurePlugins({
        router: true,
        dialog: true,
        widget: {
            kinds: ['expander']
        }
    });

    app.start().then(() => {
        viewLocator.useConvention();
        app.setRoot('shell');
    });
}