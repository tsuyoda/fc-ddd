import { EVENTS } from '../constants/events';
import EventDispatcher from '../event/@shared/eventDispatcher';
import CustomerChangeAddressEvent from '../event/customer/customerChangeAddress.event';
import CustomerCreatedEvent from '../event/customer/customerCreated.event';
import ConsoleWhenCustomerAddressIsChangedHandler from '../event/customer/handler/consoleWhenCustomerAddressIsChanged.handler';
import FirstConsoleWhenCustomerIsCreatedHandler from '../event/customer/handler/firstConsoleWhenCustomerIsCreated.handler';
import SecondConsoleWhenCustomerIsCreatedHandler from '../event/customer/handler/secondConsoleWhenCustomerIsCreated.handler';
import Address from './address';

export default class Customer {
  private _eventDispatcher: EventDispatcher;
  private _address?: Address;
  private _isActive = false;
  private _rewardPoints = 0;

  constructor(
    private _id: string,
    private _name: string,
  ) {
    this._eventDispatcher = new EventDispatcher();

    this._eventDispatcher.register(
      EVENTS.CUSTOMER_CREATED,
      new FirstConsoleWhenCustomerIsCreatedHandler(),
    );

    this._eventDispatcher.register(
      EVENTS.CUSTOMER_CREATED,
      new SecondConsoleWhenCustomerIsCreatedHandler(),
    );

    this._eventDispatcher.register(
      EVENTS.CUSTOMER_CHANGE_ADDRESS,
      new ConsoleWhenCustomerAddressIsChangedHandler(),
    );

    this.validate();

    const event = new CustomerCreatedEvent(this);
    this._eventDispatcher.notify(event);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get address() {
    return this._address;
  }

  get isActive() {
    return this._isActive;
  }

  get rewardPoints() {
    return this._rewardPoints;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  changeAddress(address: Address) {
    this._address = address;

    const event = new CustomerChangeAddressEvent(this);
    this._eventDispatcher.notify(event);
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (typeof this._address === 'undefined') {
      throw new Error('Adress is mandatory to activate a customer');
    }

    this._isActive = true;
  }

  deactivate() {
    this._isActive = false;
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
