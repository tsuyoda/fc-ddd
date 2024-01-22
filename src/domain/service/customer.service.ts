import Customer from '../entity/customer';
import { v4 as uuid } from 'uuid';
import { EVENTS } from '../constants/events';
import FirstConsoleWhenCustomerIsCreatedHandler from '../event/customer/handler/firstConsoleWhenCustomerIsCreated.handler';
import SecondConsoleWhenCustomerIsCreatedHandler from '../event/customer/handler/secondConsoleWhenCustomerIsCreated.handler';
import ConsoleWhenCustomerAddressIsChangedHandler from '../event/customer/handler/consoleWhenCustomerAddressIsChanged.handler';
import CustomerCreatedEvent from '../event/customer/customerCreated.event';
import Address from '../entity/address';
import CustomerChangeAddressEvent from '../event/customer/customerChangeAddress.event';
import EventDispatcher from '../event/@shared/eventDispatcher';
import CustomerRepository from '../../infrastructure/repository/customer.repository';

export default class CustomerService {
  constructor(
    private _customerRepository: CustomerRepository,
    private _eventDispatcher: EventDispatcher,
  ) {
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
  }

  async create(name: string, address: Address): Promise<Customer> {
    const customer = new Customer(uuid(), name);
    customer.changeAddress(address);

    await this._customerRepository.create(customer);

    const customerCreatedEvent = new CustomerCreatedEvent(customer);
    this._eventDispatcher.notify(customerCreatedEvent);

    return customer;
  }

  async changeAddress(customerId: string, newAddress: Address): Promise<void> {
    const customer = await this._customerRepository.find(customerId);

    customer.changeAddress(newAddress);

    await this._customerRepository.update(customer);

    const changeAddressEvent = new CustomerChangeAddressEvent(customer);
    this._eventDispatcher.notify(changeAddressEvent);
  }
}
