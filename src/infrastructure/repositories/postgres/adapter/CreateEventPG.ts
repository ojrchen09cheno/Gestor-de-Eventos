import { CreateEventRepo } from "@domain/repository";
import { pool } from "../postgres";
import { Event } from "@domain/entities";
export class CreateEventPG implements CreateEventRepo{

    constructor() {}
  async createEvent(event: Event): Promise<any> {
    const result = await pool.query(
      `INSERT INTO event(name, address, latitude, longitude, date, country, city, description) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
      RETURNING *`, 
      //@ts-ignore
      [event.name, event.address, event.latitude, event.longitude, 
        event.date, event.country, event.city, event.description]
      );
    
    return result;
  }
}