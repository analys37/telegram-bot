const express = require("express");
const axios = require("axios");
const app = express();

const TOKEN = "7405934950:AAELXHDD6UzT0pJ112AcgcbBCqWvstXK7vE";
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;

app.use(express.json());

app.post("/", async (req, res) => {
  const message = req.body.message;
  const chatId = message?.chat?.id;
  const text = message?.text;

  if (text === "/start") {
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: "🤖 Bot Node.js aktif dari Render.com!",
    });
  }

  res.sendStatus(200);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Bot is running on port " + PORT);
});
