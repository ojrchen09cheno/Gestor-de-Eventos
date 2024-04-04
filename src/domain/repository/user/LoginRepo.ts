import { User } from "@domain/entities/User";

export interface LoginRepo{
  findByUser(username: string): Promise<any>;
}