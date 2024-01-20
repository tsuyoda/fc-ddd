export default class Address {
  constructor(
    private _street: string,
    private _number: number,
    private _zip: string,
    private _city: string,
  ) {
    this.validate();
  }

  toString() {
    return `${this._street}, ${this._number}, ${this._zip} - ${this._city}`;
  }

  private validate() {
    if (this._street.length === 0) {
      throw new Error('Street is required');
    }

    if (this._number <= 0) {
      throw new Error('Number must be greater then 0');
    }

    if (this._zip.length === 0) {
      throw new Error('Zip is required');
    }

    if (this._city.length === 0) {
      throw new Error('City is required');
    }
  }
}
