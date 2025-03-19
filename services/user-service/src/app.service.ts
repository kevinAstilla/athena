import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AppService {
  users: CreateUserDto[] = [];

  handleUserCreated(createUserDto: CreateUserDto) {
    console.log('User created', createUserDto.email);
    this.users.push(createUserDto);
  }

  getUsers() {
    return this.users;
  }
}
