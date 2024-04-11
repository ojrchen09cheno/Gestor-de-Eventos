import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";
import * as docs from '../infrastructure/api/router/index'

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.3",
  info: {
    title: "Documentacion de la API para gestor de eventos",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:8000",
    },
  ],
  paths: {
    "/login": {
      "post": docs.loginDoc
    },
    "/register": {
      "post": docs.registerDoc
    },
    "/eventos": {
      "get": docs.getAllEventsDoc,
      "post": docs.createEventDoc
    },
    "/eventos/{eventId}": {
      "get": docs.checkEventDoc,
      "put": docs.editEventDoc,
      "delete": docs.deleteEventDoc,
    },
    "/eventos/asistir/{eventId}": {
      "post": docs.assistEventDoc
    },
    "/eventos/dejar/{eventId}": {
      "delete": docs.leaveEventDoc
    },
    "/eventos/asistencia": {
      "get": docs.assistCountDoc
    },
    "/eventos/upload": {
      "post": docs.uploadEventsDoc
    },
  },
  components: {
    securitySchemes: {
      jwt: {
        type: "apiKey",
        in:"cookie",
        name: "token",
      },
    },
    parameters: {
      token:{
        description: "Este parametro se registra automaticamente al ingresar a la cuenta",
        name: "token",
        in: "cookie",
        required: false,
        schema: {
          type: "string",
        },
      },
      eventId:{
        name: "eventId",
        in: "path",
        required: true,
        schema: {
          type: "integer",
        },
      },
    },
    schemas: {
      users: {
        type: "object",
        required: ["username", "password", "name"],
        properties: {
          username: {
            type: "string",
            example: "user123",
          },
          password: {
            type: "string",
            example: "password123",
          },
          name: {
            type: "string",
            example: "Andres",
          },
        },
      },
      event: {
        type: "object",
        required: ["name", "addres", "date"],
        properties: {
          name: {
            type: "string",
            example: "Concierto",
          },
          address: {
            type: "string",
            example: "Cra. 84 #45d-24 ",
          },
          latitude: {
            type: "number",
            example: 48.856614,
          },
          longitude: {
            type: "number",
            example: 2.352221,
          },
          date: {
            type: "string",
            example: "2024-04-04",
          },
          country: {
            type: "string",
            example: "Colombia",
          },
          city: {
            type: "string",
            example: "Medellin",
          },
          description: {
            type: "string",
            example: "Evento de musica",
          },
        },
      },
      responseApi: {
        type: "object",
        required: ["statusCode", "success", "message", "data"],
        properties: {
          statusCode: {
            type: "integer",
            example: 200,
          },
          success: {
            type: "boolean",
            example: true,
          },
          message: {
            type: "string",
            example: "Mensaje descriptivo",
          },
          data: {
            type: "object",
            additionalProperties:true,
          },
        },
      },
    },
    responses:{
      500: {
        description: "Error interno del servidor",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/responseApi"
            }
          }
        }
      },
      401: {
        description: "Acceso denegado",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/responseApi"
            }
          }
        }
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/infrastructure/api/router/*.ts"],
  // authAction: {
  //   jwt: {
  //     name: "JWT",
  //     schema: {
  //       type: "apiKey",
  //       in: "cookie",
  //       name: "token",
  //     },
  //     value: "Bearer <JWT>",
  //   }
  // }
};

export default swaggerJSDoc(swaggerOptions);