import IEventHandler from '../../@shared/eventHandler.interface';
import CustomerCreatedEvent from '../customerCreated.event';

export default class SecondConsoleWhenCustomerIsCreatedHandler
  implements IEventHandler<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log('Esse é o segundo console.log do evento: CustomerCreated');
  }
}
