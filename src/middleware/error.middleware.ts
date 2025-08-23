import { Request, Response, NextFunction } from "express";
import { ApiError } from "errors/api.error";

export function errorHandler(
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction,
) {
    console.error(err);

    if (err instanceof ApiError) {
        return res.status(err.status).json({
            message: err.message,
        });
    }

    // Fallback for unexpected errors
    res.status(500).json({
        message: "Internal Server Error",
    });
}
