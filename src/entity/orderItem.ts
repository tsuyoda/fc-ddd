export default class OrderItem {
  private _total: number;

  constructor(
    private _id: string,
    private _name: string,
    private _unitPrice: number,
    private _quantity: number,
  ) {
    this._total = this.calculateTotal();
    this.validate();
  }

  get total() {
    return this._total;
  }

  private validate() {
    if (this._id.length === 0) {
      throw new Error('Id is required');
    }

    if (this._name.length === 0) {
      throw new Error('Name is required');
    }

    if (this._unitPrice < 0) {
      throw new Error('UnitPrice must be greater or equal than 0');
    }

    if (this._quantity <= 0) {
      throw new Error('Quantity must be greater than 0');
    }
  }

  private calculateTotal() {
    return this._unitPrice * this._quantity;
  }
}
