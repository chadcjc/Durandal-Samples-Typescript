import app = require('durandal/app');
import customModal = require('./customModal');

class Index {
    showCustomModal = () => {
        var modal = new customModal();
        modal.show().then((response: string) => {
            app.showMessage('You answered ' + response + '.');
        });
    };
}

var instance: ISingleton = new Index();
export = instance;