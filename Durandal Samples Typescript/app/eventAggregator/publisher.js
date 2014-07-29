define(["require", "exports", 'durandal/app', 'knockout'], function(require, exports, app, ko) {
    var Publisher = (function () {
        function Publisher() {
            var _this = this;
            this.publish = function () {
                app.trigger('sample:event', _this.message());
            };
            this.message = ko.observable('');
            this.canPublish = ko.computed(function () {
                return _this.message() ? true : false;
            });
        }
        return Publisher;
    })();

    
    return Publisher;
});
//# sourceMappingURL=publisher.js.map
