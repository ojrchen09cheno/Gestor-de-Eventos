import { createEventD } from "../dependencies";
import { Request, Response } from "express";

export const createEvent = async (req: Request, res: Response) => {
  const response = await createEventD.createEvent(req.body);
  res.json(response)
}

/**     
 *  @swagger
 *  /eventos:
 *    post:
 *      tags:
 *        - Event
 *      summary: "Crear un evento"
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#components/schemas/event"
 *      respones:
 *        '201':
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/responseApi"
 *        '500':
 *          description: Error del servidor.
 *      security:
 *        - jwt
 */ 