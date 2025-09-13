import { Router, Request, Response } from "express";
import { instructions } from "../static files/instructions";
import OpenAI from "openai";

const router = Router();

// Initialize OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api.perplexity.ai",
});

// POST /api/ask
// Body: { prompt: "your string here" }
router.post("/ask", async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Prompt must be a string" });
    }

    const response = await client.chat.completions.create({
      model: "sonar-pro",
      messages: [
        {
          role: "system",
          content: instructions,
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.2,
      max_tokens: 1000,
      // stream: true // optional: enable if you want streaming
    });

    const answer = response.choices?.[0]?.message?.content ?? "No response";

    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
