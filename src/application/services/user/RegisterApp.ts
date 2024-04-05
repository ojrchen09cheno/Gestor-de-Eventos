import { RegisterRepo } from "@domain/repository/user/RegisterRepo";
import { IRegister } from "@domain/services";
import bcrypt from "bcryptjs";
import { ResponseApi } from "../ResponseApi";
import { User } from "@domain/entities";

export class RegisterApp implements IRegister {
  constructor(private registerRepo: RegisterRepo) {}
  async register(user: User): Promise<ResponseApi> {
    try {
      if (!user.username || !user.password) {
        delete user.password;
        return new ResponseApi(200,false,"El usuario o la contraseña estan vacios",user
        );
      }

      if (await this.registerRepo.findByUsername(user.username)) {
        delete user.password;
        return new ResponseApi(200, false, "El usuario ya existe", user);}

      const encrypt = bcrypt.hashSync(user.password, 10);
      user.password = encrypt;
      await this.registerRepo.register(user);
      delete user.password;
      return new ResponseApi(201, true, "Registro exitoso", user);
    } catch (error: any) {
      return new ResponseApi(500,false,"Error interno del servidor",error.message);
    }
  }
}
