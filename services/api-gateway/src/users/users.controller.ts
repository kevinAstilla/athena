import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dtp';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('me')
  getMe(): any {
    return {};
  }

  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto): any {
    return this.userService.createUser(createUserDto);
  }

  @Put('me')
  updateUser(@Body() updateUserDta: UpdateUserDto): any {
    return { ...updateUserDta, id: '123' };
  }

  // POST /Register {}
  // POST /Login {}
  // POST /Logout
  // PUT /ChangePassword
  // DELETE /users/me

  // low priority routes
  // POST /ForgotPassword
  // POST /ResetPassword
}
