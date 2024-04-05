import { CheckEventRepo } from "../../../../domain/repository";
import { pool } from "../postgres";
export class CheckEventPG implements CheckEventRepo{

    constructor() {}
  async checkEvent(eventId: number): Promise<any> {
    const result = await pool.query(
      `SELECT * FROM event WHERE id = $1`, 
      [eventId]
      );
    
    return result.rows;
  }
}