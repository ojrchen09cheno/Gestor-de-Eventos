import { User } from "@domain/entities/User";

export interface LoginService {
  login(user:User): Promise<any>;
}