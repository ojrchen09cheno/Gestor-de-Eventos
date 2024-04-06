import { IUploadEvents } from "../../../domain/services/event/iUploadEvents";
import { CreateEventRepo } from "../../../domain/repository";
import { ResponseApi } from "../responseApi";
import { Event } from "../../../domain/entities";

export class UploadEventsApp implements IUploadEvents {

  constructor(private createEventRepo: CreateEventRepo) {}

  async uploadEvents(data: any): Promise<any> {
    try {
      let results: object[] = [];
      for(let i = 0; i < data.length; i++){
        const element = data[i];
        const event = Event.create(element.id, element.name, element.address, element.latitude, element.longitude, element.date, element.country, element.city, element.description);
        const result = await this.createEventRepo.createEvent(event);
        results.push(result[0]);
      }
      return new ResponseApi(201, true, "Eventos creados", results);
    } catch (error: any) {
      return new ResponseApi(500, false, "Error interno del servido", error.message)
    }
  }
}
