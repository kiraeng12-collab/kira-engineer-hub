import cors from "cors";
import express from "express";
import helmet from "helmet";
import { z } from "zod";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(helmet());
app.use(cors({ origin: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000" }));
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_request, response) => {
  response.json({ ok: true, service: "kiraengineer-backend" });
});

app.get("/api/performance", (_request, response) => {
  response.json({
    status: "COMING_SOON",
    title: "Verified Performance Dashboard Coming Soon",
    message: "Transparent performance tracking is currently under development for KE HUB."
  });
});

app.post("/api/telegram/signal", (request, response) => {
  const schema = z.object({
    instrument: z.string(),
    direction: z.enum(["BUY", "SELL"]),
    entry: z.number(),
    stopLoss: z.number().optional(),
    takeProfit: z.number().optional()
  });

  const parsed = schema.safeParse(request.body);
  if (!parsed.success) return response.status(400).json({ error: "Invalid signal payload" });

  response.json({
    accepted: true,
    message: "Telegram bot posting is ready to connect with TELEGRAM_BOT_TOKEN.",
    signal: parsed.data
  });
});

app.listen(port, () => {
  console.log(`KIRAENGINEER backend listening on port ${port}`);
});
