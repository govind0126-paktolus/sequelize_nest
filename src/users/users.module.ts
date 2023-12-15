/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/models/user.model';
import { UsersController } from './user.controller';
import { UserService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers:[UsersController],
  providers:[UserService]
})
export class UsersModule {}
