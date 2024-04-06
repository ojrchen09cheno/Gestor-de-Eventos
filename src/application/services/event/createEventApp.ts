import { ICreateEvent } from "../../../domain/services";
import { CreateEventRepo } from "../../../domain/repository";
import { ResponseApi } from "../responseApi";
import { Event } from "../../../domain/entities";

export class CreateEventApp implements ICreateEvent {
  constructor(private createEventRepo: CreateEventRepo) {}

  async createEvent(data: any): Promise<ResponseApi> {
    try {
      // Revisar almenos los datos requeridos para crear el evento
      if(!data.name || !data.address || !data.date){
        return new ResponseApi(200, false, "Datos del evento vacios", data);
      }
      const event = Event.create(data.id, data.name, data.address, data.latitude, data.longitude, data.date, data.country, data.city, data.description);
      const result = await this.createEventRepo.createEvent(event);
        return new ResponseApi(201, true, "Evento creado", result);

    } catch (error: any) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
  }
}
