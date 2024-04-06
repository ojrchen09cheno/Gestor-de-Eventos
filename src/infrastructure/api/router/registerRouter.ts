import { registerD } from "../dependencies";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const response = await registerD.register(req.body);
  res.json(response)
}