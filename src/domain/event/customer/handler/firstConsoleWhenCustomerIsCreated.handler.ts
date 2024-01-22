import IEvent from '../../@shared/event.interface';
import IEventHandler from '../../@shared/eventHandler.interface';

export default class FirstConsoleWhenCustomerIsCreatedHandler
  implements IEventHandler
{
  handle(event: IEvent): void {
    console.log('Esse é o primeiro console.log do evento: CustomerCreated');
  }
}
