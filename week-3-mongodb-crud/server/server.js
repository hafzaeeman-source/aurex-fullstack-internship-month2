require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "AUREX Week 3 MongoDB CRUD API is running!" }));
app.use("/api/items", itemRoutes);
app.use((req, res) => res.status(404).json({ message: "Route not found" }));
app.use((err, req, res, next) => {
  if (err.name === "ValidationError") return res.status(400).json({ message: err.message });
  if (err.name === "CastError") return res.status(400).json({ message: "Invalid field value" });
  if (err instanceof SyntaxError && err.status === 400) return res.status(400).json({ message: "Invalid JSON body" });
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5001;
connectDB()
  .then(() => app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`)))
  .catch((error) => { console.error("Startup failed:", error.message); process.exit(1); });
