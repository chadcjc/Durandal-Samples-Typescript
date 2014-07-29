define(["require", "exports", 'durandal/app', './customModal'], function(require, exports, app, customModal) {
    var Index = (function () {
        function Index() {
            this.showCustomModal = function () {
                var modal = new customModal();
                modal.show().then(function (response) {
                    app.showMessage('You answered ' + response + '.');
                });
            };
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
