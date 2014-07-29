define(["require", "exports"], function(require, exports) {
    var InlineModule = (function () {
        function InlineModule() {
            this.someProperty = 'This is being bound against an inline view.';
        }
        return InlineModule;
    })();

    
    return InlineModule;
});
//# sourceMappingURL=inlineModule.js.map
