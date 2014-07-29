import dialog = require('plugins/dialog');
import ko = require('knockout');

class CustomModal {
    input: KnockoutObservable<string>;

    constructor() {
        this.input = ko.observable('');
    }

    ok = () => {
        dialog.close(this, this.input());
    };

    canDeactivate = () => {
        return dialog.showMessage('Are you sure that\'s your favorite color?', 'Just Checking...', ['Yes', 'No']);
    };

    public show = () => {
        return dialog.show(new CustomModal());
    };
}

export = CustomModal;