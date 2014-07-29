import models = require('./models');
import services = require('./services');

class Index {
    cart: models.Cart;
    sampleProductCategories: IProductCategory[];

    constructor() {
        this.cart = new models.Cart();
        this.sampleProductCategories = new services.ProductService().getProductCategories();
    }

    formatCurrency = (value: number) => {
        return "$" + value.toFixed(2);
    }
}

var instance: ISingleton = new Index();
export = instance;