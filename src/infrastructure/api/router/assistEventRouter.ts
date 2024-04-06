import { assistEventD } from "../dependencies";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../../../config/config";

export const assistEvent = async (req: Request, res: Response) => {
  const header = req.headers["cookie"];
  const token = header!.split("=")[1];
  const decoded: any = jwt.verify(token, config.SECRET as string);
  const userId = decoded.id;
  const eventId = parseInt(req.params.eventId);
  const data = { userId, eventId}
  const response = await assistEventD.assistEvent(data);
  res.json(response);
};

/**
 *  @swagger
 *  /eventos/asistir/{eventId}:
 *    get:
 *      tags:
 *        - Event
 *      summary: Un usuario asiste a un evento
 *      description: Endpoint para asistir a eventos
 *      parameters: 
 *        - in: path
 *          name: eventId
 *        - in: cookie
 *          name: token
 *          schema:
 *            type: string
 *      respones:
 *        200:
 *          description: Asistiendo a evento
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *        500:
 *          description: Error del servidor.
 *      security:
 *        - jwt
 */