// File: /api/detectText.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { text } = req.body;

  try {
    const response = await axios.post(
      "https://api.zerogpt.com/api/detect/detectText",
      {
        text: "",
        input_text: text,
      },
      {
        headers: {
          ApiKey: import.meta.env.VITE_ZERO_GPT_KEY, // Store your API key in .env
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error detecting text",
      details: error.response?.data || error.message,
    });
  }
}
