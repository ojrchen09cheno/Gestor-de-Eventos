import { Event } from "@domain/entities/Event";

export interface IEditEvent {
  editEvent(data:any): Promise<any>;
}