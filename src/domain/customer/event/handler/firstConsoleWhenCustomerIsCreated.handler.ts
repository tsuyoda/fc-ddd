import IEvent from '../../../@shared/event/event.interface';
import IEventHandler from '../../../@shared/event/handler/eventHandler.interface';

export default class FirstConsoleWhenCustomerIsCreatedHandler
  implements IEventHandler
{
  handle(event: IEvent): void {
    console.log('Esse é o primeiro console.log do evento: CustomerCreated');
  }
}
