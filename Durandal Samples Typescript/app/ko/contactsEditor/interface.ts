interface IPhone {
    type: string;
    number: string;
}

interface IContact {
    firstName: string;
    lastName: string;
    phones: KnockoutObservableArray<IPhone>;
} 