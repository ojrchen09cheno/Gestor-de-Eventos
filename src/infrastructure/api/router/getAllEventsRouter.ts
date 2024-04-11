import { getAllEventsD } from "../dependencies";
import { Request, Response } from "express";

export const getAllEvents = async (req: Request, res: Response) => {
  const response = await getAllEventsD.getAllEvents();
  res.json(response)
}

export const getAllEventsDoc = {
  tags: ["Event"],
  summary: "API para ver todos los eventos",
  responses: {
    '200': {
      description: "Eventos encontrados",
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