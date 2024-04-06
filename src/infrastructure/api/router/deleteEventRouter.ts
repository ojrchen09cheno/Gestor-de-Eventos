import { deleteEventD } from "../dependencies";
import { Request, Response } from "express";

export const deleteEvent = async (req: Request, res: Response) => {
  const eventId = parseInt(req.params.eventId)
  const response = await deleteEventD.deleteEvent(eventId);
  res.json(response)
}

/**
 *  @swagger
 *  /eventos/{eventId}:
 *    delete:
 *      tags:
 *        - Event
 *      summary: Eliminar un evento
 *      parameters: 
 *        - in: path
 *          name: eventId
 *          description: Evento a eliminar
 *          schema:
 *            type: integer
 *            format: int64
 *            minimum: 0
 *      respones:
 *        '200':
 *          description: Evento eliminado
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *        '500':
 *          description: Error del servidor.
 *      security:
 *        - jwt
 */