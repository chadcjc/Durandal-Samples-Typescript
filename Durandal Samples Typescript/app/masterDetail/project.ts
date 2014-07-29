import system = require('durandal/system');
import app = require('durandal/app');

class Project {
    constructor(public name: string, public description: string) {

    }

    canActivate = () => {
        return app.showMessage('Do you want to view ' + this.name + '?', 'Master Detail', ['Yes', 'No']);
    };

    activate = () => {
        system.log('Model Activating', this);
    };

    canDeactivate = () => {
        return app.showMessage('Do you want to leave ' + this.name + '?', 'Master Detail', ['Yes', 'No']);
    };

    deactivate = () => {
        system.log('Model Deactivating', this);
    };
}

export = Project;