import { IGetAllEvents } from "@domain/services";
import { GetAllEventsRepo } from "@domain/repository";
import { ResponseApi } from "../ResponseApi";
import { Event } from "@domain/entities";

export class GetAllEvents implements IGetAllEvents {

  constructor(private getAllEventsRepo: GetAllEventsRepo){};

  async getAllEvents(): Promise<ResponseApi> {
    try {
      const result = await this.getAllEventsRepo.getAllEvents();
      if(!result){
        new ResponseApi(200, true, "No se han encontrado eventos", result);
      }

      let events: Event[] = [];
      for(let i=0; i<result.length; i++){
        const x = result[i];
        const event = Event.create(x.id, x.name, x.address, x.latitude, x.longitude, x.date, x.country, x.city, x.description)
        events.push(event);
      }

      // result.array.forEach((x: { id: number; name: string; address: string; latitude: number; longitude: number; date: Date; country: string; city: string; description: string; }) => {
      //   const event = Event.create(x.id, x.name, x.address, x.latitude, x.longitude, x.date, x.country, x.city, x.description)
      // });

    } catch (error:any) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
      
  }
}