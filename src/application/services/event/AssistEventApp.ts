import { AssistEventRepo } from "@domain/repository";
import { IAssistEvent } from "@domain/services";
import { ResponseApi } from "../ResponseApi";

export class AssistEventApp implements IAssistEvent {
  
  constructor(private assistEventRepo: AssistEventRepo){}
  async assistEvent(data: any): Promise<ResponseApi> {
    try {
      if(!(typeof(data.userId) == "number") || !(typeof(data.eventId) == "number") ){
        return new ResponseApi(200, false, "Usuario o evento invalido", data);
      }

      await this.assistEventRepo.assistEvent(data.userId, data.eventId);
      return new ResponseApi(201, true, "Asistiendo al evento", data);

    } catch (error: any) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
  }
}