import { ILeaveEvent } from "../../../domain/services";
import { LeaveEventRepo } from "../../../domain/repository";
import { ResponseApi } from "../responseApi";

export class LeaveEventApp implements ILeaveEvent {

  constructor(private leaveEventRepo: LeaveEventRepo){};

  async leaveEvent(data: any): Promise<ResponseApi> {
      try {

        if(!(typeof(data.userId) == "number") || !(typeof(data.eventId) == "number")){
          return new ResponseApi(200, false, "Usuario o evento invalido", data);
        }

        // No deberia de dar error de usuario/evento inexistente
        // Porque haria la solicitud con token del usuario y desde la pagina
        // del evento
        
        await this.leaveEventRepo.leaveEvent(data.userId, data.eventId);
        return new ResponseApi(200, true, "Dejando de asistir el evento", data);

      } catch (error:any) {
        return new ResponseApi(500, false, "Error interno del servidor", error.message)
      }
  }
}