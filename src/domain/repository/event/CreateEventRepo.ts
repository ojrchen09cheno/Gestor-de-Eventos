import { Event } from "@domain/entities/event";

export interface CreateEventRepo {
  createEvent(event: Event): Promise<any>;
}