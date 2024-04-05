import { IDeleteEvent } from "@domain/services";
import { DeleteEventRepo } from "@domain/repository";
import { ResponseApi } from "../ResponseApi";

export class DeleteEventApp implements IDeleteEvent {

  constructor(private deleteEventRepo: DeleteEventRepo){}
  async deleteEvent(data: any): Promise<ResponseApi> {
    try {
      if(!(typeof(data.eventId) == "number")){
        return new ResponseApi(200, false, "Evento invalido", data.eventId);
      }

      const result = await this.deleteEventRepo.deleteEvent(data.eventId);
      if(result){
        return new ResponseApi(200, true, "Evento eliminado", data.eventId);
      }
      return new ResponseApi(200, false, "El evento no existe", data.eventId);
    } catch (error:any ) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
  }
}