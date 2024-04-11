import { assistEventD } from "../dependencies";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../../../config/config";

export const assistEvent = async (req: Request, res: Response) => {
  const header = req.headers["cookie"];
  const token = header!.split("=")[1];
  const decoded: any = jwt.verify(token, config.SECRET as string);
  const userId = decoded.id;
  const eventId = parseInt(req.params.eventId);
  const data = { userId, eventId}
  const response = await assistEventD.assistEvent(data);
  res.json(response);
};

export const assistEventDoc = {
  tags: ["Event"],
  summary: "API para que el usuario asista a un evento",
  security: [
    {
      jwt: [],
    },
  ],
  parameters:[
    {$ref: "#/components/parameters/token"},
    {$ref: "#/components/parameters/eventId"}
  ],
  responses: {
    '201': {
      description: "Usuario asisitiendo a evento exitosamente",
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