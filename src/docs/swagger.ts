import swaggerJSDoc, {OAS3Definition, OAS3Options} from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.3",
    info: {
        title: "Documentacion de la API para gestor de eventos",
        version: "1.0.0",
    },
    servers: [
        {
            url:"http://localhost:8000",
        },
    ],
    components: {
        securitySchemes: {
            jwt: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        },
        schemas:{
            users: {
                type: "object",
                required: ["username", "password", "name"],
                properties: {
                    username: { 
                        type: "string",
                        example: "user123"
                    },
                    password: { 
                        type: "string",
                        example: "password123"
                    },
                    name: { 
                        type: "string",
                        example: "Andres"
                    },
                },
            },
            event: {
                type: "object",
                required: ["name", "addres", "date"],
                properties: {
                    name: {
                        type: "string",
                        example: "Concierto"
                    },
                    address: {
                      type: "string",
                      example: "Cra. 84 #45d-24 "
                    },
                    latitude: {
                      type: "number",
                      example: 48.856614
                    },
                    longitude: {
                      type: "number",
                      example: 2.352221
                    },
                    date: {
                      type: "string",
                      example: "2024-04-04"
                    },
                    country: {
                      type: "string",
                      example: "Colombia"
                    },
                    city: {
                      type: "string",
                      example: "Medellin"
                    },
                    description: {
                      type: "string",
                      example: "Evento de musica"
                    }
                }
            },
            // responseApi: {
            //     type: "object",
            //     required: ["statusCode", "success", "message", "data"],
            //     properties: {
            //         statusCode: { 
            //             type: "integer",
            //             example: 200
            //         },
            //         success: { 
            //             type: "boolean",
            //             example: true
            //         },
            //         message: { 
            //             type: "string",
            //             example: "Mensaje descriptivo"
            //         },
            //         data: {
            //             type: "object",
            //             example: {
            //                 data1: "ejemplo",
            //                 data2: "ejemplo 2"
            //             }
            //         }
            //     },
            // },
        }
    }
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./src/infrastructure/api/router/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);