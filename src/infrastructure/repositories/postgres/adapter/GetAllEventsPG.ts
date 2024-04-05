import { GetAllEventsRepo } from "@domain/repository";
import { pool } from "../postgres";
export class GetAllEventsPG implements GetAllEventsRepo{

    constructor() {}
  async getAllEvents(): Promise<any> {
    const result = await pool.query(`SELECT * FROM event`);
    
    return result;
  }
}