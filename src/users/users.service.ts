/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  getAllUsers() {
    return this.userModel.findAll();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto as any);
  }
}
