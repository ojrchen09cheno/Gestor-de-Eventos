import { ILogin } from "@domain/services/user/ILogin";
import { LoginRepo } from "@domain/repository/user/LoginRepo";
import bcrypt from "bcryptjs";
import { config } from "@config/config";
import jwt from "jsonwebtoken";
import { ResponseApi } from "../ResponseApi";
import { User } from "@domain/entities";

export class LoginApp implements ILogin {
  constructor(private loginRepo: LoginRepo) {}

  async login(user: User): Promise<ResponseApi> {
    try {
      
      if (!user.username || !user.password) {
        return new ResponseApi(200, false, "El usuario o la contraseña estan vacios", user);
      }

      const userDB = await this.loginRepo.findByUser(user.username);

      if (!user.username) {
        return new ResponseApi(200, false, "Usuario o contraseña incorrectos", user);
      }

      if (bcrypt.compareSync(user.password, userDB.password)) {

        let token = jwt.sign(
          {
            user: user.username,
            id: user.id,
          },
          config.SECRET!,
          {
            expiresIn: config.TOKEN_EXPIRE,
          }
        );

        delete user.password;
        user.token = token;
        return new ResponseApi(200, true, "Login exitoso", user);

      } else {

        delete user.password;
        return new ResponseApi(200,false,"Usuario o contraseña incorrectos",user);

      }

    } catch (error: any) {

      return new ResponseApi(500, false, "Error interno del servidor", error.message)

    }
  }
}
