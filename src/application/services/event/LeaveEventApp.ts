import { ILeaveEvent } from "../../../domain/services";
import { LeaveEventRepo } from "../../../domain/repository";
import { ResponseApi } from "../responseApi";

export class LeaveEventApp implements ILeaveEvent {

  constructor(private leaveEventRepo: LeaveEventRepo){};

  async leaveEvent(userId: number, data: any): Promise<ResponseApi> {
      try {
        if(!(typeof(userId) == "number") || !(typeof(data.eventId) == "number")){
          return new ResponseApi(200, false, "Usuario o evento invalido", data);
        }

        await this.leaveEventRepo.leaveEvent(userId, data.eventId);
        return new ResponseApi(200, true, "Dejando de asistir el evento", data);

      } catch (error:any) {
        return new ResponseApi(500, false, "Error interno del servidor", error.message)
      }
  }
}