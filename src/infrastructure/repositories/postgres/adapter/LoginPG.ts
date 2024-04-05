import { LoginRepo } from "../../../../domain/repository";
import { pool } from "../postgres";
export class LoginPG implements LoginRepo{

    constructor() {}
  async findByUser(username: string): Promise<any> {
    const result = await pool.query(
      `SELECT * FROM users WHERE username = $1`, 
      [username]
      );
    
    return result.rows;
  }
}