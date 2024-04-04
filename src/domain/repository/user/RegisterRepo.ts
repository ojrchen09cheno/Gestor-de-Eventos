import { User } from "@domain/entities/User";

export interface Register{
  register(user: User): Promise<any>;
}