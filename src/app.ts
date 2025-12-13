import express from "express";
import { connectDB } from "./config/dbconnect.ts";
import fileRoutes from "./routes/fileRoutes.ts";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

// Routes
app.use("/", fileRoutes);

const PORT = 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
