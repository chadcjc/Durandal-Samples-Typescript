define(["require", "exports", 'plugins/dialog', 'knockout'], function(require, exports, dialog, ko) {
    var CustomModal = (function () {
        function CustomModal() {
            var _this = this;
            this.ok = function () {
                dialog.close(_this, _this.input());
            };
            this.canDeactivate = function () {
                return dialog.showMessage('Are you sure that\'s your favorite color?', 'Just Checking...', ['Yes', 'No']);
            };
            this.show = function () {
                return dialog.show(new CustomModal());
            };
            this.input = ko.observable('');
        }
        return CustomModal;
    })();

    
    return CustomModal;
});
//# sourceMappingURL=customModal.js.map
