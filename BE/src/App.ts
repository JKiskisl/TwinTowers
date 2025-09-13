import express, { Request, Response } from "express";
import cors from "cors";
import openaiRoutes from "./routes/openai";

const app = express();
const port = 3000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4000"],
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
