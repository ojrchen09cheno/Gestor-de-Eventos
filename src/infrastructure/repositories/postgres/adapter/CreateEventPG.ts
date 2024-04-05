import { CreateEventRepo } from "@domain/repository";
import { pool } from "../postgres";
import { Event } from "@domain/entities";
export class CreateEventPG implements CreateEventRepo{

    constructor() {}
  async createEvent(event: Event): Promise<any> {
    const result = await pool.query(
      `INSERT INTO user_event(user_id, event_id) VALUES ($1, $2) RETURNING *`, 
      [userId, eventId]
      );
    
    return result;
  }
}