define(["require", "exports", 'durandal/app', 'knockout'], function(require, exports, app, ko) {
    var Subscriber = (function () {
        function Subscriber() {
            var _this = this;
            this.subscribe = function () {
                var sub = app.on('sample:event').then(function (message) {
                    _this.received.push(message);
                });

                _this.subscription(sub);
            };
            this.unsubscribe = function () {
                _this.subscription().off();
                _this.subscription(null);
            };
            this.received = ko.observableArray([]);
            this.subscription = ko.observable(null);
        }
        return Subscriber;
    })();

    
    return Subscriber;
});
//# sourceMappingURL=subscriber.js.map
