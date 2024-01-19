import Address from './address';

export default class Customer {
  constructor(
    private _id: string,
    private _name: string,
    private _address: Address,
    private _active = true,
  ) {
    this.validate();
  }

  get name() {
    return this._name;
  }

  changeAddress(address: Address) {
    this._address = address;
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (typeof this._address === 'undefined') {
      throw new Error('Adress is mandatory to activate a customer');
    }

    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  private validate() {
    if (this._id.length === 0) {
      throw new Error('Id is required');
    }

    if (this._name.length === 0) {
      throw new Error('Name is required');
    }
  }
}
