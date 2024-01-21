import IEvent from '../../@shared/event.interface';
import IEventHandler from '../../@shared/eventHandler.interface';

export default class SendEmailWhenProductIsCreated implements IEventHandler {
  handle(event: IEvent): void {
    console.log('Sending email to ...'); // TODO: Implement email sender
  }
}
