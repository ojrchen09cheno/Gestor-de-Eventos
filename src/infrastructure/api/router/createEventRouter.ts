import { createEventD } from "../dependencies";
import { Request, Response } from "express";

export const createEvent = async (req: Request, res: Response) => {
  const response = await createEventD.createEvent(req.body);
  res.json(response)
}

export const createEventDoc = {
  tags: ["Event"],
  summary: "API para crear eventos",
  security: [
    {
      jwt: [],
    },
  ],
  requestBody: {
    description: "Datos del evento a crear",
    content: {
      "application/json": {
        schema: {
          $ref: "#components/schemas/event"
        }
      }
    },
  },
  responses: {
    '201': {
      description: "Creacion de evento exitosa",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/responseApi"
          }
        }
      }
    },
    '500': {
      $ref: "#/components/responses/500"
    }
  }
}