import { DeleteEventRepo } from "../../../../domain/repository";
import { pool } from "../postgres";
export class DeleteEventPG implements DeleteEventRepo{

    constructor() {}
  async deleteEvent(eventId: number): Promise<any> {
    const result = await pool.query(
      `DELETE FROM event WHERE id = $1 RETURNING *`, 
      [eventId]
      );
    
    return result.rows;
  }
}