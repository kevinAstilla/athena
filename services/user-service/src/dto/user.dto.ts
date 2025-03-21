import { PartialType } from '@nestjs/mapped-types';

export class UserDto {
  public email: string;
  public name: string | null;

  constructor(user: { email: string; name: string | null }) {
    this.email = user.email;
    this.name = user.name;
  }
}

export class CreateUserDto extends UserDto {}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class ResponseUserDto extends UserDto {
  public id: number;
  constructor(user: { id: number; email: string; name: string | null }) {
    super(user);
    this.id = user.id;
  }
}
