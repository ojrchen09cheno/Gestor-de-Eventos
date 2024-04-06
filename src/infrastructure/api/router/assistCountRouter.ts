import { assistCountD } from "../dependencies";
import { Request, Response } from "express";

export const assistCount = async (req: Request, res: Response) => {
  const response = await assistCountD.assistCount();
  console.log(response.data);
  res.json(response)
}