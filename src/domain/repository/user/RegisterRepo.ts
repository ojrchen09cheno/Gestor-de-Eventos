import { User } from "@domain/entities/user";

export interface RegisterRepo{
  findByUsername(username: string): Promise<any>;
  register(user: User): Promise<any>;
}