import { Event } from "@domain/entities/Event";

export interface IEditEvent {
  editEvent(eventId:number, event: Event): Promise<any>;
}