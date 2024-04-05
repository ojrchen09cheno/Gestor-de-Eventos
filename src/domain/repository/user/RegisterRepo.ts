import { User } from "../../entities/user";

export interface RegisterRepo{
  findByUsername(username: string): Promise<any>;
  register(user: any): Promise<any>;
}