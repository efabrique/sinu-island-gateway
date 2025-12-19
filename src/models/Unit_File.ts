import mongoose, { Schema, Document } from "mongoose";
import { ref } from "process";

export interface IFile extends Document {
  programme_units: string;
  unit_title: string;
  unit_prerequisite: string;
  unit_study_type: string[];
  unit_description: number;
  unit_study_period: string[];
  unit_credits: number;
}

const FileSchema: Schema = new Schema({
  programme_units: { type: String, required: true, unique: true },
  unit_title: { type: String, required: false },
  unit_prerequisite: { type: String, required: false },
  unit_study_type: { type: [String], required: false },
  unit_description: { type: String, required: false },
  unit_study_period: { type: [String], required: false },
  unit_credits: { type: Number, required: false },
});


export default mongoose.model<IFile>("unit_catalogues", FileSchema);
