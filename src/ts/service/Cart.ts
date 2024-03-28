import Buyable from '../domain/Buyable';
import Gadget from '../domain/Gadjet';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (this._items.findIndex(i => i.id === item.id) > -1 &&
            !(item instanceof Gadget)) {

            return
        }
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    get totalAmount(): number {
        // let amount = 0;
        // /// почему-то reduce не хочет кушать
        // for (const item of this._items) {
        //     amount += item.price;
        // }
        // return amount;
        return this._items.reduce((acc: number, item: Buyable) => acc + item.price, 0);
    }

    getDiscountedTotalAmount(percentDiscount: number): number {
        return this.totalAmount * percentDiscount / 100;
    }

    deleteItem(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        if (index > -1) {
            this._items.splice(index, 1);
        }
    }
}
