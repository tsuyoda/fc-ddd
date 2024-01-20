import OrderItem from './orderItem';

export default class Order {
  private _total: number;

  constructor(
    private _id: string,
    private _customerId: string,
    private _items: OrderItem[],
  ) {
    this._total = this.calculateTotal();
    this.validate();
  }

  get total() {
    return this._total;
  }

  private validate(): void {
    if (this._id.length === 0) {
      throw new Error('Id is required');
    }

    if (this._customerId.length === 0) {
      throw new Error('CustomerId is required');
    }

    if (this._items.length === 0) {
      throw new Error('At least 1 item is required');
    }
  }

  private calculateTotal(): number {
    return this._items.reduce((acc, item) => acc + item.total, 0);
  }
}
