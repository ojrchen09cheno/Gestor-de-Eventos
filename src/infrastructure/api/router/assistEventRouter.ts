import { assistEventD } from "../dependencies";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../../../config/config";

export const assistEvent = async (req: Request, res: Response) => {
  const header = req.headers["cookie"];
  const token = header!.split("=")[1];
  const decoded: any = jwt.verify(token, config.SECRET as string);
  const userId = decoded.id;
  const params = req.params;
  const response = await assistEventD.assistEvent(userId, params);
  res.json(response);
};
/**
 *  Post track
 *  @swagger
 *  /eventos/{eventId}:
 *   post:
 *    tags:
 *     - Event
 *    summary: "Un usuario asiste a un evento"
 *    parameters: 
 *     - name: eventId
 *       in: path
 *       required: true
 *       schema:
 *        type: integer
 *     - name: token
 *       in: cookie
 *       required: true
 *       schema:
 *        type: string
 *    respones:
 *     200:
 *      description: Muestra todos los eventos.
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *     500:
 *      description: Error del servidor.
 *    security:
 *     - jwt
 */
