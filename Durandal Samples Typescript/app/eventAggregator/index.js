define(["require", "exports", './publisher', './subscriber'], function(require, exports, publisher, subscriber) {
    var Index = (function () {
        function Index() {
            this.publisher = publisher;
            this.subscriber = subscriber;
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
