import { uploadEventD } from '../dependencies';
import { Request, Response } from "express";
import * as fs from 'fs'
import { parse } from 'csv-parse'
import { ResponseApi } from "../../../application/services/responseApi";

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
    res.json(new ResponseApi(200, true, "Eventos creados", response))
  })
}