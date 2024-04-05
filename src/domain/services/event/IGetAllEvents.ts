import { ResponseApi } from "@application/services/responseApi";
import { Event } from "@domain/entities/event";

export interface IGetAllEvents{
  getAllEvents(): Promise<ResponseApi>
}