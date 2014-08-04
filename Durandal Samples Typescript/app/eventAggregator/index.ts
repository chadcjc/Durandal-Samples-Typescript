﻿import publisher = require('./publisher');
import subscriber = require('./subscriber');

class Index {
    publisher = new publisher();
    subscriber = new subscriber();
}

var instance: ISingleton = new Index();
export = instance;