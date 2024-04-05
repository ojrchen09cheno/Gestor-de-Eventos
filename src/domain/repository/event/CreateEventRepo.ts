import { Event } from "../../entities/event";

export interface CreateEventRepo {
  createEvent(event: Event): Promise<any>;
}