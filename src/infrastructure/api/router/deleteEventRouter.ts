import { deleteEventD } from "../dependencies";
import { Request, Response } from "express";

export const deleteEvent = async (req: Request, res: Response) => {
  const response = await deleteEventD.deleteEvent(req.params);
  res.json(response)
}