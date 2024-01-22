import CustomerChangeAddressEvent from '../event/customer/customerChangeAddress.event';
import CustomerCreatedEvent from '../event/customer/customerCreated.event';

export const EVENTS = {
  CUSTOMER_CREATED: CustomerCreatedEvent.name,
  CUSTOMER_CHANGE_ADDRESS: CustomerChangeAddressEvent.name,
};
