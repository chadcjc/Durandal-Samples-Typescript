import publisher = require('./publisher');
import subscriber = require('./subscriber');

class Index {
    publisher = publisher;
    subscriber = subscriber;
}

var instance: ISingleton = new Index();
export = instance;