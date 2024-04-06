import { editEventD } from "../dependencies";
import { Request, Response } from "express";

export const editEvent = async (req: Request, res: Response) => {
  const eventId = parseInt(req.params.eventId);
  const response = await editEventD.editEvent(eventId, req.body);
  res.json(response)
}