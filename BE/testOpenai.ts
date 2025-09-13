import OpenAI from "openai";
import dotenv from "dotenv";
import { instructions } from "./src/static files/instructions";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
  baseURL: "https://api.perplexity.ai",
});

async function runTest() {
  try {
    const response = await client.chat.completions.create({
      model: "sonar-pro",
      messages: [
        { role: "system", content: instructions },
        {
          role: "user",
          content: "Tell me about Husqvarna",
        },
      ],
      temperature: 0.2,
      max_tokens: 10000,
    });

    console.log("AI Response:", response.choices?.[0]?.message?.content);
  } catch (err) {
    console.error("Error:", err);
  }
}

runTest();
