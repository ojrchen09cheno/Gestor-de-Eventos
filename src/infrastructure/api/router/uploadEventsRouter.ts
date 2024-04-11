import { uploadEventD } from '../dependencies';
import { Request, Response } from "express";
import * as fs from 'fs'
import { parse } from 'csv-parse'

export const uploadEvents = async (req: Request, res: Response) => {

  const data = fs.readFileSync('uploads/events.csv', { encoding: 'utf-8' })
  parse(data, {
    delimiter: ',',
    columns: true
  }, async (error, result) => {
    if(error) {
      res.json(error.message)
    }
    const response = await uploadEventD.uploadEvents(result);
    res.json(response)
  })
}

export const uploadEventsDoc = {
  tags: ["Event"],
  summary: "API para montar un archivo y crear eventos",
  description: "API para montar un archivo y crear varios eventos con archivo csv delimitado por coma (,) y el siguiente encabezado: \n\n name,address,latitude,longitude,date,country,city,description \n\n string,string,decimal,decimal,YYYY-mm-dd,string,string,string",
  security: [
    {
      jwt: [],
    },
  ],
  requestBody: {
    content: {
      "text/csv": {
        schema: {
          type: "string",
          format: "binary"
        }
      }
    }
  },
  responses: {
    '201': {
      description: "Eventos creados exitosamente",
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