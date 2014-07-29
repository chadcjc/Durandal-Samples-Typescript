define(["require", "exports", 'durandal/composition'], function(require, exports, composition) {
    var Expander = (function () {
        function Expander() {
            var _this = this;
            this.activate = function (settings) {
                _this.settings = settings;
            };
            this.getHeaderText = function (item) {
                if (_this.settings.headerProperty) {
                    return item[_this.settings.headerProperty];
                }

                return item.toString();
            };
            this.afterRenderItem = function (elements, item) {
                var parts = composition.getParts(elements);
                var $itemContainer = $(parts.itemContainer);

                $itemContainer.hide();

                $(parts.headerContainer).bind('click', function () {
                    $itemContainer.toggle('fast');
                });
            };
        }
        return Expander;
    })();

    
    return Expander;
});
//# sourceMappingURL=viewModel.js.map
