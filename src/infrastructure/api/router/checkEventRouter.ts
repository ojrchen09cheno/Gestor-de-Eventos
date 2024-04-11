import { checkEventD } from "../dependencies";
import { Request, Response } from "express";

export const checkEvent = async (req: Request, res: Response) => {
  const response = await checkEventD.checkEvent(parseInt(req.params.eventId));
  res.json(response)
}

export const checkEventDoc = {
  tags: ["Event"],
  summary: "API para ver un evento",
  parameters:[
    {$ref: "#/components/parameters/eventId"}
  ],
  responses: {
    '201': {
      description: "Evento encontrado",
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