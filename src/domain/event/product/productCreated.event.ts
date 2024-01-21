import IEvent from '../@shared/event.interface';

export default class ProducerCreatedEvent implements IEvent {
  readonly createdAt: Date;

  constructor(readonly eventData: any) {
    this.createdAt = new Date();
  }
}
