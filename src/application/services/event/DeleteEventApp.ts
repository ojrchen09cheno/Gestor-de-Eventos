import { IDeleteEvent } from "@domain/services";
import { DeleteEventRepo } from "@domain/repository";
import { ResponseApi } from "../ResponseApi";

export class DeleteEventApp implements IDeleteEvent {

  constructor(private deleteEventRepo: DeleteEventRepo){}
  async deleteEvent(eventId: number): Promise<ResponseApi> {
    try {
      if(isNaN(eventId)){
        return new ResponseApi(200, false, "Evento invalido", eventId);
      }

      const result = await this.deleteEventRepo.deleteEvent(eventId);
      if(result){
        return new ResponseApi(200, true, "Evento eliminado", eventId);
      }
      return new ResponseApi(200, false, "El evento no existe", eventId);
    } catch (error:any ) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
  }
}