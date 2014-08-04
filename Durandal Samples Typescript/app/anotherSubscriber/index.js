define(["require", "exports", '../eventAggregator/subscriber'], function(require, exports, subscriber) {
    var Index = (function () {
        function Index() {
            this.subscriber = new subscriber();
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
