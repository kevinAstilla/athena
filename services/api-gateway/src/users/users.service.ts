import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, timeout } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_SERVICE') private rabbitMQ: ClientProxy) {}

  createUser(createUserDto: CreateUserDto) {
    try {
      this.rabbitMQ.emit('user-created', createUserDto);
      return { message: 'User created' };
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }

  getUsers(): Observable<any> {
    return this.rabbitMQ.send({ cmd: 'get-users' }, {}).pipe(timeout(5000));
  }
}
