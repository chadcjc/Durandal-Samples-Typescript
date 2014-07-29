define(["require", "exports"], function(require, exports) {
    var Index = (function () {
        function Index() {
            this.propertyOne = 'This is a databound property from the root context.';
            this.propertyTwo = 'This property demonstrates that binding contexts flow through composed views.';
        }
        return Index;
    })();

    
    return Index;
});
//# sourceMappingURL=index.js.map
