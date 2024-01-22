import Address from './domain/entity/address';
import Customer from './domain/entity/customer';
import { v4 as uuid } from 'uuid';

const customer = new Customer(uuid(), 'Customer 1');
const address = new Address('Street', 10, '99999-999', 'City');

customer.changeAddress(address);
