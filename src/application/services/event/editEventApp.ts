import { IEditEvent } from "../../../domain/services";
import { EditEventRepo } from "../../../domain/repository";
import { ResponseApi } from "../responseApi";
import { Event } from "../../../domain/entities";

export class EditEventApp implements IEditEvent {

  constructor(private editEventRepo: EditEventRepo){};

  async editEvent(eventId: number, data:any): Promise<ResponseApi> {
    try {
      // Redundante, el id siempre sera un param.number del URL
      if(!(typeof(eventId) == "number")){
        return new ResponseApi(200, false, "Evento invalido", data);
      }
      
      if(!data){
        return new ResponseApi(200, false, "Datos para actualizar invalidos", data);
      }
      
      const result = await this.editEventRepo.editEvent(eventId, data);
      return new ResponseApi(200, true, "Evento actualizado", result);

    } catch (error:any) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
  }

}