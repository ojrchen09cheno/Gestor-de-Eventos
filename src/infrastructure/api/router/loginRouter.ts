import { loginD } from "../dependencies";
import { CookieOptions, Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  const response = await loginD.login(req.body);
  delete req.body.contrasena;
  // Duracion de la sesion poner en .env?
  let options: CookieOptions = {
    maxAge: 48 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
  res.cookie("token", response.data.token, options);
  res.json(response)
}