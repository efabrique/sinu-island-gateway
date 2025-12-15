
import { Router } from "express";
import multer from "multer";
import PolicyFileModel from "../models/Policy_File.ts";
import fs from "fs";
import CoursesFiles from "../models/Courses_File.ts";
import readXlsxFile from "read-excel-file/node";


const router = Router();



// Multer in-memory storage
const upload = multer({ storage: multer.memoryStorage() });

// Upload a PDF from client request
router.post("/policy_files/upload", upload.single("pdf"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: "No PDF uploaded" });

    const file = await PolicyFileModel.create({
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
router.post("/policy_files/upload-from-path", async (req, res) => {
  try {
    const filePath = req.body.path; // e.g., "D:/docs/myfile.pdf"
    if (!filePath) return res.status(400).json({ msg: "File path required" });

    const fileBuffer = fs.readFileSync(filePath);

    const file = await PolicyFileModel.create({
      filename: filePath.split("/").pop(),
      data: fileBuffer,
      mimetype: "application/pdf",
    });

    res.json({ msg: "PDF uploaded from filesystem", file });
  } catch (err) {
    res.status(500).json({ error: "Failed to upload" });
  }
});
// search all PDFs and return metadata
router.get("/policy_files/all", async (req, res) => {
  try {
      console.log("Test route hit!");

    const files = await PolicyFileModel.find()
      .select("_id filename mimetype createdAt updatedAt")
      .sort({ createdAt: -1 });

    res.json(files);
  } catch (err) {
    console.error("Error fetching files:", err);
    res.status(500).json({ error: "Failed to fetch files" });
  }
});

// Search PDFs by filename
router.get("/policy_files/search/:name", async (req, res) => {
  try {
    const keyword = req.params.name;
    console.log("Searching for:", keyword);
    const files = await PolicyFileModel.find({
      filename: keyword ? { $regex: keyword, $options: "i" } : {},
    });
    console.log("Found files:", files.length);
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
});

// Download file
router.get("/policy_files/file/:id", async (req, res) => {
  const file = await PolicyFileModel.findById(req.params.id);
  if (!file) return res.status(404).send("File not found");

  res.contentType(file.mimetype);
  res.send(file.data);
});

router.post("/programme_catalogue/upload_programmes", async (req, res) => {
  try {
        const filePath = req.body.path; // e.g., "D:/docs/myfile.pdf"
    if (!filePath) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    
    const rows = await readXlsxFile(filePath);
    console.log("Excel rows:", rows.length);

    if (!rows.length) {
      return res.status(400).json({ error: "Excel file is empty" });
    }

    const header = rows[0];         // First row → column names
    const dataRows = rows.slice(1); // Following rows → data
    console.log("Header:", header);
        console.log("datarows:", dataRows.length);

    let inserted = 0;
    let updated = 0;

    for (const row of dataRows) {
      if (row.length === 0 || row.every((v) => v === null || v === "")) {
        continue; // skip empty rows
      }

      const record: any = {};

      // Map Excel columns → object
      row.forEach((value, idx) => {
        const key = String(header[idx]);

        if (!key) return;

        // Convert study type string → array
        if (key === "programme_study_type" && typeof value === "string") {
          record[key] = value.split(",").map((v) => v.trim());
        }
        // Convert credits to number
        else if (key === "programme_credits") {
          record[key] = Number(value);
        }
        else {
          record[key] = value;
        }
      });

      // Ensure required primary field exists
      if (!record.programme_code) continue;

      // Find existing record
      const existing = await CoursesFiles.findOne({
        programme_code: record.programme_code,
      });

      if (existing) {
        await CoursesFiles.updateOne(
          { programme_code: record.programme_code },
          { $set: record }
        );
        updated++;
      } else {
        await CoursesFiles.create(record);
        inserted++;
      }
    }

    return res.json({
      success: true,
      message: "Upload processed successfully",
      inserted,
      updated,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ error: error.message });
  }
});


router.get("/programme_catalogue/search", async (req, res) => {
  try {
    const { name, level, faculty } = req.query;

    const query: any = {};

    // Search by programme name (optional)
    if (name && name !== "all") {
      query.programme_name = { $regex: name, $options: "i" };
    }

    // Filter by study level (SIQF / level)
    if (level && level !== "all") {
      query.programme_level = level;
    }

    // Filter by faculty / school
    if (faculty && faculty !== "all") {
      query.programme_faculty = { $regex: faculty, $options: "i" };
    }

    const programmes = await CoursesFiles.find(query)
      .sort({ programme_name: 1 });

    res.json({
      count: programmes.length,
      data: programmes,
    });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Failed to fetch programmes" });
  }
});


router.get("/programme_catalogue/code/:code", async (req, res) => {
  try {
    const { code } = req.params;

    // ONLY search by programme_code
    const programme = await CoursesFiles.findOne({
      programme_code: code,
    });

    if (!programme) {
      return res.status(404).json({ error: "Programme not found" });
    }

    res.json(programme);
  } catch (error) {
    console.error("Code search error:", error);
    res.status(500).json({ error: "Failed to fetch programme" });
  }
});


export default router;
