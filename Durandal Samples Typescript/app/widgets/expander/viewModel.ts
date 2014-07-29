import composition = require('durandal/composition');
import jquery = require('jquery'); 

class Expander {
    settings: any;

    activate = (settings) => {
        this.settings = settings;
    };

    getHeaderText = (item) => {
        if (this.settings.headerProperty) {
            return item[this.settings.headerProperty];
        }

        return item.toString();
    };

    afterRenderItem = (elements: HTMLElement[], item) => {
        var parts = composition.getParts(elements);
        var $itemContainer = $(parts.itemContainer);

        $itemContainer.hide();

        $(parts.headerContainer).bind('click', () => {
            $itemContainer.toggle('fast');
        });
    };
}

export = Expander;

