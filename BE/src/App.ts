import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import openaiRoutes from "./routes/openai";

dotenv.config();
const app = express();
const port = 3000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// Routes
app.use("/api", openaiRoutes);

// Health check
app.get("/healthy", (req: Request, res: Response) => {
  res.send("helathy!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
