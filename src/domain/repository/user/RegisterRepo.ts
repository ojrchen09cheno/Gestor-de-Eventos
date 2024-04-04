import { User } from "@domain/entities/User";

export interface RegisterRepo{
  findByUsername(username: string): Promise<any>;
  register(user: User): Promise<any>;
}