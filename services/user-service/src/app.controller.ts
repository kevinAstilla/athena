import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserDto, ResponseUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @EventPattern('user-created')
  async handleUserCreated(@Payload() createUserDto: CreateUserDto) {
    try {
      await this.userService.createUser(createUserDto);
    } catch (error) {
      console.error(error);
    }
  }

  @MessagePattern({ cmd: 'get-users' })
  async getUsers() {
    // to-do: implement parameters for query
    const users = await this.userService.users({});
    return users.map((user) => new ResponseUserDto(user));
  }
}
