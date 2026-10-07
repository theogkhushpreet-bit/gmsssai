import express from "express";
import OpenAI from "openai";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 8787);
const client = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;
const model = process.env.OPENAI_MODEL || "gpt-6-luna";

app.use(express.json({ limit: "1mb" }));
app.use(express.static(__dirname));

app.get("/api/health", (req, res) => res.json({ ok: true, service: "Bharat Jeevan AI", aiConfigured: !!client }));

const instructions = `You are Bharat Jeevan AI, a citizen/family intelligence assistant inside an Indian public-service prototype. Analyze the supplied structured family profile and the user's question. Be practical, concise and action-oriented. Separate facts from suggestions. Never claim official government eligibility unless verified. For health, organize information and advise professional care when appropriate; do not diagnose or prescribe. Do not request unnecessary sensitive identifiers. When web search is available, prefer authoritative Indian government sources for schemes, laws, deadlines and public services, and mention uncertainty when sources conflict.`;

app.post("/api/ai", async (req, res) => {
  if (!client) return res.status(503).json({ error: "OpenAI backend is not configured." });
  const { question, profile } = req.body || {};
  if (typeof question !== "string" || !question.trim()) return res.status(400).json({ error: "Question is required." });
  try {
    const response = await client.responses.create({
      model,
      instructions,
      tools: [{ type: "web_search" }],
      input: [{ role: "user", content: `User question:\n${question}\n\nStructured family profile:\n${JSON.stringify(profile || {}, null, 2)}` }]
    });
    const sources = [];
    for (const item of response.output || []) {
      if (item.type === "message") {
        for (const c of item.content || []) {
          for (const a of c.annotations || []) {
            if (a.type === "url_citation" && a.url) sources.push({ title: a.title || a.url, url: a.url });
          }
        }
      }
    }
    res.json({ answer: response.output_text || "No answer returned.", sources: [...new Map(sources.map(s => [s.url, s])).values()].slice(0, 8) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI request failed." });
  }
});

app.listen(port, () => console.log(`Bharat Jeevan AI running at http://localhost:${port}`));
