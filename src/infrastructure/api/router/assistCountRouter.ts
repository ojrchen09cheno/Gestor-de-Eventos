import { assistCountD } from "../dependencies";
import { Request, Response } from "express";

export const assistCount = async (req: Request, res: Response) => {
  const response = await assistCountD.assistCount();
  res.json(response)
}