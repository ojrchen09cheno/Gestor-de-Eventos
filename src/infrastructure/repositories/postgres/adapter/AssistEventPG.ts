import { AssistEventRepo } from "@domain/repository";
import { pool } from "../postgres";
export class AssistEventPG implements AssistEventRepo{

    constructor() {}
  async assistEvent(userId: number, eventId: number): Promise<any> {
    const result = await pool.query(
      `INSERT INTO user_event(user_id, event_id) VALUES ($1, $2) RETURNING *`, 
      [userId, eventId]
      );
    
    return result;
  }
}