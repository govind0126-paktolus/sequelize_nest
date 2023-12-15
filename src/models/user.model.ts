/* eslint-disable prettier/prettier */
import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.TEXT)
  firstName: string;

  @Column(DataType.TEXT)
  lastName: string;

  @Column(DataType.INTEGER)
  age: number;
}
