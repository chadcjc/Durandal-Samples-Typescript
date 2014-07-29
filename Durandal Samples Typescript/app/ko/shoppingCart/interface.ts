interface IProduct {
    name: string;
    price: number;
}

interface IProductCategory {
    name: string;
    products: IProduct[]
} 