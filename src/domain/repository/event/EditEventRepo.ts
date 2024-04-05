import { Event } from "@domain/entities/Event";

export interface EditEventRepo{
  editEvent(eventId: number, event: any): Promise<Event>;
}