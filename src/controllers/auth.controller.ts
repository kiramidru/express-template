import { Request, Response, NextFunction } from "express";
import * as userService from "services/user.service";

export async function signup(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password, name } = req.body;
    const user = await userService.createUser({ email, password, name });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
