import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import app from "./src/app.js";
import { scrapeBlogs } from "./src/scraper/scrapeBlogs.js";
import runAutomation from "./src/automation/runAutomation.js";
dotenv.config();

const startServer = async () => {
  try {
    await connectDB();

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });

    // run scraper once
    await scrapeBlogs();

  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

app.get("/run-automation", async (req, res) => {
  try {
    await runAutomation();
    res.send("Automation executed successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Automation failed");
  }
});


startServer();

