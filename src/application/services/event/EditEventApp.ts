import { IEditEvent } from "@domain/services";
import { EditEventRepo } from "@domain/repository";
import { ResponseApi } from "../ResponseApi";
import { Event } from "@domain/entities";

export class EditEventApp implements IEditEvent {

  constructor(private editEventRepo: EditEventRepo){};

  async editEvent(data:any): Promise<ResponseApi> {
    try {
      if(isNaN(data.eventId)){
        return new ResponseApi(200, false, "Evento invalido", data);
      }
      if(!data.updateEvent){
        return new ResponseApi(200, false, "Datos para actualizar invalidos", data);
      }

      const result = await this.editEventRepo.editEvent(data.eventId, data.updateEvent);
      const event = Event.create(result.id, result.name, result.address, result.latitude, result.longitude, result.date, result.country, result.city, result.description)
      return new ResponseApi(200, true, "Evento actualizado", event);

    } catch (error:any) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
  }

}