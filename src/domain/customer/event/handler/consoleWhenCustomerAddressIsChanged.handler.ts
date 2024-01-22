import Customer from '../../entity/customer';
import IEvent from '../../../@shared/event/event.interface';
import IEventHandler from '../../../@shared/event/handler/eventHandler.interface';

export default class ConsoleWhenCustomerAddressIsChangedHandler
  implements IEventHandler
{
  handle(event: IEvent<Customer>): void {
    console.log(
      `Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para: ${event.eventData.address?.toString()}`,
    );
  }
}
