import IEvent from '../../@shared/event.interface';
import IEventHandler from '../../@shared/eventHandler.interface';

export default class SecondConsoleWhenCustomerIsCreatedHandler
  implements IEventHandler
{
  handle(event: IEvent): void {
    console.log('Esse é o segundo console.log do evento: CustomerCreated');
  }
}
