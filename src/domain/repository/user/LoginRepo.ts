import { User } from "@domain/entities/User";

export interface Login{
  login(user: User): Promise<any>;
}