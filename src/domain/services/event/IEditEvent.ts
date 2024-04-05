import { Event } from "@domain/entities/event";

export interface IEditEvent {
  editEvent(eventId: number, data:any): Promise<any>;
}