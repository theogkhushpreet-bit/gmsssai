const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve the frontend
app.use(express.static(path.join(__dirname, "public")));

// Root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// AI API
app.post("/api/ai", async (req, res) => {
    try {
        // Your existing Gemini/OpenAI AI code goes here
        res.json({
            answer: "Bharat Jeevan AI backend is working."
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "AI service failed"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Bharat Jeevan AI running on port ${PORT}`);
});
