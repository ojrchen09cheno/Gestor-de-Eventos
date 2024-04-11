import { loginD } from "../dependencies";
import { CookieOptions, Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  const response:any = await loginD.login(req.body);
  delete req.body.password;
  // Duracion de la sesion poner en .env?
  let options: CookieOptions = {
    maxAge: 48 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };
  res.cookie("token", response.data.token, options);
  res.json(response)
}

export const loginDoc = {
  tags: ["User"],
  summary: "API para ingresar a una cuenta",
  security: [
    {
      jwt: [],
    },
  ],
  requestBody: {
    description: "Datos del usuario para ingreso",
    content: {
      "application/json": {
        schema: {
          type: "object",
          required: ["username", "password"],
          properties: {
            username: {
              type: "string",
              example: "user123",
            },
            password: {
              type: "string",
              example: "password123",
            },
          },
        }
      }
    },
  },
  responses: {
    '201': {
      description: "Ingreso exitoso",
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