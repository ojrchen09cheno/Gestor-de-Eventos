import { getAllEventsD } from "../dependencies";
import { Request, Response } from "express";

export const getAllEvents = async (req: Request, res: Response) => {
  const response = await getAllEventsD.getAllEvents();
  res.json(response)
}

/**     
 *  @swagger
 *  /eventos:
 *    get:
 *      tags:
 *        - Event
 *      summary: Ver todos los eventos
 *      description: Este endpoint es para ver todos los eventos
 *      respones:
 *        '200':
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties: 
 *                  type: string
 *                  example: OK
 *        '500':
 *          description: Error del servidor.
 */ 