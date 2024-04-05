import { editEventD } from "../dependencies";
import { Request, Response } from "express";

export const editEvent = async (req: Request, res: Response) => {
  const response = await editEventD.editEvent(req.body);
  res.json(response)
}