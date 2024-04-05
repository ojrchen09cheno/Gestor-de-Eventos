import { Event } from "@domain/entities/event";

export interface EditEventRepo{
  editEvent(eventId: number, event: Event): Promise<any>;
}