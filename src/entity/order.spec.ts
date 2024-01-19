import Order from './order';
import OrderItem from './orderItem';

describe('Order unit tests', () => {
  it('Should throw a error when id is empty', () => {
    const item = new OrderItem('i1', 'Item 1', 100, 1);

    expect(() => {
      new Order('', 'c1', [item]);
    }).toThrow('Id is required');
  });

  it('Should throw a error when customerId is empty', () => {
    const item = new OrderItem('i1', 'Item 1', 100, 1);

    expect(() => {
      new Order('i1', '', [item]);
    }).toThrow('CustomerId is required');
  });

  it('Should throw a error when items list is empty', () => {
    expect(() => {
      new Order('i1', 'c1', []);
    }).toThrow('At least 1 item is required');
  });

  it('Should get total price of order', () => {
    const item1 = new OrderItem('i1', 'Item 1', 100, 1);
    const item2 = new OrderItem('i2', 'Item 2', 200, 2);

    const order1 = new Order('i1', 'c1', [item1]);

    expect(order1.total).toBe(100);

    const order2 = new Order('i2', 'c1', [item1, item2]);

    expect(order2.total).toBe(500);
  });
});
