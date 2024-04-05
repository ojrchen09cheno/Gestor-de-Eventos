import { leaveEventD } from "../dependencies";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../../../config/config";

export const leaveEvent = async (req: Request, res: Response) => {
  const header = req.headers["cookie"];
  const token = header!.split("=")[1];
  const decoded: any = jwt.verify(token, config.SECRET as string);
  const userId = decoded.id;
  const params = req.params;
  const response = await leaveEventD.leaveEvent(userId, params);
  res.json(response);
};