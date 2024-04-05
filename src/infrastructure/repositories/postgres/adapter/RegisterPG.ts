import { RegisterRepo } from "@domain/repository";
import { pool } from "../postgres";
import { User } from "@domain/entities";
export class RegisterPG implements RegisterRepo{

    constructor() {}
  async findByUsername(username: string): Promise<any> {
    const result = await pool.query(
      `SELECT * FROM users WHERE id =$1`, 
      [username]
      );
    
    return result;
  }

  async register(user: User): Promise<any> {
    const result = await pool.query(
      `INSERT INTO users(username, password, name) VALUES ($1,$2,$3)`,
      //@ts-ignore: valores requeridos como input
      [user.username, user.password, user.name]
      );
    
    return result;
  }
}