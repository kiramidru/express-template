import "dotenv/config";
import express from "express";
import routes from "./routes/index.route";
import { errorHandler } from "middleware/error.middleware";

const app = express();

app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
