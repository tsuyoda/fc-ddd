class Customer {
  private _id: string;
  private _name: string;
  private _address = '';
  private _active = true;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;

    this.validate();
  }

  get name() {
    return this._name;
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (this._address.length === 0) {
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
