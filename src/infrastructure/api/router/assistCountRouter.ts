import { assistCountD } from "../dependencies";
import { Request, Response } from "express";

export const assistCount = async (req: Request, res: Response) => {
  const response = await assistCountD.assistCount();
  res.json(response)
}

export const assistCountDoc = {
  tags: ["Event"],
  summary: "API para contar asistentes a eventos",
  responses: {
    '201': {
      description: "Conteo exitoso",
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