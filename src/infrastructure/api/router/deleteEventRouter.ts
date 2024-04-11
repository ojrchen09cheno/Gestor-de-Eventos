import { deleteEventD } from "../dependencies";
import { Request, Response } from "express";

export const deleteEvent = async (req: Request, res: Response) => {
  const eventId = parseInt(req.params.eventId)
  const response = await deleteEventD.deleteEvent(eventId);
  res.json(response)
}

export const deleteEventDoc = {
  tags: ["Event"],
  summary: "API para eliminar eventos",
  security: [
    {
      jwt: [],
    },
  ],
  parameters:[
    {$ref: "#/components/parameters/eventId"}
  ],
  responses: {
    '200': {
      description: "Eliminacion exitosa",
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