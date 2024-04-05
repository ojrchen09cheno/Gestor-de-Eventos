import { Event } from "@domain/entities/Event";

export interface CreateEventRepo {
  createEvent(event: Event): Promise<any>;
}