import { ICheckEvent } from "../../../domain/services";
import { CheckEventRepo } from "../../../domain/repository";
import { ResponseApi } from "../responseApi";

export class CheckEventApp implements ICheckEvent {

  constructor(private checkEventRepo: CheckEventRepo){};
  async checkEvent(eventId: number): Promise<ResponseApi> {
    try {
      if(!(typeof(eventId) == "number")){
        return new ResponseApi(200, false, "Evento invalido", {});
      }

      const result = await this.checkEventRepo.checkEvent(eventId);

      if(result.length){
        return new ResponseApi(200, true, "Evento encontrado", result);
      }
      
      return new ResponseApi(200, false, "Evento no encontrado", result);

    } catch (error:any) {
      console.log(1)
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
  }
  
}