import { User } from "@domain/entities/user";

export interface LoginRepo{
  findByUser(username: string): Promise<any>;
}