import { Request, Response, NextFunction } from "express";
import { validateToken } from "utils/jwt";

export function verifyAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const token: string = authHeader.split("Bearer ")[1];
  const user: string = validateToken(token);

  req.user = user;
  next();
}
