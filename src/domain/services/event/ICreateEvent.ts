import { Event } from "@domain/entities/Event";

export interface ICreateEvent {
  createEvent(event:Event): Promise<any>;
}