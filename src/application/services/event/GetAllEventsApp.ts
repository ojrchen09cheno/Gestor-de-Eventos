import { IGetAllEvents } from "@domain/services";
import { GetAllEventsRepo } from "@domain/repository";
import { ResponseApi } from "../responseApi";
import { Event } from "@domain/entities";

export class GetAllEventsApp implements IGetAllEvents {

  constructor(private getAllEventsRepo: GetAllEventsRepo){};

  async getAllEvents(): Promise<ResponseApi> {
    try {
      const result = await this.getAllEventsRepo.getAllEvents();
      if(!result){
        return new ResponseApi(200, true, "No se han encontrado eventos", result);
      }

      // let events: Event[] = [];
      // for(let i=0; i<result.length; i++){
      //   const x = result[i];
      //   const event = Event.create(x.id, x.name, x.address, x.latitude, x.longitude, x.date, x.country, x.city, x.description)
      //   events.push(event);
      // }

      return new ResponseApi(200, true, "Eventos encontrados", result);
      
      // result.array.forEach((x: { id: number; name: string; address: string; latitude: number; longitude: number; date: Date; country: string; city: string; description: string; }) => {
      //   const event = Event.create(x.id, x.name, x.address, x.latitude, x.longitude, x.date, x.country, x.city, x.description)
      // });

    } catch (error:any) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
      
  }
}