import { ICreateEvent } from "@domain/services";
import { CreateEventRepo } from "@domain/repository";
import { ResponseApi } from "../ResponseApi";
import { Event } from "@domain/entities";

export class CreateEventApp implements ICreateEvent {
  constructor(private createEventRepo: CreateEventRepo) {}

  async createEvent(event: Event): Promise<ResponseApi> {
    try {
      // Revisar almenos los datos requeridos para crear el evento
      if(!event.name || !event.address || event.date){
        return new ResponseApi(200, false, "Datos del evento vacios", event);
      }

      const result = await this.createEventRepo.createEvent(event);
      if (result) {
        return new ResponseApi(201, true, "Evento creado", event);
      }
      return new ResponseApi(200, false, "Error creando evento", event);

    } catch (error: any) {
      return new ResponseApi(500, false, "Error interno del servidor", event);
    }
  }
}
