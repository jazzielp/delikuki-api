import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { Role } from '@/common/enums/role.enum';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  readonly password: string;
  @IsString()
  @IsNotEmpty()
  readonly fisrtName: string;
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;
  @IsEnum(Role, { message: 'Role must be either admin or basic' })
  readonly role: Role;
}
