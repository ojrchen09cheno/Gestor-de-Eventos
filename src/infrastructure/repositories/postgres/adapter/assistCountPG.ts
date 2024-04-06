import { AssistCountRepo } from "../../../../domain/repository";
import { pool } from "../postgres";
export class AssistCountPG implements AssistCountRepo{

  constructor() {};

  async assistCount(): Promise<any> {
    const result = await pool.query(
      `SELECT e.id, e.date , COUNT(*) 
      FROM "event" e
      INNER JOIN "user_event" ue ON e.id = ue.event_id
      GROUP BY id`, 
      );
    
    return result.rows;
  }
}