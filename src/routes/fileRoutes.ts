import { Router } from "express";
import multer from "multer";
import FileModel from "../models/File.ts";
import fs from "fs";

const router = Router();

// Multer in-memory storage
const upload = multer({ storage: multer.memoryStorage() });

// Upload a PDF from client request
router.post("/upload", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: "No PDF uploaded" });

    const file = await FileModel.create({
      filename: req.file.originalname,
      data: req.file.buffer,
      mimetype: req.file.mimetype,
    });

    res.json({ msg: "PDF stored in MongoDB", file });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
});

// Upload a PDF from filesystem (server-side)
router.post("/upload-from-path", async (req, res) => {
  try {
    const filePath = req.body.path; // e.g., "D:/docs/myfile.pdf"
    if (!filePath) return res.status(400).json({ msg: "File path required" });

    const fileBuffer = fs.readFileSync(filePath);

    const file = await FileModel.create({
      filename: filePath.split("/").pop(),
      data: fileBuffer,
      mimetype: "application/pdf",
    });

    res.json({ msg: "PDF uploaded from filesystem", file });
  } catch (err) {
    res.status(500).json({ error: "Failed to upload" });
  }
});

// Search PDFs by filename
router.get("/search/:name", async (req, res) => {
  try {
    const keyword = req.params.name;
    console.log("Searching for:", keyword);
    const files = await FileModel.find({
      filename: keyword ? { $regex: keyword, $options: "i" } : {},
    });
    console.log("Found files:", files.length);
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
});

// Download file
router.get("/file/:id", async (req, res) => {
  const file = await FileModel.findById(req.params.id);
  if (!file) return res.status(404).send("File not found");

  res.contentType(file.mimetype);
  res.send(file.data);
});

export default router;
