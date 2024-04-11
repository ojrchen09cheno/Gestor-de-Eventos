import { registerD } from "../dependencies";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const response = await registerD.register(req.body);
  res.json(response)
}

export const registerDoc = {
  tags: ["User"],
  summary: "API para registrarse",
  security: [
    {
      jwt: [],
    },
  ],
  requestBody: {
    description: "Datos del usuario para el registro",
    content: {
      "application/json": {
        schema: {
          $ref: "#components/schemas/users"
        }
      }
    },
  },
  responses: {
    '201': {
      description: "Registro exitoso",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/responseApi"
          }
        }
      }
    },
    '401': {
      $ref: "#/components/responses/500"
    }
  }
}