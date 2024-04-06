import { EditEventRepo } from "../../../../domain/repository";
import { pool } from "../postgres";
export class EditEventPG implements EditEventRepo{

    constructor() {}
  async editEvent(eventId: number, event: any): Promise<any> {
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
      WHERE id = $9
      RETURNING *`, 
      //@ts-ignore: creo que el error era implementando la clase Event 
      [event.name, event.address, event.latitude, event.longitude, 
        event.date, event.country, event.city, event.description, eventId]
    );
    
    return result.rows;
  }
}