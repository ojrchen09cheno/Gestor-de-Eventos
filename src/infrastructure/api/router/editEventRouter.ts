import { editEventD } from "../dependencies";
import { Request, Response } from "express";

export const editEvent = async (req: Request, res: Response) => {
  const eventId = parseInt(req.params.eventId);
  const response = await editEventD.editEvent(eventId, req.body);
  res.json(response)
}

export const editEventDoc = {
  tags: ["Event"],
  summary: "API para editar eventos",
  security: [
    {
      jwt: [],
    },
  ],
  parameters:[
    {$ref: "#/components/parameters/eventId"}
  ],
  requestBody: {
    description: "Datos para editar el evento ",
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
      description: "Evento editado exitosamente",
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