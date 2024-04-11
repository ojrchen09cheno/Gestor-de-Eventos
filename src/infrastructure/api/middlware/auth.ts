import jwt from 'jsonwebtoken'
import {Request, Response} from 'express'
import { config } from '../../../config/config'
import { ResponseApi } from '@application/services/responseApi';

export function auth(req: Request, res: Response, next: any) {
  const header = req.headers["cookie"];
  let token = undefined;
  if(header){
    token = header.split("=")[1] || null;
  }

  if (!token) {
    return res.status(401).json(new ResponseApi(401, false, "Acceso denegado. Por favor ingrese a su cuenta", req.body));
  }
  try{
    const decoded = jwt.verify(token, config.SECRET as string)
    next();
  } catch (error) {
    res.status(401).json(new ResponseApi(401, false, "Token invalido", req.body)) 
  }
}