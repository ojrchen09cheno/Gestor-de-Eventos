import { Event } from "@domain/entities/Event";

export interface CheckEventRepo{
  checkEvent(eventId: number): Promise<Event>;
}