import { deleteEventD } from "../dependencies";
import { Request, Response } from "express";

export const deleteEvent = async (req: Request, res: Response) => {
  const eventId = parseInt(req.params.eventId)
  const response = await deleteEventD.deleteEvent(eventId);
  res.json(response)
}