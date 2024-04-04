import { ICheckEvent } from "@domain/services";
import { CheckEventRepo } from "@domain/repository";
import { ResponseApi } from "../ResponseApi";
import { Event } from "@domain/entities";

export class CheckEventApp implements ICheckEvent {

  constructor(private checkEventRepo: CheckEventRepo){};
  async checkEvent(eventId: number): Promise<ResponseApi> {
    try {
      if(isNaN(eventId)){
        return new ResponseApi(200, false, "Evento invalido", {});
      }

      const result = await this.checkEventRepo.checkEvent(eventId);
      const event = Event.create(result.id, result.name, result.address, result.latitude, result.longitude, result.date, result.country, result.city, result.description);
      if(event){
        return new ResponseApi(200, true, "Evento encontrado", result);
      }
      return new ResponseApi(200, false, "Evento no encontrado", result);

    } catch (error:any) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
  }
  
}