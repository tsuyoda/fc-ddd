import IEvent from './event.interface';
import IEventDispatcher from './eventDispatcher.interface';
import IEventHandler from './eventHandler.interface';

export default class EventDispatcher implements IEventDispatcher {
  private _eventHandlers: { [eventName: string]: Set<IEventHandler> } = {};

  get eventHandlers() {
    return this._eventHandlers;
  }

  notify(event: IEvent): void {
    if (!this._eventHandlers[event.constructor.name]) {
      return;
    }

    this._eventHandlers[event.constructor.name].forEach(handler => {
      handler.handle(event);
    });
  }

  register(eventName: string, eventHandler: IEventHandler<IEvent>): void {
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = new Set();
    }

    this._eventHandlers[eventName].add(eventHandler);
  }

  unregister(eventName: string, eventHandler: IEventHandler<IEvent>): void {
    if (!this._eventHandlers[eventName]) {
      return;
    }

    this._eventHandlers[eventName].delete(eventHandler);
  }

  unregisterAll(): void {
    this._eventHandlers = {};
  }
}
