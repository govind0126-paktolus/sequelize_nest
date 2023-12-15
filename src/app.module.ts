import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Govind@2611',
      database: 'Sequalize',
      models: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
