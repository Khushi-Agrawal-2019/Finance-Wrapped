
const express = require("express");
const multer = require("multer");
const cors = require("cors");


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({

  // storing the uploaded file
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    // Adding timestamp prevents filename collisions
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


// Health check route 
app.get("/", (req, res) => {
  res.send("Finance Wrapped Backend is running");
});

// CSV Upload Route
app.post(
  "/upload",

  upload.single("file"),

  (req, res) => {
    if (!req.file) {
      return res.status(400).json({
        error: "No file received",
      });
    }

    console.log("Uploaded file details:", req.file);


    res.json({
      message: "File uploaded successfully",
      filename: req.file.filename,
      size: req.file.size,
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
