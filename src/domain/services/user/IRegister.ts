import { User } from "@domain/entities/user"

export interface IRegister{
  register(user: User): Promise<any>;
}