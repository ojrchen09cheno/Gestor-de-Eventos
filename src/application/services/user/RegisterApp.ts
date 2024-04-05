import { RegisterRepo } from "@domain/repository/user/registerRepo";
import { IRegister } from "@domain/services";
import bcrypt from "bcryptjs";
import { ResponseApi } from "../responseApi";

export class RegisterApp implements IRegister {
  constructor(private registerRepo: RegisterRepo) {}
  async register(user: any): Promise<ResponseApi> {
    try {
      if (!user.username || !user.password) {
        delete user.password;
        return new ResponseApi(200,false,"El usuario o la contraseña estan vacios",user
        );
      }

      if (await this.registerRepo.findByUsername(user.username)) {
        delete user.password;
        return new ResponseApi(200, false, "El usuario ya existe", user);
      };

      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const encrypt = bcrypt.hashSync(user.password, salt);
      user.password = encrypt;

      await this.registerRepo.register(user);
      delete user.password;
      return new ResponseApi(201, true, "Registro exitoso", user);

    } catch (error: any) {
      return new ResponseApi(500,false,"Error interno del servidor",error.message);
    }
  }
}
