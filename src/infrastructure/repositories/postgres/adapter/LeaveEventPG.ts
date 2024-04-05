import { LeaveEventRepo } from "@domain/repository";
import { pool } from "../postgres";
export class LeaveEventPG implements LeaveEventRepo{

    constructor() {}
  async leaveEvent(userId: number, eventId: number): Promise<any> {
    const result = await pool.query(
      `DELETE FROM user_event WHERE user_id = $1 AND event_id = $2
      RETURNING *`, 
      [userId, eventId]
      );
    
    return result;
  }
}