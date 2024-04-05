import { Event } from "@domain/entities/event";

export interface ICreateEvent {
  createEvent(event:Event): Promise<any>;
}