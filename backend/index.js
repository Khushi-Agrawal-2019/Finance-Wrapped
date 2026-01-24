// -------------------------------
// IMPORT REQUIRED LIBRARIES
// -------------------------------

// Express helps us create an HTTP server easily
const express = require("express");

// Multer helps us handle file uploads (CSV files in our case)
const multer = require("multer");

// CORS allows frontend apps (later React) to talk to this backend
const cors = require("cors");

// -------------------------------
// INITIALIZE APP
// -------------------------------

// Create an Express application instance
const app = express();

// Define the port on which the backend will run
const PORT = 3000;

// -------------------------------
// GLOBAL MIDDLEWARE
// -------------------------------

// Allow requests from other origins (frontend, Postman, etc.)
app.use(cors());

// Allow backend to read JSON request bodies
// (not used yet, but required later for filters, settings, AI prompts)
app.use(express.json());

// -------------------------------
// MULTER CONFIGURATION (FILE HANDLING)
// -------------------------------

// Define how and where uploaded files should be stored
const storage = multer.diskStorage({

  // Where to store the uploaded file
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  // How to name the uploaded file
  filename: (req, file, cb) => {
    // Adding timestamp prevents filename collisions
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create a multer instance using the above storage rules
const upload = multer({ storage });

// -------------------------------
// ROUTES
// -------------------------------

// Health check route (optional but good practice)
app.get("/", (req, res) => {
  res.send("Finance Wrapped Backend is running");
});

// CSV Upload Route
app.post(
  "/upload",

  // Multer middleware runs FIRST
  // It looks for a file with field name "file"
  upload.single("file"),

  // This function runs AFTER multer finishes processing the file
  (req, res) => {

    // Safety check: if no file was received
    if (!req.file) {
      return res.status(400).json({
        error: "No file received",
      });
    }

    // Log file details (useful for debugging)
    console.log("Uploaded file details:", req.file);

    // Send success response
    res.json({
      message: "File uploaded successfully",
      filename: req.file.filename,
      size: req.file.size,
    });
  }
);

// -------------------------------
// START SERVER
// -------------------------------

// Start listening for incoming requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
