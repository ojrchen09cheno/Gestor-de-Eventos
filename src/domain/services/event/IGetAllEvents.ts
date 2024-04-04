import { Event } from "@domain/entities/Event";

export interface IGetAllEvents{
  getAllEvents(): Promise<Event[]>
}