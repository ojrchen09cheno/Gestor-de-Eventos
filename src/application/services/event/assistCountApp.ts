import { IAssistCount } from "../../../domain/services";
import { AssistCountRepo } from "../../../domain/repository";
import { ResponseApi } from "../responseApi";
import { TSMap } from "typescript-map";

export class AssistCountApp implements IAssistCount {

  constructor(private assistCountRepo: AssistCountRepo){}
  
  async assistCount(): Promise<any> {
    try {
      const result = await this.assistCountRepo.assistCount();
      let map = new TSMap<string, number>();
      for(let i = 0; i < result.length; i++){
        const element: any = result[i];
        const date = element.date.toString()
        const count = parseInt(element.count)
        if(map.get(date)){
          const temp = map.get(date)
          map.set(date, temp + count)
        }
        else {
          map.set(date, count)
        }
      }

      return new ResponseApi(200, true, "Eventos encontrados", map.toJSON());

    } catch (error:any) {
      return new ResponseApi(500, false, "Error interno del servidor", error.message);
    }
  }
}