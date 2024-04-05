import { createEventD } from "../dependencies";
import { Request, Response } from "express";

export const createEvent = async (req: Request, res: Response) => {
  const response = await createEventD.createEvent(req.body);
  res.json(response)
}