import { Event } from "@domain/entities/event";

export interface CheckEventRepo{
  checkEvent(eventId: number): Promise<any>;
}