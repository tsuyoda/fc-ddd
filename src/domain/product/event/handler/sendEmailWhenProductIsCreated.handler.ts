import IEvent from '../../../@shared/event/event.interface';
import IEventHandler from '../../../@shared/event/handler/eventHandler.interface';

export default class SendEmailWhenProductIsCreatedHandler
  implements IEventHandler
{
  handle(event: IEvent): void {
    console.log('Sending email to ...'); // TODO: Implement email sender
  }
}
