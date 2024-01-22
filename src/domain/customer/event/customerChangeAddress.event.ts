import Customer from '../entity/customer';
import IEvent from '../../@shared/event/event.interface';

export default class CustomerChangeAddressEvent implements IEvent {
  readonly createdAt: Date;

  constructor(readonly eventData: Customer) {
    this.createdAt = new Date();
  }
}
