import { ResponseApi } from "@application/services/ResponseApi";
import { Event } from "@domain/entities/Event";

export interface IGetAllEvents{
  getAllEvents(): Promise<ResponseApi>
}