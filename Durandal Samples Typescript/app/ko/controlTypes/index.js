define(["require", "exports", 'knockout'], function(require, exports, ko) {
    var Index = (function () {
        function Index() {
            this.stringValue = ko.observable("Hello");
            this.passwordValue = ko.observable("mypass");
            this.booleanValue = ko.observable(true);
            this.optionValues = ["Alpha", "Beta", "Gamma"];
            this.selectedOptionValue = ko.observable("Gamma");
            this.multipleSelectedOptionValues = ko.observable(["Alpha"]);
            this.radioSelectedOptionValue = ko.observable("Beta");
        }
        return Index;
    })();

    var instance = new Index();
    
    return instance;
});
//# sourceMappingURL=index.js.map
