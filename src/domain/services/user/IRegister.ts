import { User } from "@domain/entities/User"

export interface IRegister{
  register(user: User): Promise<any>;
}