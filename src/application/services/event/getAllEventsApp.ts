import { IGetAllEvents } from "../../../domain/services";
import { GetAllEventsRepo } from "../../../domain/repository";
import { ResponseApi } from "../responseApi";
import { Event } from "../../../domain/entities";

export class GetAllEventsApp implements IGetAllEvents {

  constructor(private getAllEventsRepo: GetAllEventsRepo){};

  async getAllEvents(): Promise<ResponseApi> {
    try {
      const result = await this.getAllEventsRepo.getAllEvents();
      if(!result.length){
        return new ResponseApi(200, true, "No se han encontrado eventos", result);
      }

      return new ResponseApi(200, true, "Eventos encontrados", result);

    } catch (error:any) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
      
  }
}