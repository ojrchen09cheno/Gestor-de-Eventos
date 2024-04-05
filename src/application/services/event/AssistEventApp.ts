import { AssistEventRepo } from "../../../domain/repository/event/assistEventRepo";
import { IAssistEvent } from "../../../domain/services/event/iAssistEvent";
import { ResponseApi } from "../responseApi";

export class AssistEventApp implements IAssistEvent {
  
  constructor(private assistEventRepo: AssistEventRepo){}
  async assistEvent(data:any): Promise<ResponseApi> {
    try {
      
      if(!(typeof(data.userId) == "number") || !(typeof(data.eventId) == "number") ){
        return new ResponseApi(200, false, "Usuario o evento invalido", data);
      }

      // No deberia de dar error de usuario/evento inexistente
      // Porque haria la solicitud con token del usuario y desde la pagina
      // del evento
      await this.assistEventRepo.assistEvent(data.userId, data.eventId);
      return new ResponseApi(201, true, "Asistiendo al evento", data);

    } catch (error: any) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
  }
}