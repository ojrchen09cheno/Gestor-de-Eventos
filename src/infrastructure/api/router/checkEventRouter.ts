import { checkEventD } from "../dependencies";
import { Request, Response } from "express";

export const checkEvent = async (req: Request, res: Response) => {
  const response = await checkEventD.checkEvent(parseInt(req.params.eventId));
  res.json(response)
}