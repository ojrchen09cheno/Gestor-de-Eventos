import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'
import { config } from '../../../config/config'

export function auth(req: Request, res: Response, next: any) {
  const header = req.headers["cookie"];
  const token = header!.split("=")[1] || null;

  if (!token) {
    return res.status(401).json({error: "Acceso denegado"});
  }
  try{
    const decoded = jwt.verify(token, config.SECRET as string)
    next();
  } catch (error) {
    res.status(401).json({ error: "Token invalido" }) 
  }
}