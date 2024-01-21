import Order from '../entity/order';
import OrderItem from '../entity/orderItem';
import IRepositoryInterface from './repository.interface';

export default interface IOrderRepositoryInterface
  extends IRepositoryInterface<Order> {
  addItems(orderId: string, items: OrderItem[]): Promise<void>;
  removeItems(itemIds: string[]): Promise<void>;
}
