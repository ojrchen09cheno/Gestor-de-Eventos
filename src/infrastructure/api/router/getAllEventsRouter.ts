import { getAllEventsD } from "../dependencies";
import { Request, Response } from "express";

export const getAllEvents = async (req: Request, res: Response) => {
  const response = await getAllEventsD.getAllEvents();
  res.json(response)
}