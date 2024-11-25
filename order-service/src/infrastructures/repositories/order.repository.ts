import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/domains/model/order';
import { OrderRepository } from 'src/domains/repositories/order.repository';
import { CreateOrderDto } from 'src/presentations/user/dto/create-order.dto';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderRepositoryOrm implements OrderRepository {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async getAllOrder(): Promise<Order[]> {
    const orders = await this.orderRepository.find();
    return orders.map((order) => this.toOrder(order));
  }

  async createUser(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = new Order();
    user.email = createOrderDto.email;
    user.name = createOrderDto.name;
    user.password = createOrderDto.password;
    return this.orderRepository.save(user);
  }

  private toOrder(userEntity: User): UserM {
    const user: UserM = new UserM();

    user.id = userEntity.id;
    user.email = userEntity.email;
    user.name = userEntity.name;
    user.password = userEntity.password;
    user.created_at = userEntity.created_at;
    user.updated_at = userEntity.updated_at;

    return user;
  }
}
