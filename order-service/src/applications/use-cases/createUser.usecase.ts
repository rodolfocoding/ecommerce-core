import { Order } from 'src/domains/model/order';
import { OrderRepository } from 'src/domains/repositories/order.repository';
import { CreateOrderDto } from 'src/presentations/order/dto/create-order.dto';

export class CreateOrderUseCases {
  constructor(private orderRepository: OrderRepository) {}

  async execute(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderRepository.createOrder(createOrderDto);
  }
}
