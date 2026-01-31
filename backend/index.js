const express = require("express");
const cors = require("cors");

// Import routes
const uploadRoutes = require("./routes/upload");

const app = express();
const PORT = 3000;
let transactions = []


app.use(cors());
app.use(express.json());

// Use routes
app.use("/api", uploadRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});