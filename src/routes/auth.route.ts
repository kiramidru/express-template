import { Router } from "express";
import { signup } from "controllers/auth.controller";
import { createUserValidator } from "validators/user.validate";
import { validateRequest } from "middleware/validate.middleware";

const router = Router();

router.post("/signup", createUserValidator, validateRequest, signup);

export default router;
