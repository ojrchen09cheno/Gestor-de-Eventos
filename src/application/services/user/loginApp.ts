import { ILogin } from "../../../domain/services/user/iLogin";
import { LoginRepo } from "../../../domain/repository/user/loginRepo";
import bcrypt from "bcryptjs";
import { config } from "../../../config/config";
import jwt from "jsonwebtoken";
import { ResponseApi } from "../responseApi";
import { User } from "../../../domain/entities";

export class LoginApp implements ILogin {
  constructor(private loginRepo: LoginRepo) {}

  async login(user: any): Promise<ResponseApi> {
    try {
      
      if (!user.username || !user.password) {
        return new ResponseApi(200, false, "El usuario o la contraseña estan vacios", user);
      }

      let userDB = await this.loginRepo.findByUser(user.username);

      // Si no encuentra usuario, retorna lista vacia
      if (!await userDB.length) {
        delete user.password
        return new ResponseApi(200, false, "Usuario o contraseña incorrectos", user);
      }

      userDB = userDB[0]

      if (bcrypt.compareSync(user.password, userDB.password)) {

        let token = jwt.sign(
          {
            name: userDB.name,
            username: userDB.username,
            id: userDB.id,
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
