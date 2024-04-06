import { leaveEventD } from "../dependencies";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../../../config/config";

export const leaveEvent = async (req: Request, res: Response) => {
  const header = req.headers["cookie"];
  const token = header!.split("=")[1];
  const decoded: any = jwt.verify(token, config.SECRET as string);
  const userId = decoded.id;
  const eventId = parseInt(req.params.eventId);
  const data = { userId, eventId }
  const response = await leaveEventD.leaveEvent(data);
  res.json(response);
};