import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { ENV } from "./lib/env.js";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "API is healthy and running" });
});

console.log("NODE_ENV", ENV.NODE_ENV);

if (ENV.NODE_ENV === "production") {
  const frontendDistPath = path.resolve(__dirname, "..", "..", "frontend", "dist");
  app.use(express.static(frontendDistPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
}

app.listen(ENV.PORT, () => {
  console.log("Server is running on port", ENV.PORT);
});