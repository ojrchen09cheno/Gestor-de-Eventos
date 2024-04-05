import { EditEventRepo } from "@domain/repository";
import { pool } from "../postgres";
import { Event } from "@domain/entities";
export class EditEventPG implements EditEventRepo{

    constructor() {}
  async editEvent(eventId: number, event: Event): Promise<any> {
    // if(event.name){
    //   await pool.query('UPDATE event SET name = COALESCE($1, name) WEHER id = $2',
    //   [event.name, eventId])
    // }
    const result = await pool.query(
      `UPDATE event SET 
      name = COALESCE($1, name),
      address = COALESCE($2, address),
      latitude = COALESCE($3, latitude),
      longitude = COALESCE($4, longitude),
      date = COALESCE($5, date),
      country = COALESCE($6, country),
      city = COALESCE($7, city),
      description = COALESCE($8, description)
      WHERE id = $9`, 
      //@ts-ignore: 
      [event.name, event.address, event.latitude, event.longitude, 
        event.date, event.country, event.city, event.description, eventId]
    );
    
    return result;
  }
}