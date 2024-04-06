import { checkEventD } from "../dependencies";
import { Request, Response } from "express";

export const checkEvent = async (req: Request, res: Response) => {
  const response = await checkEventD.checkEvent(parseInt(req.params.eventId));
  res.json(response)
}

/**     
 *  @swagger
 *  /eventos/{eventId}:
 *    get:
 *      tags:
 *        - Event
 *      summary: Ver un evento
 *      description: Este endpoint es para ver el evento elegido
 *      parameters:
 *        - in: path
 *          name: eventId
 *          required: true
 *          schema:
 *            type: integer
 *      respones:
 *        '200':
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/responseApi"
 *        '500':
 *          description: Error del servidor.
 */ 