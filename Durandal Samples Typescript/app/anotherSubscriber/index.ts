import app = require('durandal/app');
import subscriber = require('../eventAggregator/subscriber');

class Index {
    subscriber = new subscriber();
}

var instance: ISingleton = new Index();
export = instance;