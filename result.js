const express = require("express");
const bodyParser = require("body-parser");
const dataForSEO = require("dataforseo");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/api/check-url", async (req, res) => {
    try {
        const { url } = req.body;

        // Initialize DataForSEO API client
        const client = new dataForSEO.API({
            auth: {
                apiKey: "YOUR_API_KEY_HERE"
            }
        });

        // Use DataForSEO API to check the URL
        const result = await client.onPageGet(url, {
            enable_browser_rendering: true
            // Add other required parameters as needed
        });

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
