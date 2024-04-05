import { AssistEventRepo } from "../../../domain/repository/event/assistEventRepo";
import { IAssistEvent } from "../../../domain/services/event/iAssistEvent";
import { ResponseApi } from "../responseApi";

export class AssistEventApp implements IAssistEvent {
  
  constructor(private assistEventRepo: AssistEventRepo){}
  async assistEvent(userId: number, data: any): Promise<ResponseApi> {
    try {
      if(!(typeof(userId) == "number") || !(typeof(data.eventId) == "number") ){
        return new ResponseApi(200, false, "Usuario o evento invalido", data);
      }

      await this.assistEventRepo.assistEvent(userId, data.eventId);
      return new ResponseApi(201, true, "Asistiendo al evento", data);

    } catch (error: any) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
  }
}