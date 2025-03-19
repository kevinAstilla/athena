import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('user-created')
  handleUserCreated(@Payload() createUserDto: CreateUserDto) {
    this.appService.handleUserCreated(createUserDto);
  }

  @MessagePattern({ cmd: 'get-users' })
  getUsers() {
    return this.appService.getUsers();
  }
}
