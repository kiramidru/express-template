import { Router } from "express";
import auth from "routes/auth.route";

const router = Router();

router.use("/", auth);

export default router;
