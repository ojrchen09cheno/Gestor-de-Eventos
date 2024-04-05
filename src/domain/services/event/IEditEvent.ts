import { Event } from "@domain/entities/event";

export interface IEditEvent {
  editEvent(data:any): Promise<any>;
}