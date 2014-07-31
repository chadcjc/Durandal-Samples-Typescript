interface IItem {
    name: string;
    sales: number;
    price: number;
}

interface IColumn {
    headerText: string;
    rowText: string;
}

interface IGridConfiguration {
    data: KnockoutObservableArray<IItem>;
    columns: IColumn[];
    pageSize: number;
} 